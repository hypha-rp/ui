import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductApiService } from '../../../../../core/services/product-api.service';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-new-integration-dialog',
  templateUrl: './new-integration-dialog.component.html',
  styleUrls: ['./new-integration-dialog.component.css'],
})
export class NewIntegrationDialog implements OnInit {
  searchForm: FormGroup;
  searchResults: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductApiService,
    public dialogRef: MatDialogRef<NewIntegrationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { productId: string },
  ) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
  }

  ngOnInit(): void {}

  onSearch(): void {
    const query = this.searchForm.get('searchQuery')?.value;
    if (query) {
      this.productService.searchProducts(query).subscribe((products) => {
        this.searchResults = products.filter((product) => product.id !== this.data.productId);
      });
    }
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onConfirm(): void {
    if (this.selectedProduct) {
      this.dialogRef.close(this.selectedProduct);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
