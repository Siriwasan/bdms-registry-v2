import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { AppState } from 'src/app/store/root-store.state';
import { ScrollSpyService } from 'src/app/shared/modules/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-gtsd241',
  templateUrl: './gtsd241.component.html',
  styleUrls: ['./gtsd241.component.scss'],
})
export class Gtsd241Component extends RegistryFormComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  constructor(
    protected store: Store<AppState>,
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef
  ) {
    super(store, changeDetector, scrollSpy, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
