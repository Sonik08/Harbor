import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ShiftFuel } from '../../entities/models/shift-fuel';

@Component({
  selector: 'shift-fuel-form',
  templateUrl: './shift-fuel-form.component.html',
  styleUrls: ['./shift-fuel.form.scss']
})
export class ShiftFuelFormComponent implements OnInit {
  @Input() form: UntypedFormGroup;
  @Input() shiftFuel: ShiftFuel;

  ngOnInit(): void {
    this.form.controls['tankName'].disable();
  }

  onInputUpdate(): void {
    this.form.controls['total'].setValue(
      (
        Number(this.form.controls['litres'].value) *
        Number(this.form.controls['price'].value)
      ).toFixed(2)
    );
  }
}
