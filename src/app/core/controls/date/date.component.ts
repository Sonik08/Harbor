import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlDirective } from '../control.directive';

@Component({
  selector: 'date-control',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends ControlDirective {
  checkDate = (d: Date | null): boolean => {
    // TODO Here a check needs to be done for wich dates the thing is ok
    return true;
  };
}
