import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GasStation } from 'src/app/app-modules/models/gas-station';
import { IListItem } from 'src/app/base-modules/models/list-item';

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
    { title: 'New Shift', icon: 'person', url: './' }
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

  getExpantionPanelItems(){
    return [
      
    ]
  }
}
