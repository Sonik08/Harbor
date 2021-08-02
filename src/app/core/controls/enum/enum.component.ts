import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() itemSelected = new EventEmitter<Enum>();

  onChangeValue(event: any) {
    this.itemSelected.emit(event);
  }
}
