export interface Result {
  id: string;
  productID: string;
  testSuites: TestSuite[];
  dateReported: string;
}

export interface TestSuite {
  id: string;
  resultID: string;
  name: string;
  tests: number;
  failures: number;
  errors: number;
  skipped: number;
  assertions: number;
  time: number;
  file: string;
  testCases: TestCase[];
  properties: Property[];
  systemOut: string;
  systemErr: string;
}

export interface TestCase {
  id: string;
  testSuiteID: string;
  className: string;
  name: string;
  time: number;
  status: string;
  message: string | null;
  type: string | null;
  assertions: number;
  file: string;
  line: number;
  properties: Property[];
  systemOut: string;
  systemErr: string;
}

export interface Property {
  id: string;
  testSuiteID?: string;
  testCaseID?: string;
  name: string;
  value: string;
}
