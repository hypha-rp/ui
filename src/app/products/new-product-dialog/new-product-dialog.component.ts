import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient,
  ) {
    this.productForm = this.fb.group({
      fullName: ['', Validators.required],
      shortName: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.http.post('http://localhost:8081/db/product', product).subscribe(
        (response) => {
          console.log('Product saved successfully', response);
          this.dialogRef.close(product);
        },
        (error) => {
          console.error('Error saving product', error);
        },
      );
    }
  }
}
