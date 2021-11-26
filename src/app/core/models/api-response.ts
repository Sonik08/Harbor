import { ApiError } from './api-error';

export interface ApiResponse<T> {
  data: Array<T>;
  errors: Array<ApiError>;
}
