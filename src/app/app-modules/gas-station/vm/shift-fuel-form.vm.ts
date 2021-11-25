import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { ShiftFuel } from '../../entities/models/shift-fuel';
import { ShiftType } from '../../entities/enums/shift-type';
import { ShiftFuelRelatedData } from '../resolvers/resolve-models/shift-fuel-related-data';

@Injectable()
export class ShiftFuelFormVM extends BaseFormVM<
  ShiftFuel,
  ShiftFuelRelatedData
> {
  types: ShiftType[] = [ShiftType.Evening, ShiftType.Morning, ShiftType.Night];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    super(_activatedRoute);
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
}
