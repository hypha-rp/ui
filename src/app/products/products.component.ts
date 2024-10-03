import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './product.service';
import { NewProductDialogComponent } from './new-product-dialog/new-product-dialog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Router } from '@angular/router';
import { copyUuidToClipboard } from '../utils/utils';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {}

  displayedColumns: string[] = ['ID', 'fullName', 'shortName', 'contactEmail'];
  products: any[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openNewProductDialog(): void {
    const dialogRef = this.dialog.open(NewProductDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.products.push(result);
        this.loadProducts();
      }
    });
  }

  openProductDetails(product: any): void {
    this.router.navigate(['/product-details', product.id]);
  }

  copyToClipboard(uuid: string) {
    copyUuidToClipboard(uuid, this.snackBar);
  }
}
