import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductApiService } from '../../../../../core/services/product-api.service';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.css'],
})
export class NewProductDialogComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewProductDialogComponent>,
    private productService: ProductApiService,
  ) {
    this.productForm = this.fb.group({
      fullName: ['', Validators.required],
      shortName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.createProduct(product).subscribe();
      this.dialogRef.close(product)
    }
  }
}
