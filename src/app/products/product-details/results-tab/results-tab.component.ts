import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from '../../../models/product.model';
import { Result } from '../../../models/results.model';
import { mapKeysDeep } from '../../../utils/utils';
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
    private productService: ProductService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.productService.getProductTestResults(this.product.id).subscribe((results: any[]) => {
      this.results = results.map((result) => mapKeysDeep(result, _.camelCase) as Result);
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
