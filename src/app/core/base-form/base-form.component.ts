import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Model } from '../models/model';
import { BaseFormVM } from '../vm/base-form.vm';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent<TModel extends Model, TRelatedData> {
  @Input() saveable: boolean;
  @Input() model: TModel;
  @Input() form: UntypedFormGroup;
  @Input() vm: BaseFormVM<TModel, TRelatedData>;

  onSubmit() {
    this.vm.submit();
  }
}
