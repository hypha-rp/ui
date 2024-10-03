import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { ProductApiService } from '../../core/services/product-api.service';
import { copyUuidToClipboard } from '../../shared/utils/general';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    public snackBar: MatSnackBar,
    private router: Router, // Inject Router
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
