import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IntegrationApiService } from '../../../../core/services/integration-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyUuidToClipboard } from '../../../../shared/utils/general';
import { Integration } from '../../../../shared/models/integration.model';

@Component({
  selector: 'app-integration-details',
  templateUrl: './integration-details-page.component.html',
  styleUrls: ['./integration-details-page.component.css'],
})
export class IntegrationDetailsPage implements OnInit {
  integration!: Integration;

  constructor(
    private route: ActivatedRoute,
    private integrationService: IntegrationApiService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const integrationId = this.route.snapshot.paramMap.get('id');
    if (integrationId) {
      this.integrationService.getIntegrationById(integrationId).subscribe((integration) => {
        this.integration = integration;
      });
    } else {
      console.error('Integration ID is null');
    }
  }

  goBack(): void {
    this.location.back();
  }

  copyToClipboard(uuid: string, event: MouseEvent): void {
    event.stopPropagation();
    copyUuidToClipboard(uuid, this.snackBar);
  }
}
