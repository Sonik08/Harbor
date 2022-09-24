import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Model } from '../models/model';
import { Column } from '../models/UI/column';
import { UIAction } from '../models/UI/ui-action';
import { UIActionType } from '../models/UI/ui-action-type.enum';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent<TModel extends Model> implements OnInit {
  @Input() actions: UIAction[];
  @Input() dataObjects: Observable<TModel[]>;
  @Input() tableColumns: Column[];
  @Input() url: string;
  @Input() addUrl: string;
  @Input() isLoadingData = true;
  @Input() allowActions = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<TModel>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.dataObjects.pipe(filter(values => !!values)).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingData = false;
    });
  }

  @ViewChild('tableContent') tableContent!: ElementRef;

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
    let columns = this.tableColumns.map(c => c.propertyName);

    if (this.allowActions) {
      columns.push('actions');
    }

    return columns;
  }

  getpropertyValue(data: TModel, column: Column): string {
    if (typeof data[column.propertyName] === 'object') {
      return data[column.propertyName].name;
    }

    return data[column.propertyName];
  }

  openDialog(item, action: UIAction) {
    if (action.type === UIActionType.Delete) {
      this._dialogService
        .openDialogWithCustomMessage(
          item,
          action,
          action.name,
          'Διαγραφή εγγραφής '
        )
        .subscribe();
    } else if (action.type === UIActionType.VoidCheck) {
      this._dialogService
        .openDialogWithCustomMessage(
          item,
          action,
          action.name,
          'Σγράγισμα της επιταγής '
        )
        .subscribe();
    } else {
      action.actionFn$(item);
    }
  }

  private isDate(value: string) {
    return Date.parse(value);
  }
}
