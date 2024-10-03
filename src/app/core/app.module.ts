import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProductsModule } from '../modules/products/products.module';
import { IntegrationsModule } from '../modules/integrations/integrations.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ProductsModule,
    IntegrationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
