import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExpantionPanelItem } from 'src/app/core/models/UI/expantion-panel-item';

@Component({
  selector: 'dakouris-overview',
  templateUrl: './dakouris-overview.component.html',
  styles: []
})
export class DakourisOverviewComponent {
  expantionPanel: Observable<IExpantionPanelItem> = of({
    title: 'title',
    description: 'description',
    icon: '',
    url: './',
    listItems: [
      { title: 'Πρατήρια', icon: 'local_gas_station', url: 'gas-stations' },
      { title: 'Είδοι καυσίμων', icon: 'gas_meter', url: 'fuels' }
    ]
  });
}
