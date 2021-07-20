import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../models/card-item';

@Component({
  selector: 'material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() subtitle: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.icon)
    
  }

}
