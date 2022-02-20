import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Model } from '../models/model';
import { UIAction } from '../models/UI/ui-action';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent<TModel extends Model> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() dataObjects: Observable<TModel[]>;

  @Input() tableColumns: Observable<string[]>;

  @Input() url: string;

  @Input() addUrl: string;

  dataSource: MatTableDataSource<TModel>;

  actions: UIAction<TModel>[] = [];

  isLoadingData = true;

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

  getActions(): UIAction<TModel>[] {
    return [
      {
        name: 'Επεξεργασία',
        isAction: true,
        actionFn: item => true,
        showFn$: item => of(true)
      },
      {
        name: 'Διαγραφή',
        isAction: true,
        actionFn: item => true,
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
}
