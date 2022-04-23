import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Model } from '../models/model';
import { ApiService } from '../services/api.service';

export class BaseResolver<T extends Model> {
  constructor(private _service: ApiService<T>) {}

  baseResolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    id: string,
    model: T
  ) {
    const isEditing = state.url.includes('/edit');

    if (!isEditing) {
      return of(model);
    }

    return this._service.getById(route.paramMap.get(id)).pipe(
      map(apiResponse => {
        return apiResponse.data[0];
      })
    );
  }
}
