import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Purchase } from '../../entities/models/Purchase';
import { PurchaseApiService } from '../services/purchase-api.service';

@Injectable({ providedIn: 'root' })
export class PurchaseResolver implements Resolve<Purchase> {
  constructor(private _apiService: PurchaseApiService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Purchase> | Promise<Purchase> | Purchase {
    return of();
  }
}
