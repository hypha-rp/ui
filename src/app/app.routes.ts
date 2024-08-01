import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';

export const routes: Routes = [
  { path: 'new-product', component: NewProductFormComponent },
  { path: '', redirectTo: '/new-product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }