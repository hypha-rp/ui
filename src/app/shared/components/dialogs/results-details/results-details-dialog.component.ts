import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TestCaseDetailsDialog } from '../testcase-details/testcase-details-dialog.component';

@Component({
  selector: 'app-detailed-results-dialog',
  templateUrl: './results-details-dialog.component.html',
  styleUrls: ['./results-details-dialog.component.css'],
})
export class DetailedResultsDialog {
  constructor(
    public dialogRef: MatDialogRef<DetailedResultsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { result: any },
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  copyMessage(message: string, event: Event): void {
    event.stopPropagation();
    navigator.clipboard.writeText(message).then(() => {
      this.snackBar.open('Message copied to clipboard', 'Close', {
        duration: 2000,
      });
    });
  }

  openTestCaseDialog(testCase: any): void {
    this.dialog.open(TestCaseDetailsDialog, {
      data: { testCase },
      width: '80vw',
      height: '80vh',
      maxWidth: '80vw',
      maxHeight: '80vh',
    });
  }
}
