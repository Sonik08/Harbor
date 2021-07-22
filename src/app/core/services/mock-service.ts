import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpenseType } from 'src/app/app-modules/models/expense-type';
import { FuelType } from 'src/app/app-modules/models/fuel-type';
import { GasStation } from 'src/app/app-modules/models/gas-station';
import { Shift } from 'src/app/app-modules/models/shift';
import { ShiftType } from 'src/app/app-modules/models/shift-type';
import { IListItem } from 'src/app/core/models/list-item';
import { IExpantionPanelItem } from '../models/expantion-panel-item';

@Injectable({ providedIn: 'root' })
export class MockService {

  gasStations: GasStation[] = [
    {
      id: '123',
      adress: "Liosiwn 10",
      name: 'hello world',
      shifts: []
    },
    {
      id: '121321',
      adress: "Tatoiou 94",
      name: 'BP',
      shifts: []
    },
    {
      id: '3242',
      adress: "Kurumba 123",
      name: 'fdsfdsf',
      shifts: []
    },
    {
      id: '111',
      adress: "Manhatan bliat 12",
      name: 'eteka',
      shifts: []
    }
  ];
  gasStationsTableColumns : string[]  = ['id', 'name'];

  gasStationListItems: IListItem[] = [
    { title: 'Fuel Tank Levels', icon: 'euro', url: ''},
    { title: 'New Shift', icon: 'person', url: 'shifts/new' },
    { title: 'Shifts', icon: 'groups', url: 'shifts'}
  ];


  getGasStations(): GasStation[] {
    return this.gasStations;
  }

  getGasStationTableColumns(): string[] {
    return this.gasStationsTableColumns
  }

  getGasStationListItems(): IListItem[] {
    return this.gasStationListItems;
  }

  getGasStationById(id: string): Observable<GasStation>{
    return of(this.gasStations
      .filter(gasStation => gasStation.id === id)[0]);
  }

  shifts: Shift[] = [
    {
      id: "123",
      type : ShiftType.Morning,
      income: 500,
      date: new Date(new Date().setDate(new Date().getDate()-1)).toLocaleString(),
      expenseItems: [
        {
          shiftId: "123",
          type: ExpenseType.Miscellaneous,
          amount: 100
        },
        {
          shiftId: "123",
          type: ExpenseType.Salary,
          amount: 30
        }
      ],
      fuelLevels: [
        {
          shiftId: "123",
          fuelType: FuelType.Diesel,
          level: 920.1
        },
        {
          shiftId: "123",
          fuelType: FuelType.Unleaded,
          level: 123.1
        },
        {
          shiftId: "123",
          fuelType: FuelType.LPG,
          level: 424.1
        }
      ],
      resupplies:[
        {
          fuelType: FuelType.Diesel,
          amount: 500,
          shiftId: "1234"
        }
      ],
      gasStationId: "121321",
      profit: 370
    } as Shift,
    {
      id: "1234",
      type : ShiftType.Morning,
      income: 500,
      date: new Date(new Date().setDate(new Date().getDate()-1)).toLocaleString(),
      expenseItems: [
        {
          shiftId: "1234",
          type: ExpenseType.Miscellaneous,
          amount: 100
        },
        {
          shiftId: "1234",
          type: ExpenseType.Salary,
          amount: 200
        }
      ],
      fuelLevels: [
        {
          shiftId: "1234",
          fuelType: FuelType.Diesel,
          level: 1000.1
        },
        {
          shiftId: "1234",
          fuelType: FuelType.Unleaded,
          level: 900.1
        },
        {
          shiftId: "1234",
          fuelType: FuelType.LPG,
          level: 424.1
        }
      ],
      resupplies:[
        {
          fuelType: FuelType.Diesel,
          amount: 500,
          shiftId: "1234"
        }
      ],
      gasStationId: "123",
      profit: 200
    } as Shift
  ]

  shiftsTableColumns: string[] = ["type", "profit", "date", "gasStationId"]

  getShifts(): Observable<Shift[]> {
    return of(this.shifts);
  }

  getShiftsTableColumns(): Observable<string[]>{
    return of(this.shiftsTableColumns);
  }

  getShiftById(id: string): Observable<Shift>{
    return of(this.shifts
      .filter(gasStation => gasStation.id === id)[0]);
  }

  getExpantionPanelItem(): IExpantionPanelItem{
    return {
      title: "title",
      description: "descriiption",
      icon:"person",
      url: "./",
      listItems: this.getGasStationListItems()
    }
  }

  shiftType: ShiftType[] = [ShiftType.Evening, ShiftType.Evening, ShiftType.Night, ShiftType.Unknown]
}
