import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LookupModel } from '../models/lookup-model';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent<TModel extends LookupModel> {
  @Input() dataSource: Observable<TModel[]>;
  displayedColumns: string[] = ['id', 'name'];
}
