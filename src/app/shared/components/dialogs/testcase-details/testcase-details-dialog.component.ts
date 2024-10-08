import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-case-dialog',
  templateUrl: './testcase-details-dialog.component.html',
  styleUrls: ['./testcase-details-dialog.component.css'],
})
export class TestCaseDetailsDialog {
  constructor(
    public dialogRef: MatDialogRef<TestCaseDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { testCase: any },
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
