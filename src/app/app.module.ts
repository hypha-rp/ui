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
import { ProductDetailsDialogComponent } from './products/product-details-dialog/product-details-dialog.component';
import { IntegrationsTabComponent } from './products/product-details-dialog/integrations-tab/integrations-tab.component';
import { TestResultsTabComponent } from './products/product-details-dialog/results-tab/results-tab.component';
import { NewIntegrationDialogComponent } from './products/product-details-dialog/integrations-tab/new-integration-dialog/new-integration-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MessageDialogComponent } from './products/product-details-dialog/results-tab/message-dialog/message-dialog.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductDialogComponent,
    ProductDetailsDialogComponent,
    IntegrationsTabComponent,
    TestResultsTabComponent,
    MessageDialogComponent,
    NewIntegrationDialogComponent,
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
