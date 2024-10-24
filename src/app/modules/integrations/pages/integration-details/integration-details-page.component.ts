import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RelationshipApiService } from '../../../../core/services/relationship-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { copyUuidToClipboard } from '../../../../shared/utils/general';
import { Relationship } from '../../../../shared/models/relationship.model';

@Component({
  selector: 'app-integration-details',
  templateUrl: './integration-details-page.component.html',
  styleUrls: ['./integration-details-page.component.css'],
})
export class IntegrationDetailsPage implements OnInit {
  relationship!: Relationship;

  constructor(
    private route: ActivatedRoute,
    private relationshipService: RelationshipApiService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const relationshipId = this.route.snapshot.paramMap.get('id');
    if (relationshipId) {
      this.relationshipService.getRelationshipById(relationshipId).subscribe((relationship) => {
        this.relationship = relationship;
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
