import { ApiError } from './api-error';

export interface ApiResponse<T> {
  data: Array<T>;
  code: number;
  errors: ApiError;
}
