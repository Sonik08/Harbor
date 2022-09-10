import { Observable } from 'rxjs';
import { UIActionType } from './ui-action-type.enum';

export class UIAction {
  type: UIActionType;
  name: string;
  isAction: true;
  actionFn$: (model) => Observable<any>;
  showFn?: (model) => boolean;
  showFn$?: (model) => Observable<boolean>;
}
