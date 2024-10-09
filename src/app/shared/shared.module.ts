import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { TestResultsTabComponent } from './components/tabs/results/results-tab.component';
import { LocalTimezonePipe } from './pipes/local-timezone.pipe';
import { MultiLineTextDialog } from './components/dialogs/multi-line-text-dialog/multi-line-text-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { DetailedResultsDialog } from './components/dialogs/results-details/results-details-dialog.component';
import { TestCaseDetailsDialog } from './components/dialogs/testcase-details/testcase-details-dialog.component';

@NgModule({
  declarations: [
    TestResultsTabComponent,
    LocalTimezonePipe,
    MultiLineTextDialog,
    DetailedResultsDialog,
    TestCaseDetailsDialog,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  exports: [TestResultsTabComponent, LocalTimezonePipe],
})
export class SharedModule {}
