import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RuleApiService } from '../../../../core/services/rule-api.service';
import { ResultsRule } from '../../../../shared/models/rule.model';
import { copyUuidToClipboard } from '../../../../shared/utils/general';
import { NewRuleDialog } from '../../dialogs/new-rule/new-rule-dialog.component';

@Component({
    selector: 'app-rules-tab',
    templateUrl: './rules-tab.component.html',
    styleUrls: ['./rules-tab.component.css'],
  })
  export class RulesTabComponent implements OnInit {
    @Input() uuid!: string;
    rules: ResultsRule[] = [];
  
    constructor(
      private ruleService: RuleApiService,
      public snackBar: MatSnackBar,
      private dialog: MatDialog,
      private router: Router,
    ) {}
  
    ngOnInit(): void {
      this.ruleService.getResultsRulesByRelationID(this.uuid).subscribe((rules) => {
        this.rules = rules;
      });
    }
  
    openNewRuleDialog(): void {
        const dialogRef = this.dialog.open(NewRuleDialog, {
          width: '600px',
          data: { relationId: this.uuid },
        });
      
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.ruleService.getResultsRulesByRelationID(this.uuid).subscribe((rules) => {
              this.rules = rules;
            });
          }
        });
      }

  
    openRuleDetails(rule: ResultsRule): void {
      this.router.navigate(['/rule-details', rule.id]);
    }

    copyToClipboard(uuid: string, event: MouseEvent) {
        event.stopPropagation();
        copyUuidToClipboard(uuid, this.snackBar);
      }
  }