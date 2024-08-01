import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './product.service';
import { NewProductDialogComponent } from '../new-product-dialog/new-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'fullName', 'shortName', 'contactEmail'];
  products: any[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  
  openNewProductDialog(): void {
    const dialogRef = this.dialog.open(NewProductDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.products.push(result);
        this.loadProducts();
      }
    });
  }
}