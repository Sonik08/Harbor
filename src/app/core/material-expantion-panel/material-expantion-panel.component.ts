import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IExpantionPanelItem } from '../models/expantion-panel-item';
import { IListItem } from '../models/list-item';

@Component({
  selector: 'material-expantion-panel',
  templateUrl: './material-expantion-panel.component.html',
  styleUrls: ['./material-expantion-panel.component.scss']
})
export class MaterialExpantionPanelComponent implements OnInit {
  listItems: Observable<IListItem[]> = of([]);
  @Input() epxantionPanelItem: Observable<IExpantionPanelItem>;

  constructor() {}

  ngOnInit(): void {
    this.listItems = this.epxantionPanelItem.pipe(
      map(expantionItems => expantionItems.listItems)
    );
  }
}
