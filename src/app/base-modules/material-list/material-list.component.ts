import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { MockService } from 'src/app/base-modules/services/mock-serice';
import { IListItem } from '../../base-modules/models/list-item';
import { OptionModel } from '../models/option-model';

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  @Input() listItems: Observable<IListItem[]>;

  constructor(private _mockSrv: MockService) {
    this.listItems = of(_mockSrv.getGasStationListItems());
  }

  onSelect(listItem: OptionModel){
  }

  ngOnInit(): void {
  }
}
