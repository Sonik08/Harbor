import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {

  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
