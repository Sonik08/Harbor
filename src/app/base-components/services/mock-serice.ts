import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockService {
  getGasStations() {
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

  getGasStationTableColumns() {
    return ['id', 'name'];
  }
}
