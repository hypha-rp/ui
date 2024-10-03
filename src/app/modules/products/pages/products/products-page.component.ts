import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductApiService } from '../../../../core/services/product-api.service';
import { NewProductDialogComponent } from '../../components/dialogs/new-product/new-product-dialog.component';
import { Router } from '@angular/router';
import { copyUuidToClipboard } from '../../../../shared/utils/general';

@Component({
  selector: 'app-products',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPage implements OnInit {
  constructor(
    private productService: ProductApiService,
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
