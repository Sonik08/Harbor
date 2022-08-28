import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupModel } from '../models/lookup-model';

@Component({
  selector: 'material-lookup',
  templateUrl: './material-lookup.component.html',
  styleUrls: ['./material-lookup.component.scss']
})
export class MaterialLookupComponent {
  // @Input() dataSource: LookupModel[];
  displayedColumns: string[] = ['id', 'name'];

  dataSource = [
    { id: 1, name: 'Bank1' },
    { id: 2, name: 'Bank2' }
  ];
}
