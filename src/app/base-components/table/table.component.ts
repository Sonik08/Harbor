import { Model } from './../models/model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GasStation } from 'src/app/modules/models/gas-station';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'material-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<TModel extends Model> implements OnInit {
  dataSource: MatTableDataSource<TModel>;
  isLoadingData: boolean = true;
  @Input() dataObjects: Observable<TModel[]> = of([]);

  @Input() tableColumns: Observable<string[]> = of([]);

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataObjects.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingData = false;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  stations: GasStation[] = [
    {
      id: '123',
      name: 'hello world'
    },
    {
      id: '121321',
      name: 'BP'
    },
    {
      id: '3242',
      name: 'fdsfdsf'
    },
    {
      id: '111',
      name: 'eteka'
    }
  ];

  columnsToDisplay = ['id', 'name'];
}
