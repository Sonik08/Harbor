import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Enum } from '../../models/enum';
import { Control } from '../control.directive';

@Component({
  selector: 'enum-control',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.scss']
})
export class EnumComponent extends Control {

  @Input()
  items: Enum[] = [];

  @Output() change = new EventEmitter<any>();

  onChangeValue(event: any) {
    this.change.emit(event);
  }
}
