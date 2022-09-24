import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExpantionPanelItem } from 'src/app/core/models/UI/expantion-panel-item';

@Component({
  selector: 'checks-overview',
  templateUrl: './checks-overview.component.html',
  styles: []
})
export class ChecksOverviewComponent {
  expantionPanel: Observable<IExpantionPanelItem> = of({
    title: 'title',
    description: 'description',
    icon: '',
    url: './',
    listItems: [
      { title: 'Επιταγές', icon: 'receipt_long', url: 'checks' },
      { title: 'Πελάτες', icon: 'groups', url: 'customers' },
      { title: 'Τράπεζες', icon: 'account_balance', url: 'banks' },
      {
        title: 'Εβδομαδιες αναφορες',
        icon: 'assignment',
        url: 'weekly-reports'
      },
      {
        title: 'Μηνιαιες αναφορες',
        icon: 'assignment_add',
        url: 'monthly-reports'
      }
    ]
  });
}
