import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { RegistryFormComponent } from 'src/app/shared/modules/registry-form/registry-form.component';
import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors } from 'src/app/store/app';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent extends RegistryFormComponent
  implements OnInit, AfterViewInit, OnDestroy {
  device = 'others';
  sidebarOpened = true;
  private subscription: Subscription[] = [];

  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef,
    private store: Store<AppState>
  ) {
    super(changeDetector, scrollSpy, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();

    this.subscription.push(
      this.store
        .select(AppStoreSelectors.device)
        .subscribe((newDevice) => (this.device = newDevice)),
      this.store
        .select(AppStoreSelectors.sidebarOpened)
        .subscribe((open) => (this.sidebarOpened = open))
    );
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  tocClicked(toc: string) {
    this.scrollTo(toc);

    if (this.device === 'handset') {
      this.sidebarOpened = false;
    }
  }
}
