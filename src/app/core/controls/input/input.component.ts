import { Component, Input } from '@angular/core';
import { ControlDirective } from '../control.directive';

@Component({
  selector: 'input-control',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends ControlDirective {
  @Input()
  type = 'text';
  @Input()
  min = 0;
}
