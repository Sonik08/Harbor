import { Component, Input, OnInit } from '@angular/core';
import { IListitem } from '../models/list-item';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listItems: IListitem[];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
