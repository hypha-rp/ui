import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-multi-line-text-dialog',
  templateUrl: './multi-line-text-dialog.component.html',
  styleUrls: ['./multi-line-text-dialog.component.css'],
})
export class MultiLineTextDialog {
  constructor(
    public dialogRef: MatDialogRef<MultiLineTextDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { text: string },
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
