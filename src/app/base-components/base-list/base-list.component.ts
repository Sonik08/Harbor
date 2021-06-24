import { Component, Input, OnInit } from '@angular/core';
import { Model } from '../models/model';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent<TModel extends Model> implements OnInit {
  @Input() vm: BaseListVM<TModel>;

  ngOnInit(): void {}
}
