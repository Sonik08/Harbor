import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DateRange } from 'src/app/core/models/date-range';
import { Column } from 'src/app/core/models/UI/column';
import { Check } from '../../entities/models/check';
import { CheckApiService } from '../services/check-api.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as htmlToPdfmake from 'html-to-pdfmake';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'check-weekly-report',
  templateUrl: './check-weekly-report.component.html',
  styleUrls: ['./check-weekly-report.component.scss']
})
export class CheckWeeklyReportComponent implements OnInit {
  formDateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  subject$: Subject<Check[]> = new Subject<Check[]>();

  data$: Observable<Check[]> = this.subject$.pipe(
    switchMap(_ => {
      const dateRange = new DateRange(
        this.formDateRange.value.start,
        this.formDateRange.value.end
      );

      return this._checkApiService.getReport(dateRange);
    }),
    map(response => response.data),
    map(checks => {
      return checks.map(c => {
        c.dateOfDispatch = c.dateOfDispatch.substring(
          0,
          c.dateOfDispatch.length - 9
        );
        c.expirationDate = c.expirationDate.substring(
          0,
          c.expirationDate.length - 9
        );

        return c;
      });
    })
  );

  @ViewChild('materialTable') materialTable!: ElementRef;

  constructor(
    private _checkApiService: CheckApiService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.subject$.next();
  }

  columns: Column[] = [
    {
      label: 'ID',
      propertyName: 'id',
      isLookup: false
    },
    {
      label: 'Από πελάτη',
      propertyName: 'fromCustomer',
      isLookup: true
    },
    {
      label: 'Αριθμός επιταγής',
      propertyName: 'checkNumber',
      isLookup: false
    },
    {
      label: 'Τράπεζα',
      propertyName: 'bank',
      isLookup: true
    },
    {
      label: 'Ημ/νια Αποστολής',
      propertyName: 'dateOfDispatch',
      isLookup: false
    },
    {
      label: 'Ημ/νια Λήξης',
      propertyName: 'expirationDate',
      isLookup: false
    },
    {
      label: 'Προς πελάτη',
      propertyName: 'toCustomer',
      isLookup: true
    },
    {
      label: 'Ποσό',
      propertyName: 'amount',
      isLookup: false
    }
  ];

  ngAfterViewChecked(): void {
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }

  onSubmit() {
    this.subject$.next();
  }

  public SavePDF(): void {
    const pdfTable = this.materialTable['tableContent'].nativeElement;
    const html = htmlToPdfmake(pdfTable.innerHTML);
    html.unshift(' ');
    html.unshift({
      text: `Για διάστημα  ${this.formDateRange.value.start.getDate()}/${this.formDateRange.value.start.getMonth()}/${this.formDateRange.value.start.getFullYear()} - ${this.formDateRange.value.end.getDate()}/${this.formDateRange.value.end.getMonth()}/${this.formDateRange.value.end.getFullYear()}`,
      fontSize: 20
    });
    html.unshift({ text: 'Επιταγές', fontSize: 35, style: 'header' });
    const documentDefinition = {
      pageOrientation: 'landscape',
      content: html
    };
    pdfMake.createPdf(documentDefinition).download();
  }
}
