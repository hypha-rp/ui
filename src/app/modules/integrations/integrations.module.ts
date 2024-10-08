import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntegrationDetailsPage } from './pages/integration-details/integration-details-page.component';
import { IntegrationsRoutingModule } from './integrations-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [IntegrationDetailsPage],
  imports: [
    CommonModule,
    RouterModule,
    IntegrationsRoutingModule,
    MatSnackBarModule,
    MatIconModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
  ],
})
export class IntegrationsModule {}
