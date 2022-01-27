import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, first, map, single, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { ShiftType } from '../../entities/enums/shift-type';
import { Shift } from '../../entities/models/shift';
import { ShiftFuel } from '../../entities/models/shift-fuel';
import { ShiftRelatedData } from '../resolvers/resolve-models/shift-related-data';
import { ShiftAPIService } from '../services/shift.api-service';

@Injectable()
export class ShiftFormVM extends BaseFormVM<Shift, ShiftRelatedData> {
  types$: Observable<ShiftType[]> = of([]);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: ShiftAPIService
  ) {
    super(_activatedRoute, _apiService);
  }

  onInit() {
    super.onInit();
  }

  protected initializeModel(): void {
    this.model$ = this._activatedRoute.parent.paramMap.pipe(
      filter(paramsMap => paramsMap.has('gasStationId')),
      map(paramsMap => {
        return paramsMap.get('gasStationId');
      }),
      first(),
      switchMap(gasStaitonId => {
        const shift = new Shift();
        shift.gasStationId = gasStaitonId;
        return of(shift);
      })
    );
  }

  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  // I should either be broken into two observables or return a single observable
  protected loadResolvedData(): Observable<any> {
    return this._activatedRoute.data.pipe(
      map(resolvedData => {
        this.types$ = of(resolvedData.shifts.relatedData.types);

        return resolvedData.shifts as ResolvedData<Shift, ShiftRelatedData>;
      }),
      switchMap(resolvedShiftsData => {
        return this.model$.pipe(
          map(model => {
            for (
              let i = 0;
              i < resolvedShiftsData.relatedData.tanks.length;
              i++
            ) {
              const tank = resolvedShiftsData.relatedData.tanks[i];

              const shiftFuel = new ShiftFuel(
                tank.id,
                tank.name,
                tank.fuelType
              );

              model.tanks.push(shiftFuel);
            }
            return model;
          })
        );
      })
    );
  }

  public getShiftFuels(): Observable<ShiftFuel[]> {
    return this.model$.pipe(
      map(model => {
        if (model.tanks.length === 0) {
          return null;
        }

        return model.tanks;
      })
    );
  }

  public getShiftFuelForm(index: number): Observable<FormGroup> {
    return this.form$.pipe(
      map(formGroup => {
        const x = formGroup.get('tanks') as FormArray;
        return x.at(index) as FormGroup;
      }),
      single()
    );
  }
}
