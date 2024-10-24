import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductApiService } from '../../../../../core/services/product-api.service';
import { RelationshipApiService } from '../../../../../core/services/relationship-api.service';
import { Product } from '../../../../../shared/models/product.model';
import { Relationship } from '../../../../../shared/models/relationship.model';

@Component({
  selector: 'app-new-integration-dialog',
  templateUrl: './new-integration-dialog.component.html',
  styleUrls: ['./new-integration-dialog.component.css'],
})
export class NewIntegrationDialog implements OnInit {
  searchForm: FormGroup;
  searchResults: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductApiService,
    private relationshipService: RelationshipApiService,
    public dialogRef: MatDialogRef<NewIntegrationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { productId: string; existingIntegrations: Relationship[] },
  ) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
  }

  ngOnInit(): void {}

  onSearch(): void {
    const query = this.searchForm.get('searchQuery')?.value;
    if (query) {
      this.productService.searchProducts(query).subscribe((products) => {
        this.searchResults = products.filter((product) => {
          const isAlreadyIntegrated = this.data.existingIntegrations.some(
            (relationship) => relationship.objects[0].id === product.id || relationship.objects[1].id === product.id,
          );
          return product.id !== this.data.productId && !isAlreadyIntegrated;
        });
      });
    }
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onConfirm(): void {
    if (this.selectedProduct) {
      const newIntegration = {
        objectID1: this.data.productId,
        objectID2: this.selectedProduct.id,
        relationshipType: 'integration',
      };

      this.relationshipService.createRelationship(newIntegration).subscribe(() => {
        this.dialogRef.close(this.selectedProduct);
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
