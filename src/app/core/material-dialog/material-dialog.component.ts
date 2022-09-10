import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LookupDialogModel } from '../models/lookup-dialog-model';
import { UIActionType } from '../models/UI/ui-action-type.enum';

@Component({
  selector: 'material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {
  model: LookupDialogModel = null;
  description: string;
  dialogForm: FormGroup;
  isDeletion: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MaterialDialogComponent, LookupDialogModel>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      id: number;
      name: string;
      action: UIActionType;
    }
  ) {
    this.model = data;

    if (data.action === UIActionType.Delete) {
      this.isDeletion = true;
      this.description = 'Διαγραφή';
      this.model = data;
    } else if (data.action === UIActionType.New) {
      this.description = 'Προσθήκη νέου';
      this.dialogForm = this.fb.group({
        id: 0,
        name: ''
      });
    } else {
      this.description = 'Επεξεργασία';
      this.dialogForm = this.fb.group({
        id: this.model.id,
        name: this.model.name
      });
    }
  }

  ngOnInit(): void {
    this.dialogForm = this.fb.group({
      id: this.model?.id,
      name: this.model?.name
    });
  }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(this.model);
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
