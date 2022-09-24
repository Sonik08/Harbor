import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LookupModel } from '../models/lookup-model';

@Component({
  selector: 'material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {
  description: string;
  title: string;
  dialogForm: FormGroup;
  isConfirmation: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MaterialDialogComponent, LookupModel>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      model: {
        id: number;
        name: string;
      };
      action: {
        name: string;
        message: string;
        isConfirmation: boolean;
      };
    }
  ) {
    this.title = data.action.name;
    this.description = data.action.message;
    this.isConfirmation = data.action.isConfirmation;

    this.dialogForm = this.fb.group({
      id: data.model.id,
      name: data.model.name
    });
  }

  ngOnInit(): void {

  }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(this.dialogForm.value);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
