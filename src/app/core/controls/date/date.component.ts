import { Component } from '@angular/core';
import { Control } from '../control.directive';

@Component({
  selector: 'date-control',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends Control {
  checkDate = (d: Date | null): boolean => {
    // Here a check needs to be done for wich dates the thing is ok
    return true;
  };
}
