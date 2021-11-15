import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Control } from '../control.directive';

@Component({
  selector: 'enum-control',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.scss']
})
export class EnumComponent extends Control {
  @Input()
  enums: any[] = [];

  @Output() itemSelected = new EventEmitter<any>();

  onChangeValue(event: any) {
    this.itemSelected.emit(event);
  }
}
