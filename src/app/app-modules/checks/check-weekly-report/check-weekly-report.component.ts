import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'check-weekly-report',
  templateUrl: './check-weekly-report.component.html',
  styleUrls: ['./check-weekly-report.component.scss']
})
export class CheckWeeklyReportComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  ngOnInit(): void {}
}
