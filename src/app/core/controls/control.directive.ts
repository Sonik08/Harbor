import { Directive, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Directive()
export abstract class ControlDirective {
  validations = [
    {
      type: Validators.pattern.name,
      message: 'Λανθασμένη μορφή'
    }
  ];

  @Input()
  form: UntypedFormGroup;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  readonly = false;

  @Input()
  required = false;

  @Input()
  disabled = false;

  @Input()
  value;

  onInit() {
    if (this.value) {
      this.form.controls[this.name].setValue(this.value);
    }
  }
  get control(): UntypedFormControl {
    return this.form.controls[this.name] as UntypedFormControl;
  }

  get validationMessages(): string[] {
    const messages: string[] = [];

    // this.validations.forEach(validation => {
    //   if (
    //     this.control.hasError(validation.type) &&
    //     (this.control.dirty || this.control.touched)
    //   ) {
    //     messages.push(validation.message);
    //   }
    // });

    return messages;
  }
}
