import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { copyUuidToClipboard } from '../../utils/utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css'],
})
export class ProductDetailsDialogComponent implements OnInit {
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private productService: ProductService,
    public snackBar: MatSnackBar,
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  copyToClipboard(uuid: string) {
    copyUuidToClipboard(uuid, this.snackBar);
  }
}
