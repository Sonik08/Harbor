import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Model } from './../models/model';

@Component({
  selector: 'material-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TModel extends Model> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() dataObjects: Observable<TModel[]> = of([]);

  @Input() tableColumns: Observable<string[]> = of([]);

  @Input() url: string;

  dataSource: MatTableDataSource<TModel>;

  isLoadingData = true;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this.dataObjects.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingData = false;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSelect(row: TModel): void {
    console.log(row);
    this._router.navigate([row.id + this.url], { relativeTo: this._activatedRoute });
  }
}
