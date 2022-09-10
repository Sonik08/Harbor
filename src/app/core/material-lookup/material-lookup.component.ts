import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import { LookupModel } from '../models/lookup-model';
import { UIAction } from '../models/UI/ui-action';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'material-lookup',
  templateUrl: './material-lookup.component.html',
  styleUrls: ['./material-lookup.component.scss']
})
export class MaterialLookupComponent implements OnInit, AfterViewInit {
  @Input() dataSource$: Observable<MatTableDataSource<LookupModel>>;
  @Input() actions: UIAction[];
  @Input() displayedColumns: string[];
  @Output() refresh = new EventEmitter<string>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<LookupModel>;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.dataSource$.pipe(share()).subscribe(matTableDataSource => {
      matTableDataSource.sort = this.sort;
      matTableDataSource.paginator = this.paginator;
      this.dataSource = matTableDataSource;
    });
  }

  ngAfterViewInit() {
    // this.dataSource$.pipe(share()).subscribe(dataSource => {
    //   dataSource.sort = this.sort;
    //   dataSource.paginator = this.paginator;
    // });
  }

  // /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    console.log('sorting');
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    console.log(sortState);
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(item, action: UIAction) {
    this.dialogService
      .openDialog(item, action)
      .subscribe(_ => this.refresh.emit());
  }
}
