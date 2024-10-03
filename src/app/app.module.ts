import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products/products.component';
import { NewProductDialogComponent } from './products/new-product-dialog/new-product-dialog.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { IntegrationsTabComponent } from './products/product-details/integrations-tab/integrations-tab.component';
import { TestResultsTabComponent } from './products/product-details/results-tab/results-tab.component';
import { NewIntegrationDialogComponent } from './products/product-details/integrations-tab/new-integration-dialog/new-integration-dialog.component';
import { DetailedResultsDialogComponent } from './products/product-details/results-tab/detailed-results-dialog/detailed-results-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { TestCaseDetailsDialogComponent } from './products/product-details/results-tab/detailed-results-dialog/testcase-details-dialog/testcase-details-dialog.component';
import { routes } from './app.routes';
import { LocalTimezonePipe } from './shared/pipes/local-timezone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductDialogComponent,
    ProductDetailsComponent,
    IntegrationsTabComponent,
    TestResultsTabComponent,
    LocalTimezonePipe,
    TestCaseDetailsDialogComponent,
    NewIntegrationDialogComponent,
    DetailedResultsDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
