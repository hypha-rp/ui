import { Component, Input } from '@angular/core';
import { TestCase, TestSuite } from '../../../models/results.model';

@Component({
  selector: 'app-suite-case-details-table',
  templateUrl: './suite-case-details-table.component.html',
  styleUrls: ['./suite-case-details-table.component.css'],
})
export class SuiteCaseDetailsTableComponent {
  @Input() data!: TestCase | TestSuite;

  isTestCase(data: any): data is TestCase {
    return (data as TestCase).testSuiteID !== undefined;
  }

  isTestSuite(data: any): data is TestSuite {
    return (data as TestSuite).resultID !== undefined;
  }
}
