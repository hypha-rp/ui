import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntegrationDetailsPage } from './pages/integration-details/integration-details-page.component';
import { IntegrationsRoutingModule } from './integrations-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IntegrationDetailsPage],
  imports: [CommonModule, RouterModule, IntegrationsRoutingModule, MatSnackBarModule, MatIconModule],
})
export class IntegrationsModule {}
