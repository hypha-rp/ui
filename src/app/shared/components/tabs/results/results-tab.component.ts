import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from '../../../../core/services/product-api.service';
import { RelationshipApiService } from '../../../../core/services/relationship-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Result } from '../../../../shared/models/results.model';
import { transformKeysRecursively } from '../../../../shared/utils/general';
import _ from 'lodash';
import { DetailedResultsDialog } from '../../../../shared/components/dialogs/results-details/results-details-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class TestResultsTabComponent implements OnInit {
  @Input() uuid!: string;
  results: Result[] = [];
  displayedColumns: string[] = ['suiteName', 'dateReported', 'status'];
  hasReportingProduct: boolean = false;

  constructor(
    private productService: ProductApiService,
    private integrationService: RelationshipApiService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes('integration-details')) {
      this.integrationService.getRelationshipTestResults(this.uuid).subscribe((results: any[]) => {
        this.results = results.map((result) => transformKeysRecursively(result, _.camelCase) as Result);
        this.updateDisplayedColumns();
      });
    } else {
      this.productService.getProductTestResults(this.uuid).subscribe((results: any[]) => {
        this.results = results.map((result) => transformKeysRecursively(result, _.camelCase) as Result);
        this.updateDisplayedColumns();
      });
    }
  }

  updateDisplayedColumns(): void {
    this.hasReportingProduct = this.results.some((result) => result.productName);
    if (this.hasReportingProduct) {
      this.displayedColumns.push('reportingProduct');
    }
  }

  openResultDialog(result: Result): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.maxWidth = '80vw';
    dialogConfig.maxHeight = '80vh';
    dialogConfig.data = { result };

    this.dialog.open(DetailedResultsDialog, dialogConfig);
  }
}
