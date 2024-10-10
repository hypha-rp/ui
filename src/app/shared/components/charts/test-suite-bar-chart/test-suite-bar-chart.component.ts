import { Component, Input, OnChanges } from '@angular/core';
import { TestSuite } from '../../../models/results.model';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-test-suite-bar-chart',
  templateUrl: './test-suite-bar-chart.component.html',
  styleUrls: ['./test-suite-bar-chart.component.css'],
})
export class TestSuiteBarChartComponent implements OnChanges {
  @Input() testSuite!: TestSuite;
  barChartData: any[] = [];
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
    const totalTests = this.testSuite.testCases.length;
    const failedTests = this.testSuite.testCases.filter((testCase) => testCase.status === 'fail').length;
    const errorTests = this.testSuite.testCases.filter((testCase) => testCase.status === 'error').length;
    const skippedTests = this.testSuite.testCases.filter((testCase) => testCase.status === 'skipped').length;
    const passedTests = totalTests - (failedTests + errorTests + skippedTests);

    this.barChartData = [
      { name: 'Passed', value: passedTests },
      { name: 'Failed', value: failedTests },
      { name: 'Errors', value: errorTests },
      { name: 'Skipped', value: skippedTests },
    ];
  }

  formatXAxisTicks(value: number): string {
    return value.toFixed(0);
  }
}
