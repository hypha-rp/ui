import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from '../../../../../core/services/product-api.service';
import { RelationshipApiService } from '../../../../../core/services/relationship-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../../../shared/models/product.model';
import { Relationship } from '../../../../../shared/models/relationship.model';
import { copyUuidToClipboard } from '../../../../../shared/utils/general';
import { NewIntegrationDialog } from '../../dialogs/new-integration/new-integration-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrations-tab',
  templateUrl: './integrations-tab.component.html',
  styleUrls: ['./integrations-tab.component.css'],
})
export class IntegrationsTab implements OnInit {
  @Input() product!: Product;
  integrations: Relationship[] = [];
  showIntegrationForm = false;
  integrationProductID: string = '';

  constructor(
    private productService: ProductApiService,
    private relationshipService: RelationshipApiService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadIntegration();
  }

  loadIntegration(): void {
    this.productService.getProductIntegrations(this.product.id).subscribe((relationship) => {
      this.integrations = relationship;
    });
  }

  copyToClipboard(uuid: string, event: MouseEvent): void {
    event.stopPropagation();
    copyUuidToClipboard(uuid, this.snackBar);
  }

  openNewIntegrationDialog(): void {
    const dialogRef = this.dialog.open(NewIntegrationDialog, {
      width: '600px',
      data: {
        productId: this.product.id,
        existingIntegrations: this.integrations,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadIntegration();
      }
      (document.activeElement as HTMLElement).blur();
    });
  }

  getOtherObjectID(integration: Relationship): string {
    return integration.objectIDs.find((id) => id !== this.product.id) || '';
  }

  getOtherObjectProperty(integration: Relationship, property: string): string | undefined {
    if (!integration.objects) {
      return undefined;
    }
    const otherObject = integration.objects.find((obj) => obj.id === this.getOtherObjectID(integration));
    return otherObject ? otherObject[property] : undefined;
  }

  openIntegrationDetails(integration: Relationship): void {
    this.router.navigate(['/integration-details', integration.id]);
  }
}
