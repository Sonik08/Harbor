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

  protected initializeModel(): Observable<Shift> {
    return this._activatedRoute.parent.paramMap.pipe(
      filter(paramsMap => paramsMap.has('gasStationId')),
      map(paramsMap => {
        return paramsMap.get('gasStationId');
      }),
      first(),
      switchMap(gasStaitonId => {
        this.model = new Shift();
        this.model.gasStationId = gasStaitonId;

        return this.model$;
      })
    );
  }

  protected isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  // I should either be broken into two observables or return a single observable
  protected loadResolvedData(model$: Observable<Shift>): Observable<any> {
    return model$.pipe(
      switchMap(_ => {
        return this._activatedRoute.data;
      }),
      map(resolvedData => {
        this.types$ = of(resolvedData.shifts.relatedData.types);

        const resolvedShiftsData = resolvedData.shifts as ResolvedData<Shift, ShiftRelatedData>;

        for (let i = 0; i < resolvedShiftsData.relatedData.tanks.length; i++) {
          const tank = resolvedShiftsData.relatedData.tanks[i];
          
          this.model.tanks.push(new ShiftFuel(tank.id, tank.name, tank.fuelType));
        }

        return this.model;
      })
    );
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
        const x = formGroup.get('tanks') as FormArray;
        return x.at(index) as FormGroup;
      }),
      single()
    );
  }

  public getProfit(){
    // TODO get profit for each tank plus washes and accessories
  }
}
