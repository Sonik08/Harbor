import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ControlDirective } from '../control.directive';

@Component({
  selector: 'enum-control',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.scss']
})
export class EnumComponent extends ControlDirective {
  @Input()
  enums: Observable<any[]> = of([]);

  @Output() itemSelected = new EventEmitter<any>();

  onChangeValue(event: any) {
    this.itemSelected.emit(event);
  }
}
