import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TestResultsTabComponent } from './components/tabs/results/results-tab.component';
import { RulesTabComponent } from './components/tabs/rules/rules-tab.component';
import { LocalTimezonePipe } from './pipes/local-timezone.pipe';
import { MultiLineTextDialog } from './components/dialogs/multi-line-text-dialog/multi-line-text-dialog.component';
import { DetailedResultsDialog } from './components/dialogs/results-details/results-details-dialog.component';
import { TestCaseDetailsDialog } from './components/dialogs/testcase-details/testcase-details-dialog.component';
import { NewRuleDialog } from './components/dialogs/new-rule/new-rule-dialog.component';
import { PropertiesTableComponent } from './components/tables/properties-table/properties-table.component';
import { SuiteCaseDetailsTableComponent } from './components/tables/suite-case-details-table/suite-case-details-table.component';
import { TestSuiteBarChartComponent } from './components/charts/test-suite-bar-chart/test-suite-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TestResultsTabComponent,
    RulesTabComponent,
    LocalTimezonePipe,
    MultiLineTextDialog,
    DetailedResultsDialog,
    TestCaseDetailsDialog,
    NewRuleDialog,
    PropertiesTableComponent,
    SuiteCaseDetailsTableComponent,
    TestSuiteBarChartComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgxChartsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    TestResultsTabComponent,
    RulesTabComponent,
    LocalTimezonePipe,
    PropertiesTableComponent,
    SuiteCaseDetailsTableComponent,
    TestSuiteBarChartComponent,
  ],
})
export class SharedModule {}
