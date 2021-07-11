import { Injectable } from '@angular/core';
import { GasStation } from 'src/app/app-modules/models/gas-station';
import { IListItem } from 'src/app/base-modules/models/list-item';

@Injectable({ providedIn: 'root' })
export class MockService {
  getGasStations(): GasStation[] {
    return [
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
  }

  getGasStationTableColumns(): string[] {
    return ['id', 'name'];
  }

  getGasStationListItems(): IListItem[] {
    return [
      {
        title: 'Income',
        icon: 'euro',
        url: '',
        subListItems: [
          { title: 'Income per shift', icon: 'person', url: './' } as IListItem,
          { title: 'Income per day', icon: 'group', url: './' } as IListItem
        ]
      }
    ];
  }
}
