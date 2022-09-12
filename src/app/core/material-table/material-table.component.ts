import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Model } from '../models/model';
import { Column } from '../models/UI/column';
import { UIAction } from '../models/UI/ui-action';
import { UIActionType } from '../models/UI/ui-action-type.enum';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent<TModel extends Model> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() dataObjects: Observable<TModel[]>;

  @Input() tableColumns: Column[];

  @Input() url: string;

  @Input() addUrl: string;

  // get related data

  dataSource: MatTableDataSource<TModel>;

  actions: UIAction[] = [];

  isLoadingData = true;

  allowActions = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.actions = this.getActions();
    this.dataObjects.pipe(filter(values => !!values)).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingData = false;
    });
  }

  getActions(): UIAction[] {
    return [
      {
        type: UIActionType.Update,
        name: 'Επεξεργασία',
        isAction: true,
        actionFn$: item => of(true),
        showFn$: item => of(true)
      },
      {
        type: UIActionType.Delete,
        name: 'Διαγραφή',
        isAction: true,
        actionFn$: item => of(true),
        showFn$: item => of(true)
      }
    ];
  }

  isIdColumns(columnName: string): boolean {
    return columnName === 'id';
  }

  addNew() {
    this._router.navigate([this.addUrl], { relativeTo: this._activatedRoute });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSelect(row: TModel): void {
    this._router.navigate([row.id + this.url], {
      relativeTo: this._activatedRoute
    });
  }
  Log(logged) {
    console.log(logged);
  }

  getColumnNames() {
    return this.tableColumns.map(c => c.propertyName);
  }

  getpropertyValue(data: TModel, column: Column): string {
    // map from related data passed to the component
  }
}
