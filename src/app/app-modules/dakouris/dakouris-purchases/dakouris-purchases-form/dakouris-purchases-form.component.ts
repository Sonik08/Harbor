import { Component, OnInit } from '@angular/core';
import { PurchaseVM } from '../../vm/purchase-form.vm';

@Component({
  selector: 'dakouris-purchases-form',
  templateUrl: './dakouris-purchases-form.component.html',
  styles: [],
  providers: [PurchaseVM]
})
export class DakourisPurchasesFormComponent implements OnInit {
  constructor(public vm: PurchaseVM) {}

  ngOnInit(): void {
    this.vm.onInit();
  }
}