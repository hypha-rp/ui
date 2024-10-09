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
import { PropertiesTableComponent } from './components/tables/properties-table/properties-table.component';
import { SuiteCaseDetailsTableComponent } from './components/tables/suite-case-details-table/suite-case-details-table.component';
import { TestSuitePieChartComponent } from './components/charts/test-suite-pie-chart/test-suite-pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TestResultsTabComponent,
    LocalTimezonePipe,
    MultiLineTextDialog,
    DetailedResultsDialog,
    TestCaseDetailsDialog,
    PropertiesTableComponent,
    SuiteCaseDetailsTableComponent,
    TestSuitePieChartComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    NgxChartsModule,
  ],
  exports: [
    TestResultsTabComponent,
    LocalTimezonePipe,
    PropertiesTableComponent,
    SuiteCaseDetailsTableComponent,
    TestSuitePieChartComponent,
  ],
})
export class SharedModule {}
