import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductsPage } from './pages/products/products-page.component';
import { NewProductDialogComponent } from './components/dialogs/new-product/new-product-dialog.component';
import { ProductDetailsPage } from './pages/product-details/product-details-page.component';
import { IntegrationsTab } from './components/tabs/integrations/integrations-tab.component';
import { TestResultsTabComponent } from './components/tabs/results/results-tab.component';
import { NewIntegrationDialog } from './components/dialogs/new-integration/new-integration-dialog.component';
import { DetailedResultsDialogComponent } from '../../shared/components/dialogs/results-details/results-details-dialog.component';
import { TestCaseDetailsDialogComponent } from '../../shared/components/dialogs/testcase-details/testcase-details-dialog.component';
import { ProductsRoutingModule } from './products-routing.module';
import { LocalTimezonePipe } from '../../shared/pipes/local-timezone.pipe';

@NgModule({
  declarations: [
    ProductsPage,
    NewProductDialogComponent,
    ProductDetailsPage,
    IntegrationsTab,
    TestResultsTabComponent,
    NewIntegrationDialog,
    DetailedResultsDialogComponent,
    TestCaseDetailsDialogComponent,
    LocalTimezonePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
