import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Model } from '../models/model';
import { BaseFormVM } from '../vm/form.vm';

@Component({
  selector: 'base-partial-form',
  templateUrl: './base-partial-form.component.html',
  styles: []
})
export class BasePartialFormComponent<TModel extends Model, TRelatedData> {
  @Input() saveable: boolean;
  @Input() model: TModel;
  @Input() form: FormGroup;
  @Input() vm: BaseFormVM<TModel, TRelatedData>;

  //What is add
  onAdd() {}
}
