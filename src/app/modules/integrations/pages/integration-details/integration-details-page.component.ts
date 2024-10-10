import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IntegrationApiService } from '../../../../core/services/integration-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyUuidToClipboard, transformKeysRecursively } from '../../../../shared/utils/general';
import { Integration } from '../../../../shared/models/integration.model';
import { Result } from '../../../../shared/models/results.model';
import _ from 'lodash';

@Component({
  selector: 'app-integration-details',
  templateUrl: './integration-details-page.component.html',
  styleUrls: ['./integration-details-page.component.css'],
})
export class IntegrationDetailsPage implements OnInit {
  integration!: Integration;
  results: Result[] = [];

  constructor(
    private route: ActivatedRoute,
    private integrationService: IntegrationApiService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.integrationService.getIntegrationById(uuid).subscribe((integration) => {
        this.integration = integration;
      });

      this.integrationService.getIntegrationTestResults(uuid).subscribe((results: any[]) => {
        this.results = results.map((result) => transformKeysRecursively(result, _.camelCase) as Result);
      });
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
