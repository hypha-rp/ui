import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { TestResultsTabComponent } from './components/tabs/results/results-tab.component';
import { LocalTimezonePipe } from './pipes/local-timezone.pipe';

@NgModule({
  declarations: [TestResultsTabComponent, LocalTimezonePipe],
  imports: [CommonModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatTableModule],
  exports: [TestResultsTabComponent, LocalTimezonePipe],
})
export class SharedModule {}
