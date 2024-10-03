import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from '../../../core/services/product-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from '../../../shared/models/product.model';
import { Result } from '../../../shared/models/results.model';
import { transformKeysRecursively } from '../../../shared/utils/general';
import _ from 'lodash';
import { DetailedResultsDialogComponent } from './detailed-results-dialog/detailed-results-dialog.component';

@Component({
  selector: 'app-test-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class TestResultsTabComponent implements OnInit {
  @Input() product!: Product;
  results: Result[] = [];
  displayedColumns: string[] = ['suiteName', 'dateReported', 'status'];

  constructor(
    private productService: ProductApiService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.productService.getProductTestResults(this.product.id).subscribe((results: any[]) => {
      this.results = results.map((result) => transformKeysRecursively(result, _.camelCase) as Result);
    });
  }

  openResultDialog(result: Result): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.maxWidth = '80vw';
    dialogConfig.maxHeight = '80vh';
    dialogConfig.data = { result };

    this.dialog.open(DetailedResultsDialogComponent, dialogConfig);
  }
}
