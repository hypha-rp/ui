import { Component, Input, OnChanges } from '@angular/core';
import { TestSuite } from '../../../models/results.model';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-test-suite-pie-chart',
  templateUrl: './test-suite-pie-chart.component.html',
  styleUrls: ['./test-suite-pie-chart.component.css'],
})
export class TestSuitePieChartComponent implements OnChanges {
  @Input() testSuite!: TestSuite;
  pieChartData: any[] = [];
  colorScheme: Color = {
    name: 'testSuiteScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#8bc34a', '#f44336', '#ffb74d', '#64b5f6'],
  };

  ngOnChanges(): void {
    if (this.testSuite) {
      this.updateChartData();
    }
  }

  updateChartData(): void {
    const totalTests = this.testSuite.tests;
    const failedTests = this.testSuite.failures;
    const errorTests = this.testSuite.errors;
    const skippedTests = this.testSuite.skipped;
    const passedTests = totalTests - (failedTests + errorTests + skippedTests);

    this.pieChartData = [
      { name: 'Passed', value: passedTests },
      { name: 'Failed', value: failedTests },
      { name: 'Errors', value: errorTests },
      { name: 'Skipped', value: skippedTests },
    ];
  }
}
