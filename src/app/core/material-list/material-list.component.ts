import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { MockService } from 'src/app/core/services/mock-service';
import { IListItem } from '../models/list-item';

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent {
  @Input() listItems: Observable<IListItem[]>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _mockSrv: MockService,
    private _router: Router
  ) {
    this.listItems = of(_mockSrv.getGasStationListItems());
  }

  onSelect(listItem: IListItem) {
    this._router.navigate([listItem.url], { relativeTo: this._activatedRoute });
  }
}
