import { Component, OnInit } from '@angular/core';
import { ShiftFormVM } from '../vm/shift-form.vm';

@Component({
  selector: 'shift-form',
  templateUrl: './shift-form.component.html',
  styleUrls: ['./shift-form.component.scss'],
  providers: [ShiftFormVM]
})
export class ShiftFormComponent implements OnInit {
  constructor(public vm: ShiftFormVM) {
  }
  ngOnInit(): void {
    this.vm.onInit();
  }

}
