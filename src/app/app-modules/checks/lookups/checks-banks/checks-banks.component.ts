import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBankVM } from '../../vm/check-bank.vm';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UIAction } from 'src/app/core/models/UI/ui-action';
import { DialogService } from 'src/app/core/services/dialog.service';
@Component({
  selector: 'checks-banks',
  templateUrl: './checks-banks.component.html',
  styleUrls: ['./checks-banks.component.scss'],
  providers: [CheckBankVM]
})
export class ChecksBanksComponent implements OnInit {
  constructor(
    public vm: CheckBankVM,
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
    this.dialogSrv.openDialog(item, action).subscribe(_ => this.vm.refresh());
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
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
