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
      { title: 'Purchases', icon: 'shop_two', url: 'purchases' },
      { title: 'New Purchase', icon: 'shop', url: 'purchases/new' },
      { title: 'Weekly Report', icon: 'date_range', url: 'purchases/weekly' }
    ]
  });
}
