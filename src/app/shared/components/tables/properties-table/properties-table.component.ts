// src/app/shared/components/properties-table/properties-table.component.ts
import { Component, Input } from '@angular/core';
import { Property } from '../../../models/results.model';
import { MatDialog } from '@angular/material/dialog';
import { MultiLineTextDialog } from '../../dialogs/multi-line-text-dialog/multi-line-text-dialog.component';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css'],
})
export class PropertiesTableComponent {
  @Input() properties: Property[] = [];

  constructor(private dialog: MatDialog) {}

  isMultiLine(value: string): boolean {
    return value.includes('\n');
  }

  openMultiLineDialog(text: string, event: Event): void {
    event.preventDefault();
    this.dialog.open(MultiLineTextDialog, {
      data: { text },
      width: '40vw',
      height: '65vh',
      maxWidth: '40vw',
      maxHeight: '40vh',
    });
  }
}
