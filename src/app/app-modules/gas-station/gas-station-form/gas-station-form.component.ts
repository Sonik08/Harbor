import { Component, OnInit } from '@angular/core';
import { GasStationVM } from '../vm/gas-station-form.vm';

@Component({
  selector: 'gas-station-form',
  templateUrl: './gas-station-form.component.html',
  styleUrls: ['./gas-station-form.component.scss'],
  providers: [GasStationVM]
})
export class GasStationFormComponent implements OnInit {
  constructor(public vm: GasStationVM) {
  }
  ngOnInit(): void {
    this.vm.onInit();
  }
}
