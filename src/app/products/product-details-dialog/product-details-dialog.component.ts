import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { copyUuidToClipboard } from '../../utils/utils';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Product {
  id: string;
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
  styleUrls: ['./product-details-dialog.component.css'],
})
export class ProductDetailsDialogComponent implements OnInit {
  product: Product;
  integrations: Product[] = [];
  showIntegrationForm = false;
  integrationProductID: string = '';

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private productService: ProductService,
    public snackBar: MatSnackBar,
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
    this.productService.getProductIntegrations(this.product.id).subscribe((integrations) => {
      this.integrations = integrations;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  copyToClipboard(uuid: string) {
    copyUuidToClipboard(uuid, this.snackBar);
  }

  addIntegration(): void {
    const newIntegration = {
      productID1: this.product.id,
      productID2: this.integrationProductID,
    };

    this.productService.createIntegration(newIntegration).subscribe(() => {
      this.productService.getProductIntegrations(this.product.id).subscribe((integrations) => {
        this.integrations = integrations;
        this.showIntegrationForm = false;
        this.integrationProductID = '';
      });
    });
  }
}
