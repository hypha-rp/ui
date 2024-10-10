import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../../../core/services/product-api.service';
import { copyUuidToClipboard, transformKeysRecursively } from '../../../../shared/utils/general';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../../../shared/models/product.model';
import { Location } from '@angular/common';
import { Result } from '../../../../shared/models/results.model';
import _ from 'lodash';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPage implements OnInit {
  product!: Product;
  results: Result[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductApiService,
    public snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });

      this.productService.getProductTestResults(productId).subscribe((results: any[]) => {
        this.results = results.map((result) => transformKeysRecursively(result, _.camelCase) as Result);
      });
    } else {
      console.error('Product ID is null');
    }
  }

  copyToClipboard(uuid: string, event: MouseEvent) {
    event.stopPropagation();
    copyUuidToClipboard(uuid, this.snackBar);
  }

  goBack(): void {
    this.location.back();
  }
}
