import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from '../../../core/services/product-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../shared/models/product.model';
import { copyUuidToClipboard } from '../../../shared/utils/general';
import { NewIntegrationDialogComponent } from './new-integration-dialog/new-integration-dialog.component';

@Component({
  selector: 'app-integrations-tab',
  templateUrl: './integrations-tab.component.html',
  styleUrls: ['./integrations-tab.component.css'],
})
export class IntegrationsTabComponent implements OnInit {
  @Input() product!: Product;
  integrations: Product[] = [];
  showIntegrationForm = false;
  integrationProductID: string = '';

  constructor(
    private productService: ProductApiService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.productService.getProductIntegrations(this.product.id).subscribe((integrations) => {
      this.integrations = integrations;
    });
  }

  copyToClipboard(uuid: string) {
    copyUuidToClipboard(uuid, this.snackBar);
  }

  openNewIntegrationDialog(): void {
    const dialogRef = this.dialog.open(NewIntegrationDialogComponent, {
      width: '600px',
      data: { productId: this.product.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addIntegration(result.id);
      }
    });
  }

  addIntegration(integrationProductID: string): void {
    const newIntegration = {
      productID1: this.product.id,
      productID2: integrationProductID,
    };

    this.productService.createIntegration(newIntegration).subscribe(() => {
      this.productService.getProductIntegrations(this.product.id).subscribe((integrations) => {
        this.integrations = integrations;
        this.showIntegrationForm = false;
        this.integrationProductID = '';
      });
    });
  }
}
