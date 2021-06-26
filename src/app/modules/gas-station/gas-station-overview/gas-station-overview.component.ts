import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/base-components/services/mock-serice';

@Component({
  selector: 'gas-station-overview',
  templateUrl: './gas-station-overview.component.html',
  styleUrls: ['./gas-station-overview.component.scss']
})
export class GasStationOverviewComponent implements OnInit {
  listItems: any[] = [];

  constructor(private mockService: MockService) {}

  ngOnInit(): void {
    this.listItems = this.mockService.getGasStationListItems();
  }
}
