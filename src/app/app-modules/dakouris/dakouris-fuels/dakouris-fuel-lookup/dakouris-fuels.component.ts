import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { GasStation } from 'src/app/app-modules/entities/models/gas-station';
import { UIAction } from 'src/app/core/models/UI/ui-action';
import { UIActionType } from 'src/app/core/models/UI/ui-action-type.enum';
import { DialogService } from 'src/app/core/services/dialog.service';
import { DakourisFuelVM } from '../../vm/dakouris-fuel.vm';

@Component({
  selector: 'dakouris-fuels',
  templateUrl: './dakouris-fuels.component.html',
  styleUrls: ['./dakouris-fuels.component.scss'],
  providers: [DakourisFuelVM]
})
export class DakourisFuelsComponent implements OnInit {
  gasStations: GasStation[] = [];
  constructor(
    public vm: DakourisFuelVM,
    private dialogSrv: DialogService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.vm.ngOnInit();
  }

  ngAfterViewInit() {
    this.vm.refresh();
  }

  openDialog(item, action: UIAction) {
    if (action.type === UIActionType.AddGasStationToFuel) {
      const gasStations = [
        { id: 1, name: 'Eteka' },
        { id: 2, name: 'BP' }
      ];
      this.dialogSrv
        .openFuelDialog(item, gasStations, action)
        .subscribe(_ => this.vm.refresh());
    }

    this.dialogSrv.openDialog(item, action).subscribe(_ => this.vm.refresh());
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  refresh() {
    this.vm.refresh();
  }
}
