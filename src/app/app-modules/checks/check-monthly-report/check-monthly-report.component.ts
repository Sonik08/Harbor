import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Column } from 'src/app/core/models/UI/column';
import { Check } from '../../entities/models/check';
import { CheckApiService } from '../services/check-api.service';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as htmlToPdfmake from 'html-to-pdfmake';
import { Platform } from '@angular/cdk/platform';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MonthpickerDateAdapter } from 'src/app/core/adapters/date-picker.adapter';
import { months } from 'src/app/core/date-helpers/date-consts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'check-monthly-report',
  templateUrl: './check-monthly-report.component.html',
  styleUrls: ['./check-monthly-report.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MonthpickerDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class CheckMonthlyReportComponent implements OnInit {
  public monthAndYear: Date | null = null;

  constructor(
    private _checkApiService: CheckApiService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  subject$: Subject<Check[]> = new Subject<Check[]>();

  data$: Observable<Check[]> = this.subject$.pipe(
    switchMap(_ => {
      return this._checkApiService.getMonthlyReport(this.monthAndYear);
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

  ngOnInit(): void {}

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
      text: `Μήνας ${months[this.monthAndYear.getMonth() - 1]}`,
      fontSize: 20
    });
    html.unshift({ text: 'Επιταγές', fontSize: 35, style: 'header' });
    html.unshift(' ');
    const documentDefinition = {
      pageOrientation: 'landscape',
      content: html
    };
    pdfMake.createPdf(documentDefinition).download();
  }

  public monthChanged(value: any, widget: any): void {
    this.monthAndYear = value;
    widget.close();
  }
}
