import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './pages/products/products-page.component';
import { ProductDetailsPage } from './pages/product-details/product-details-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPage },
  { path: 'product-details/:id', component: ProductDetailsPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
