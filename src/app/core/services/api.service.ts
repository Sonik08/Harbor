import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Model } from '../models/model';
import { EnvService } from './env.service';

@Injectable({ providedIn: 'root' })
export abstract class ApiService<T extends Model> {
  apiURL: string;
  protected _httpClient: HttpClient;
  private _envService: EnvService;

  constructor(_httpClient: HttpClient, _envService: EnvService) {
    this._httpClient = _httpClient;
    this._envService = _envService;
  }

  get(): Observable<ApiResponse<T>> {
    return this._httpClient.get<ApiResponse<T>>(this.getUrl());
  }

  getById(id: string): Observable<ApiResponse<T>> {
    return this._httpClient.get<ApiResponse<T>>(this.getUrl() + '/' + id);
  }

  post(entity: T): Observable<ApiResponse<T>> {
    return this._httpClient.post<ApiResponse<T>>(this.getUrl(), entity);
  }

  put(entity: T): Observable<ApiResponse<T>> {
    return this._httpClient.put<ApiResponse<T>>(
      this.getUrl() + '/' + entity.id,
      entity
    );
  }

  delete(id: string): Observable<ApiResponse<T>> {
    return this._httpClient.delete<ApiResponse<T>>(this.getUrl() + '/' + id);
  }

  getUrl(): string {
    return `${this._envService.baseUrl}/api/${this.apiURL}`;
  }
}
