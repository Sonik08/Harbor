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
}
