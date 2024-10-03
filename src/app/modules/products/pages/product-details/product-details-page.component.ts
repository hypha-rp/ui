import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../../../../core/services/product-api.service';
import { copyUuidToClipboard } from '../../../../shared/utils/general';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPage implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error('Product ID is null');
    }
  }

  copyToClipboard(uuid: string) {
    copyUuidToClipboard(uuid, this.snackBar);
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
