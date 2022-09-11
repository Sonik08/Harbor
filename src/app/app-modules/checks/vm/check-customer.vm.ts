import { Injectable } from '@angular/core';
import { LookupVM } from 'src/app/core/vm/lookup.vm';
import { ChecksCustomersApiService } from '../services/checks-customer-api.service';

@Injectable()
export class CheckCustomerVM extends LookupVM {
  constructor(private _apiService: ChecksCustomersApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.actions = this.getActions();
  }
}
