import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Result } from '../../../../shared/models/results.model';
import { DetailedResultsDialog } from '../../../../shared/components/dialogs/results-details/results-details-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class TestResultsTabComponent implements OnInit {
  @Input() results: Result[] = [];
  displayedColumns: string[] = ['suiteName', 'dateReported', 'status'];
  hasReportingProduct: boolean = false;

  constructor(
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.updateDisplayedColumns();
  }

  updateDisplayedColumns(): void {
    this.hasReportingProduct = this.results.some((result) => result.productName);
    if (this.hasReportingProduct) {
      this.displayedColumns.push('reportingProduct');
    }
  }

  openResultDialog(result: Result): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';
    dialogConfig.maxWidth = '80vw';
    dialogConfig.maxHeight = '80vh';
    dialogConfig.data = { result };

    this.dialog.open(DetailedResultsDialog, dialogConfig);
  }
}
