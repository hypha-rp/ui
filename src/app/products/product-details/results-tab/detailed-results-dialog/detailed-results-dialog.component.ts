import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-detailed-results-dialog',
  templateUrl: './detailed-results-dialog.component.html',
  styleUrls: ['./detailed-results-dialog.component.css'],
})
export class DetailedResultsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DetailedResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { result: any },
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  onClose(): void {
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

  openMessageDialog(message: string, event: Event): void {
    event.stopPropagation();
    this.dialog.open(MessageDialogComponent, {
      data: { message },
    });
  }
}
