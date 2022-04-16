import { Component } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  menuItems: MenuItem[] = [
    {
      routerLink: '/gas-stations',
      label: 'Πρατήρια',
      icon: 'local_gas_station'
    },
    {
      routerLink: '/checks',
      label: 'Επιταγές',
      icon: 'account_balance_wallet'
    },
    {
      routerLink: '/dakouris',
      label: 'Νταγγουρης',
      icon: 'local_shipping'
    }
  ];
}
