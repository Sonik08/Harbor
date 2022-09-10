import { Injectable } from '@angular/core';
import { LookupVM } from 'src/app/core/vm/lookup.vm';
import { CheckBanksApiService } from '../services/checks-bank-api.service';

@Injectable()
export class CheckBankVM extends LookupVM {
  constructor(private _apiService: CheckBanksApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.actions = this.getActions();
  }
}
