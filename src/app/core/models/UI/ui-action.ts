import { Observable } from 'rxjs';
import { UIActionType } from './ui-action-type.enum';

export class UIAction {
  type: UIActionType;
  name: string;
  message: string;
  isConfirmation: boolean = false;
  isShown: boolean = false;
  actionFn$: (model) => Observable<any>;
  showFn?: (model) => boolean;
  showFn$?: (model) => Observable<boolean>;
}
