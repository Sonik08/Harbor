import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpantionPanelItem } from '../models/expantion-panel-item';

@Component({
  selector: 'material-expantion-panel',
  templateUrl: './material-expantion-panel.component.html',
  styleUrls: ['./material-expantion-panel.component.scss']
})
export class MaterialExpantionPanelComponent implements OnInit {

  @Input() expantionPanelItems: Observable<IExpantionPanelItem>;

  constructor() { }

  ngOnInit(): void {
  }

}
