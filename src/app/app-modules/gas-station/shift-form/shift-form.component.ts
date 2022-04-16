import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShiftFormVM } from '../vm/shift-form.vm';

@Component({
  selector: 'shift-form',
  templateUrl: './shift-form.component.html',
  styles: [],
  providers: [ShiftFormVM]
})
export class ShiftFormComponent implements OnInit, AfterViewChecked {
  constructor(
    public vm: ShiftFormVM,
    private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.vm.onInit();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
