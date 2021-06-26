import { Injectable } from '@angular/core';
import { GasStation } from 'src/app/modules/models/gas-station';

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

  getGasStationListItems(): any[] {
    return [
      {
        title: 'Income',
        icon: 'euro',
        url: '',
        subListItems: [
          { title: 'Income per shift', icon: 'person', url: './' },
          { title: 'Income per day', icon: 'group', url: './' }
        ]
      }
    ];
  }
}
