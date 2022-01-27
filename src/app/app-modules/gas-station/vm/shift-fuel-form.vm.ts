import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { ShiftFuel } from '../../entities/models/shift-fuel';
import { ShiftFuelRelatedData } from '../resolvers/resolve-models/shift-fuel-related-data';
import { ShiftFuelAPIService } from '../services/shift-fuel.api-service';

@Injectable()
export class ShiftFuelFormVM extends BaseFormVM<
  ShiftFuel,
  ShiftFuelRelatedData
> {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: ShiftFuelAPIService
  ) {
    super(_activatedRoute, _apiService);
  }

  onInit() {
    super.onInit();
  }

  protected initializeModel(): void {
    this.model = new ShiftFuel();
  }
  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  protected loadResolvedData(): Observable<any> {
    return of([]);
  }
}
