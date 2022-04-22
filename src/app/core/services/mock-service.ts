import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bank } from 'src/app/app-modules/entities/enums/bank-type';
import { ShiftType } from 'src/app/app-modules/entities/enums/shift-type';
import { FuelType } from 'src/app/app-modules/entities/enums/fuel-type';
import { Shift } from 'src/app/app-modules/entities/models/shift';
import { Tank } from 'src/app/app-modules/entities/models/tank';
import { IListItem } from 'src/app/core/models/UI/list-item';
import { IExpantionPanelItem } from '../models/UI/expantion-panel-item';

@Injectable({ providedIn: 'root' })
export class MockService {
  banks: Bank[] = [
    Bank.Agrobank,
    Bank.AlfaBank,
    Bank.BankofCyprus,
    Bank.Attica,
    Bank.National,
    Bank.Pireos,
    Bank.Eurobank
  ];

  gasStationsTableColumns: string[] = ['id', 'name'];

  // gasStationTanks: Tank[] = [
  //   {
  //     id: '1',
  //     name: 'Tank Diesel 1',
  //     gasStationId: '1',
  //     fuelType: FuelType.Diesel,
  //     maxLitres: 7000
  //   },
  //   {
  //     id: '2',
  //     name: 'Tank LPG 1',
  //     gasStationId: '1',
  //     fuelType: FuelType.LPG,
  //     maxLitres: 4500
  //   },
  //   {
  //     id: '3',
  //     name: 'Tank Super 1',
  //     gasStationId: '1',
  //     fuelType: FuelType.Ultimate,
  //     maxLitres: 5000
  //   },
  //   {
  //     id: '4',
  //     name: 'Tank Unleaded 1',
  //     gasStationId: '1',
  //     fuelType: FuelType.Unleaded,
  //     maxLitres: 5000
  //   },
  //   {
  //     id: '5',
  //     name: 'Tank LPG 1',
  //     gasStationId: '2',
  //     fuelType: FuelType.LPG,
  //     maxLitres: 3000
  //   },
  //   {
  //     id: '6',
  //     name: 'Tank Diesel 1',
  //     gasStationId: '2',
  //     fuelType: FuelType.Diesel,
  //     maxLitres: 4520
  //   },
  //   {
  //     id: '7',
  //     name: 'Tank Unleaded 1',
  //     gasStationId: '2',
  //     fuelType: FuelType.Unleaded,
  //     maxLitres: 2000
  //   },
  //   {
  //     id: '8',
  //     name: 'Tank Unleaded 2',
  //     gasStationId: '2',
  //     fuelType: FuelType.Unleaded,
  //     maxLitres: 3500
  //   }
  // ];

  shiftTypes: ShiftType[] = [
    ShiftType.Morning,
    ShiftType.Evening,
    ShiftType.Night
  ];

  getBankTypes(): Observable<Bank[]> {
    return of(this.banks);
  }

  // getGasStationTanks(gasStationId: string): Observable<Tank[]> {
  //   return of(
  //     this.gasStationTanks.filter(tank => tank.gasStationId === gasStationId)
  //   );
  // }

  getGasStationTableColumns(): string[] {
    return this.gasStationsTableColumns;
  }

  getShifts(): Observable<Shift[]> {
    return of([]);
    //return of(this.shifts);
  }

  getShiftById(id: string): Observable<Shift> {
    return of(null);

    //return of(this.shifts.filter(gasStation => gasStation.id === id)[0]);
  }

  getExpantionPanelItem(): Observable<IExpantionPanelItem> {
    return of();
  }

  getShiftTypes(): Observable<ShiftType[]> {
    return of(this.shiftTypes);
  }
}
