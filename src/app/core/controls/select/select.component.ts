import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectItem } from '../../models/UI/select-item';
import { ControlDirective } from '../control.directive';

@Component({
  selector: 'select-control',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent extends ControlDirective {
  @Input()
  selectItems: Observable<SelectItem[]> = of([]);

  @Output() itemSelected = new EventEmitter<any>();

  onChangeValue(event: any) {
    this.itemSelected.emit(event);
  }
}
