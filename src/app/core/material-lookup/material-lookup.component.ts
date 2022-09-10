import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { LookupModel } from '../models/lookup-model';

@Component({
  selector: 'material-lookup',
  templateUrl: './material-lookup.component.html',
  styleUrls: ['./material-lookup.component.scss']
})
export class MaterialLookupComponent {
  // @Input() dataSource$: Observable<MatTableDataSource<LookupModel>>;
  // @Input() subject$: Subject<MatTableDataSource<LookupModel>>;
  // @Input() addFunc: Function;
  // @Input() editFunc: Function;
  // @Input() getDataFunc: Function;
  // @Output() onModalClose = new EventEmitter<any>();
  // @ViewChild(MatSort) sort: MatSort;
  // constructor(
  //   private _liveAnnouncer: LiveAnnouncer,
  //   private dialog: MatDialog
  // ) {}
  // ngOnInit(): void {
  //   this.actions = this.getActions();
  // }
  // openDialog(item = null) {
  //   const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);
  //   dialogRef
  //     .afterClosed()
  //     .pipe(
  //       tap(lookup => console.log(lookup)),
  //       // switchMap(lookup => {
  //       //   console.log(lookup);
  //       //   return this.editFunc(lookup);
  //       // }),
  //       tap(_ => this.modalClosed())
  //     )
  //     .subscribe(_ => this.modalClosed());
  // }
  // /** Announce the change in sort state for assistive technology. */
  // announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  // modalClosed() {
  //   this.onModalClose.emit();
  // }
}
