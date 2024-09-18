export interface Result {
  id: string;
  productID: string;
  testSuites: TestSuite[];
}

export interface TestSuite {
  id: string;
  resultID: string;
  name: string;
  tests: number;
  failures: number;
  errors: number;
  skipped: number;
  time: number;
  testCases: TestCase[];
  properties: Property[];
}

export interface TestCase {
  id: string;
  testSuiteID: string;
  className: string;
  name: string;
  time: number;
  properties: Property[];
  status: string;
  message: string;
}

export interface Property {
  id: string;
  testSuiteID?: string;
  testCaseID?: string;
  name: string;
  value: string;
}
