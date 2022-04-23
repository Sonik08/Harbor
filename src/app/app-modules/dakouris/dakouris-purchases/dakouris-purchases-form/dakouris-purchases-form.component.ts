import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { PurchaseVM } from '../../vm/purchase-form.vm';

@Component({
  selector: 'dakouris-purchases-form',
  templateUrl: './dakouris-purchases-form.component.html',
  styles: [],
  providers: [PurchaseVM]
})
export class DakourisPurchasesFormComponent
  implements OnInit, AfterViewChecked
{
  constructor(
    public vm: PurchaseVM,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.vm.onInit();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
