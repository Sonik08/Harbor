import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, single, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { ShiftType } from '../../entities/enums/shift-type';
import { Shift } from '../../entities/models/shift';
import { ShiftFuel } from '../../entities/models/shift-fuel';
import { ShiftRelatedData } from '../resolvers/resolve-models/shift-related-data';

@Injectable()
export class ShiftFormVM extends BaseFormVM<Shift, ShiftRelatedData> {
  types$: Observable<ShiftType[]> = of([]);

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
    this.model$ = of(new Shift());
  }

  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  protected loadResolvedData(): void {
    this._activatedRoute.data
      .pipe(
        map(resolvedData => {
          this.types$ = of(resolvedData.shifts.relatedData.types);

          return resolvedData.shifts as ResolvedData<Shift, ShiftRelatedData>;
        }),
        switchMap(resolvedShiftsData => {
          return this.model$.pipe(
            map(model => {
              // eslint-disable-next-line prettier/prettier
              for (let i = 0; i < resolvedShiftsData.relatedData.tanks.length; i++) {
                const tank = resolvedShiftsData.relatedData.tanks[i];

                const shiftFuel = new ShiftFuel();

                shiftFuel.tankId = tank.id;
                shiftFuel.tankName = tank.name;
                shiftFuel.fuelType = tank.fuelType;

                model.tanks.push(shiftFuel);
              }
              return model;
            })
          );
        })
      )
      .subscribe();
  }

  public getShiftFuels(): Observable<ShiftFuel[]> {
    return this.model$.pipe(
      map(model => {
        return model.tanks;
      })
    );
  }

  public getShiftFuelForm(index: number): Observable<FormGroup> {
    return this.form$.pipe(
      map(formGroup => {
        console.log(formGroup);
        const x = formGroup.get('tanks') as FormArray;
        return x.at(index) as FormGroup;
      }),
      single()
    );
  }
}
