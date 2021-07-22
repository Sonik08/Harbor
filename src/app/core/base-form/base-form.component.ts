import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Model } from '../models/model';
import { BaseFormVM } from '../vm/form.vm';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent<TModel extends Model> {

  @Input()saveable: boolean;
  @Input()model: TModel;
  @Input()form: FormGroup;
  @Input()vm: BaseFormVM<TModel>

  onSubmit(){}
}
