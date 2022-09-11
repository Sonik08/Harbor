import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { CheckVM } from '../vm/check-form.vm';

@Component({
  selector: 'check-form',
  templateUrl: './check-form.component.html',
  styles: [],
  providers: [CheckVM]
})
export class CheckFormComponent implements OnInit, AfterViewChecked {
  constructor(
    public vm: CheckVM,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.vm.onInit();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
