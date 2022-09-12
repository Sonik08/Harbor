import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Purchase } from 'src/app/app-modules/entities/models/Purchase';
import { PurchaseApiService } from '../../services/purchase-api.service';

@Component({
  selector: 'dakouris-purchases-table',
  templateUrl: './dakouris-purchases-table.component.html',
  styles: []
})
export class DakourisPurchasesTableComponent implements OnInit {
  tableData: Observable<Purchase[]>;
  url = '/edit';
  addUrl = 'new';

  columns = [
    'id',
    'date',
    'totalPriceBeforeDiscounts',
    'totalPriceAfterDiscounts',
    'totalPriceBeforeVAT',
    'totalPriceAfterVAT',
    'dateOfPayment'
  ];

  constructor(private _apiService: PurchaseApiService) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(data => {
        return data.data;
      })
    );
  }
}
