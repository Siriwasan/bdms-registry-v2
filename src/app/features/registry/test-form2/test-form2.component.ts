import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { AppState } from 'src/app/store/root-store.state';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-test-form2',
  templateUrl: './test-form2.component.html',
  styleUrls: ['./test-form2.component.scss'],
})
export class TestForm2Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, OnDestroy {
  items: Observable<any[]>;

  constructor(
    protected store: Store<AppState>,
    protected scrollSpy: ScrollSpyService,
    protected changeDetector: ChangeDetectorRef,
    protected hostElement: ElementRef,
    private afs: AngularFirestore
  ) {
    super(store, scrollSpy, changeDetector, hostElement);
  }

  ngOnInit() {
    // super.ngOnInit();

    // this.items = this.firestore.collection('Staff').stateChanges()
    // staffs.subscribe((staff) => console.log(staff.length));

    this.afs
      .doc('Staff/0vc6tBiWWw5XeW6agKd3')
      .snapshotChanges()
      .subscribe((val) => {
        console.log(val);
      });
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit();
  }

  ngOnDestroy() {
    // super.ngOnDestroy();
  }
}
