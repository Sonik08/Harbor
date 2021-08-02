import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormVM } from 'src/app/core/vm/form.vm';
import { Shift } from '../../models/shift';
import { ShiftType } from '../../models/shift-type';
import { ShiftRelatedData } from '../resolvers/resolve-models/shift-related-data';

@Injectable()
export class ShiftFormVM extends BaseFormVM<Shift, ShiftRelatedData> {
  types: ShiftType[] = [
    ShiftType.Evening,
    ShiftType.Morning,
    ShiftType.Night,
    ShiftType.Unknown
  ];
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
    this.model = new Shift();
  }
  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }
}
