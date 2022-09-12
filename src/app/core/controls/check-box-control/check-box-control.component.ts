import { Component, Input, OnInit } from '@angular/core';
import { ControlDirective } from '../control.directive';

@Component({
  selector: 'check-box-control',
  templateUrl: './check-box-control.component.html',
  styles: []
})
export class CheckBoxControlComponent extends ControlDirective {}
