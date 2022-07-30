import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, single, tap } from 'rxjs/operators';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { ShiftType } from '../../entities/enums/shift-type';
import { Shift } from '../../entities/models/shift';
import { ShiftFuel } from '../../entities/models/shift-fuel';
import { ShiftRelatedData } from '../resolvers/resolve-models/shift-related-data';
import { ShiftApiService } from '../services/shift-api.service';

@Injectable()
export class ShiftFormVM extends BaseFormVM<Shift, ShiftRelatedData> {
  types$: Observable<ShiftType[]> = of([]);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: ShiftApiService
  ) {
    super(_activatedRoute, _router, _apiService);
  }

  onInit() {
    this.model = new Shift();

    super.onInit();
  }

  getModel(): Observable<Shift> {
    return this._route.data.pipe(
      tap(response => (this.types$ = of(response.data.relatedData.types))),
      map(response => this.initializeShiftWithRelated(response))
    );
  }

  private initializeShiftWithRelated(response) {
    let shift = response.data.model;
    shift.tanks = this.mapTanksToShiftTanks(response.data.relatedData.tanks);

    this.model = shift;
    return shift;
  }

  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  public getShiftFuels(): Observable<ShiftFuel[]> {
    return this.model$.pipe(
      filter(model => !!model),
      map(model => model.tanks)
    );
  }

  public getShiftFuelForm(index: number): Observable<FormGroup> {
    return this.form$.pipe(
      map(formGroup => {
        const tanks = formGroup.get('tanks') as FormArray;
        return tanks.at(index) as FormGroup;
      }),
      single()
    );
  }

  public getProfit(): Observable<number> {
    return this.form$.pipe(
      map(formGroup => {
        const tanks = formGroup.get('tanks').value as ShiftFuel[];

        const total = tanks.reduce<number>((acc, tank) => {
          return acc + parseFloat(tank.total.toString());
        }, 0);

        // Remove Expenseses from Total
        return (
          total +
          parseInt(formGroup.get('washes').value) +
          parseInt(formGroup.get('accesories').value)
        );
      })
    );
  }

  private mapTanksToShiftTanks(tanks: any[]) {
    const shiftTanks = [];
    for (let i = 0; i < tanks.length; i++) {
      const tank = tanks[i];

      shiftTanks.push(new ShiftFuel(tank.id, tank.name, tank.fuelType));
    }

    return shiftTanks;
  }
}
