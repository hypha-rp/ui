import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ProductService } from '../products/product.service';

interface Product {
  ID: number;
  fullName: string;
  shortName: string;
  contactEmail: string;
}

interface Integration {
  ID: number;
  productID1: number;
  productID2: number;
  Product1: Product;
  Product2: Product;
}

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css']
})
export class ProductDetailsDialogComponent implements OnInit {
  product: Product;
  integrations: Product[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private productService: ProductService
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
    this.productService.getProductIntegrations(this.product.ID).subscribe((integrations) => {
      this.integrations = integrations;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}