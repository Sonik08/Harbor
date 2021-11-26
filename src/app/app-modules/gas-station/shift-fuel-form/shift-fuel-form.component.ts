import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShiftFuel } from '../../entities/models/shift-fuel';

@Component({
  selector: 'shift-fuel-form',
  templateUrl: './shift-fuel-form.component.html',
  styles: []
})
export class ShiftFuelFormComponent {
  @Input() shiftFuel: ShiftFuel;
  @Input() form: FormGroup;

public tankFuelInCurrency(): number {
    return this.form.get('litres').value * this.form.get('price').value;
  }
}
