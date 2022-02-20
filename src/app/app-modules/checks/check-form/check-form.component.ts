import { Component, OnInit } from '@angular/core';
import { CheckVM } from '../vm/check-form.vm';

@Component({
  selector: 'check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss'],
  providers: [CheckVM]
})
export class CheckFormComponent implements OnInit {
  constructor(public vm: CheckVM) {}

  ngOnInit(): void {
    this.vm.onInit();
  }
}
