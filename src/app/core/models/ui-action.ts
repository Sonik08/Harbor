import { Observable } from "rxjs";

export class UIAction<TModel> {
    name: string;
    isAction: true;
    actionFn: (model: TModel) => void;
    showFn?: (model: TModel) => boolean;
    showFn$?: (model: TModel) => Observable<boolean>;
  }