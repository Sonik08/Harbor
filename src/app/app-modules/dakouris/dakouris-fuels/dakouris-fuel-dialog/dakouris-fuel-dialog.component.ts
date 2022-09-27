import {
  Component,
  HostListener,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuelType } from 'src/app/app-modules/entities/enums/fuel-type';
import { Fuel } from 'src/app/app-modules/entities/models/fuel';
import { GasStation } from 'src/app/app-modules/entities/models/gas-station';

@Component({
  selector: 'dakouris-fuel-dialog',
  templateUrl: './dakouris-fuel-dialog.component.html',
  styleUrls: ['./dakouris-fuel-dialog.component.scss']
})
export class DakourisFuelDialogComponent implements OnInit {
  description: string;
  title: string;
  dialogForm: FormGroup;
  gasStations: GasStation[] = [];
  selectedGasStations: GasStation[] = [];
  @ViewChild('gasStationsList') htmlSelection;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DakourisFuelDialogComponent, Fuel>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      model: {
        id: number;
        name: string;
        type: FuelType;
        gasStations: GasStation[];
      };
      gasStations: GasStation[];
      action: {
        name: string;
        message: string;
      };
    }
  ) {
    this.title = data.action.name;
    this.description = data.action.message;
    this.selectedGasStations = data.model.gasStations;
    this.gasStations = data.gasStations;

    this.dialogForm = this.fb.group({
      id: data.model.id,
      name: [{ value: data.model.name, disabled: true }],
      gasStations: this.gasStations
    });
  }

  setInitialLists() {}

  ngOnInit(): void {
    this.htmlSelection.selectedOptions.onChange.subscribe(gasStation => {
      console.log(gasStation);
      gasStation.added.map(added => this.selectedGasStations.push(added.value));
      gasStation.removed.map(
        removed =>
          (this.selectedGasStations = this.selectedGasStations.filter(
            (val: any) => {
              return val !== removed.value;
            }
          ))
      );
    });
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
