import { Directive, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Directive()
export abstract class ControlDirective {
  validations = [
    {
      type: Validators.pattern.name,
      message: 'Λανθασμένη μορφή'
    }
  ];

  @Input()
  form: FormGroup;

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  readonly = false;

  @Input()
  required = false;

  get control(): FormControl {
    return this.form.controls[this.name] as FormControl;
  }

  get validationMessages(): string[] {
    const messages: string[] = [];

    this.validations.forEach(validation => {
      if (
        this.control.hasError(validation.type) &&
        (this.control.dirty || this.control.touched)
      ) {
        messages.push(validation.message);
      }
    });

    return messages;
  }
}
