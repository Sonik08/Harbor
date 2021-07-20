import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Control } from '../control.directive';

@Component({
  selector: 'input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends Control{
  @Input()
  type = "text";
  @Input()
  min = 0;

  @Output()
  focusChanged = new EventEmitter<any>();

  @Output()
  focus = new EventEmitter<any>();

  @Output()
  focusout = new EventEmitter<any>();

  onFocus(event: any) {
    this.focus.emit(event);
  }

  onFocusOutEvent(event: any) {
    this.focus.emit(event);
  }

}
