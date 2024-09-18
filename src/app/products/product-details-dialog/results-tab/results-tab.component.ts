import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../models/product.model';
import { Result } from '../../../models/results.model';
import { mapKeysDeep } from '../../../utils/utils';
import _ from 'lodash';

@Component({
  selector: 'app-test-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class TestResultsTabComponent implements OnInit {
  @Input() product!: Product;
  results: Result[] = [];
  expandedSuites: { [key: string]: boolean } = {};

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

  toggleSuiteExpansion(suiteId: string): void {
    this.expandedSuites[suiteId] = !this.expandedSuites[suiteId];
  }

  copyMessage(message: string): void {
    navigator.clipboard.writeText(message).then(() => {
      this.snackBar.open('Message copied to clipboard', 'Close', {
        duration: 2000,
      });
    });
  }
}
