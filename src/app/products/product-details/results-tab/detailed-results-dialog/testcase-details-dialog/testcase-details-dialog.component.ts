import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test-case-dialog',
  templateUrl: './testcase-details-dialog.component.html',
  styleUrls: ['./testcase-details-dialog.component.css'],
})
export class TestCaseDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TestCaseDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { testCase: any },
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
