import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationDetailsPage } from './pages/integration-details/integration-details-page.component';

const routes: Routes = [{ path: 'integration-details/:id', component: IntegrationDetailsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationsRoutingModule {}
