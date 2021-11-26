import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Model } from '../models/model';

@Injectable({ providedIn: 'root' })
export class ApiService<T extends Model> {
  constructor(private http: HttpClient) {}

  get(): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.getUrl());
  }

  post(entity: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.getUrl(), entity);
  }

  put(entity: T): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(
      this.getUrl() + '/' + entity.id,
      entity
    );
  }

  delete(id: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(this.getUrl() + '/' + id);
  }

  getUrl(): string {
    // resolve the url here
    return '';
  }
}
