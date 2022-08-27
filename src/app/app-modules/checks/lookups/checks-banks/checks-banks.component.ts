import { Component } from '@angular/core';
import { of } from 'rxjs';
import { LookupModel } from 'src/app/core/models/lookup-model';

@Component({
  selector: 'checks-banks',
  templateUrl: './checks-banks.component.html',
  styles: []
})
export class ChecksBanksComponent {
  data = of([
    { id: 1, name: 'Bank1' },
    { id: 2, name: 'Bank2' }
  ] as LookupModel[]);
}
