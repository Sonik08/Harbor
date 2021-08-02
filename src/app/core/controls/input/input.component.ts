import { Component, Input } from '@angular/core';
import { Control } from '../control.directive';

@Component({
  selector: 'input-control',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends Control {
  @Input()
  type = 'text';
  @Input()
  min = 0;
}
