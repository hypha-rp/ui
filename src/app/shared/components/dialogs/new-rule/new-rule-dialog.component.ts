import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RuleApiService } from '../../../../core/services/rule-api.service';

@Component({
  selector: 'app-new-rule-dialog',
  templateUrl: './new-rule-dialog.component.html',
  styleUrls: ['./new-rule-dialog.component.css'],
})
export class NewRuleDialog {
  ruleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewRuleDialog>,
    private ruleService: RuleApiService,
    @Inject(MAT_DIALOG_DATA) public data: { relationId: string }
  ) {
    this.ruleForm = this.fb.group({
      expression: ['', Validators.required],
      appliesToCases: [false],
      appliesToSuites: [false],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.ruleForm.valid) {
      const appliesTo = [];
      if (this.ruleForm.value.appliesToCases) appliesTo.push('case');
      if (this.ruleForm.value.appliesToSuites) appliesTo.push('suite');

      const newRule = {
        expression: this.ruleForm.value.expression,
        appliesTo,
        relationId: this.data.relationId,
      };

      this.ruleService.createResultsRule(newRule).subscribe(() => {
        this.dialogRef.close(newRule);
      });
    }
  }
}