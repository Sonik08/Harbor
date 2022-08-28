import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { IListItem } from '../models/UI/list-item';

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent {
  @Input() listItems: Observable<IListItem[]>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  onSelect(listItem: IListItem) {
    this._router.navigate([listItem.url], { relativeTo: this._activatedRoute });
  }
}
