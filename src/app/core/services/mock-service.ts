import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShiftType } from 'src/app/app-modules/entities/enums/shift-type';
import { TankType } from 'src/app/app-modules/entities/enums/tank-type';
import { GasStation } from 'src/app/app-modules/entities/models/gas-station';
import { Shift } from 'src/app/app-modules/entities/models/shift';
import { Tank } from 'src/app/app-modules/entities/models/tank';
import { IListItem } from 'src/app/core/models/list-item';
import { IExpantionPanelItem } from '../models/expantion-panel-item';

@Injectable({ providedIn: 'root' })
export class MockService {
  gasStations: GasStation[] = [
    {
      id: '1',
      adress: 'Liosiwn 10',
      name: 'hello world',
      shifts: []
    },
    {
      id: '2',
      adress: 'Tatoiou 94',
      name: 'BP',
      shifts: []
    },
    {
      id: '3',
      adress: 'Kurumba 123',
      name: 'fdsfdsf',
      shifts: []
    },
    {
      id: '4',
      adress: 'Manhatan bliat 12',
      name: 'eteka',
      shifts: []
    }
  ];
  gasStationsTableColumns: string[] = ['id', 'name'];

  gasStationListItems: IListItem[] = [
    { title: 'Fuel Tank Levels', icon: 'euro', url: '' },
    { title: 'New Shift', icon: 'person', url: 'shifts/new' },
    { title: 'Shifts', icon: 'groups', url: 'shifts' }
  ];

  gasStationTanks: Tank[] = [
    {
      id: '1',
      name: 'Tank Diesel 1',
      gasStationId: '1',
      tankType: TankType.Diesel
    },
    {
      id: '2',
      name: 'Tank LPG 1',
      gasStationId: '1',
      tankType: TankType.LPG
    },
    {
      id: '3',
      name: 'Tank Super 1',
      gasStationId: '1',
      tankType: TankType.Super
    },
    {
      id: '4',
      name: 'Tank Unleaded 1',
      gasStationId: '1',
      tankType: TankType.Unleaded
    },
    {
      id: '5',
      name: 'Tank LPG 1',
      gasStationId: '2',
      tankType: TankType.LPG
    },
    {
      id: '6',
      name: 'Tank Diesel 1',
      gasStationId: '2',
      tankType: TankType.Diesel
    },
    {
      id: '7',
      name: 'Tank Unleaded 1',
      gasStationId: '2',
      tankType: TankType.Unleaded
    },
    {
      id: '8',
      name: 'Tank Unleaded 2',
      gasStationId: '2',
      tankType: TankType.Unleaded
    }
  ];

  // shifts: Shift[] = [
  //   {
  //     id: '123',
  //     type: ShiftType.Morning,
  //     income: 500,
  //     date: new Date(
  //       new Date().setDate(new Date().getDate() - 1)
  //     ).toLocaleString(),
  //     expenseItems: [
  //       {
  //         shiftId: '123',
  //         type: ExpenseType.Miscellaneous,
  //         amount: 100
  //       },
  //       {
  //         shiftId: '123',
  //         type: ExpenseType.Salary,
  //         amount: 30
  //       }
  //     ],
  //     fuelLevels: [
  //       {
  //         shiftId: '123',
  //         fuelType: FuelType.Diesel,
  //         level: 920.1
  //       },
  //       {
  //         shiftId: '123',
  //         fuelType: FuelType.Unleaded,
  //         level: 123.1
  //       },
  //       {
  //         shiftId: '123',
  //         fuelType: FuelType.LPG,
  //         level: 424.1
  //       }
  //     ],
  //     resupplies: [
  //       {
  //         fuelType: FuelType.Diesel,
  //         amount: 500,
  //         shiftId: '1234'
  //       }
  //     ],
  //     gasStationId: '121321',
  //     profit: 370
  //   } as Shift,
  //   {
  //     id: '1234',
  //     type: ShiftType.Morning,
  //     income: 500,
  //     date: new Date(
  //       new Date().setDate(new Date().getDate() - 1)
  //     ).toLocaleString(),
  //     expenseItems: [
  //       {
  //         shiftId: '1234',
  //         type: ExpenseType.Miscellaneous,
  //         amount: 100
  //       },
  //       {
  //         shiftId: '1234',
  //         type: ExpenseType.Salary,
  //         amount: 200
  //       }
  //     ],
  //     fuelLevels: [
  //       {
  //         shiftId: '1234',
  //         fuelType: FuelType.Diesel,
  //         level: 1000.1
  //       },
  //       {
  //         shiftId: '1234',
  //         fuelType: FuelType.Unleaded,
  //         level: 900.1
  //       },
  //       {
  //         shiftId: '1234',
  //         fuelType: FuelType.LPG,
  //         level: 424.1
  //       }
  //     ],
  //     resupplies: [
  //       {
  //         fuelType: FuelType.Diesel,
  //         amount: 500,
  //         shiftId: '1234'
  //       }
  //     ],
  //     gasStationId: '123',
  //     profit: 200
  //   } as Shift
  // ];

  shiftsTableColumns: string[] = ['type', 'profit', 'date', 'gasStationId'];

  shiftTypes: ShiftType[] = [
    ShiftType.Evening,
    ShiftType.Evening,
    ShiftType.Night,
    ShiftType.Unknown
  ];

  getGasStations(): GasStation[] {
    return this.gasStations;
  }

  getGasStationTanks(gasStationId: string): Observable<Tank[]> {
    return of(
      this.gasStationTanks.filter(tank => tank.gasStationId === gasStationId)
    );
  }

  getGasStationTableColumns(): string[] {
    return this.gasStationsTableColumns;
  }

  getGasStationListItems(): IListItem[] {
    return this.gasStationListItems;
  }

  getGasStationById(id: string): Observable<GasStation> {
    return of(this.gasStations.filter(gasStation => gasStation.id === id)[0]);
  }

  getShifts(): Observable<Shift[]> {
    return of([]);
    //return of(this.shifts);
  }

  getShiftsTableColumns(): Observable<string[]> {
    return of(this.shiftsTableColumns);
  }

  getShiftById(id: string): Observable<Shift> {
    return of(null);

    //return of(this.shifts.filter(gasStation => gasStation.id === id)[0]);
  }

  getExpantionPanelItem(): Observable<IExpantionPanelItem> {
    return of({
      title: 'title',
      description: 'descriiption',
      icon: 'person',
      url: './',
      listItems: this.getGasStationListItems()
    });
  }

  getShiftTypes(): Observable<ShiftType[]> {
    return of(this.shiftTypes);
  }
}
