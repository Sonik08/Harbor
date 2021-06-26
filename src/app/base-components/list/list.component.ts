import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IListitem } from '../models/list-item';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listItems: Observable<IListitem[]>;

  ngOnInit(): void {
    console.log(this.listItems);
  }
}
