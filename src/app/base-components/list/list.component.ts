import { Component } from '@angular/core';
import { Model } from '../models/model';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<TModel extends Model> {}
