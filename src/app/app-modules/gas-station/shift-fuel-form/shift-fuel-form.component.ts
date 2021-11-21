import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShiftFuel } from '../../entities/models/shift-fuel';

@Component({
  selector: 'shift-fuel-form',
  templateUrl: './shift-fuel-form.component.html',
  styles: []
})
export class ShiftFuelFormComponent {
  constructor() {}
  @Input() shiftFuel: ShiftFuel;
  @Input() form: FormGroup;
}
