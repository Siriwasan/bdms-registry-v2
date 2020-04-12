import {
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';

import { ScrollSpyService } from '../scroll-spy/scroll-spy.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors } from 'src/app/store/app';

const COMPLETION_CONTAINER = 250;

export class RegistryFormComponent implements OnInit, AfterViewInit, OnDestroy {
  public currentSection = '';
  public tocMaxHeight: string;
  private tocMaxHeightOffset = 0;

  private listener: any;
  private scrollTarget: Element;
  private currentSectionSubscription: Subscription;

  device = 'others';
  sidebarOpened = true;
  private subscription: Subscription[] = [];

  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef,
    protected store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log('ScrollSpyComponent ngOnInit');

    this.subscription.push(
      this.store
        .select(AppStoreSelectors.device)
        .subscribe((newDevice) => (this.device = newDevice)),
      this.store
        .select(AppStoreSelectors.sidebarOpened)
        .subscribe((open) => (this.sidebarOpened = open))
    );
  }

  ngAfterViewInit(): void {
    console.log('ScrollSpyComponent ngAfterViewInit');

    this.initializeScrollSpy();

    // this.listener = () => this.calculatTocMaxHeight();
    // this.scrollTarget.addEventListener('scroll', this.listener, false);

    this.currentSectionSubscription = this.scrollSpy
      .getCurrentSection$()
      .subscribe((currentSection: string): void => {
        this.currentSection = currentSection;
        this.changeDetector.markForCheck();
      });
  }

  private initializeScrollSpy() {
    const el = this.hostElement.nativeElement as Element;
    this.scrollTarget = el.querySelector('mat-drawer-content');
    this.scrollSpy.setScrollTarget(this.scrollTarget);
    this.scrollSpy.subscribeScroll();
  }

  ngOnDestroy() {
    console.log('ScrollSpyComponent ngOnDestroy');
    if (this.scrollTarget !== undefined) {
      this.scrollTarget.removeEventListener('scroll', this.listener, false);
    }
    this.currentSectionSubscription.unsubscribe();
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  @HostListener('window:resize')
  onResize() {
    this.calculatTocMaxHeight();

    if (this.currentSection !== '') {
      document.getElementById(this.currentSection + 'TOC')?.scrollIntoView({ block: 'nearest' });
    }
  }

  calculatTocMaxHeight() {
    if (!this.tocMaxHeightOffset) {
      // Must wait until `mat-toolbar` is measurable.
      const el = this.hostElement.nativeElement as Element;
      const headerEl = document.querySelector('.app-header');
      // const footerEl = el.querySelector('footer');
      // if (headerEl && footerEl) {
      //   this.tocMaxHeightOffset = headerEl.clientHeight + footerEl.clientHeight + 24; //  fudge margin
      // }
      this.tocMaxHeightOffset = headerEl.clientHeight;
    }
    this.tocMaxHeight = (
      document.body.scrollHeight -
      window.pageYOffset -
      this.tocMaxHeightOffset -
      COMPLETION_CONTAINER
    ).toFixed(2);
  }

  public isActive(section: string): boolean {
    return this.currentSection === section;
  }

  public scrollTo(section: string) {
    this.scrollSpy.scrollTo(section);
  }

  tocClicked(toc: string) {
    this.scrollTo(toc);

    if (this.device === 'handset') {
      this.sidebarOpened = false;
    }
  }

  onSwipe(evt) {
    // const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    // const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    // this.eventText += `${x} ${y}<br/>`;

    this.handleSwipe(evt);
  }

  private getStartPosition = (e) => {
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    const finalX = e.srcEvent.pageX || e.srcEvent.screenX || 0;
    const finalY = e.srcEvent.pageY || e.srcEvent.screenY || 0;

    return {
      x: finalX - deltaX,
      y: finalY - deltaY,
    };
  };

  private handleSwipe = (e) => {
    const threshold = 100;
    const { x } = this.getStartPosition(e);

    if (x >= 0 && x <= threshold) {
      // handle swipe from left edge e.t.c
      console.log('swipe form left edge');
    } else if (x >= window.outerWidth - threshold && x <= window.outerHeight) {
      // handle other case
      console.log('swipe form right edge');
      // this.store.dispatch(AppStoreActions.openSidebar({ open: true }));
      this.sidebarOpened = true;
    }
  };

  // @HostListener('swipeleft')
  // openSidenav() {
  //   // open the sidenav
  //   console.log('swipeleft');
  // }

  //#region Warning before leaving
  // public canDeactivate() {
  //   // ? Prototype for leaving form after changed
  //   // ? return confirm('Do you really want to leave?');
  //   // ? return this.form.submitted || !this.form.dirty;

  //   if (!this.registryFormService.isFormDirty()) {
  //     return true;
  //   }

  //   const dialogRef = this.dialogService.createModalDialog({
  //     title: 'Warning!!!',
  //     content: 'Form is not saved before leaving',
  //     buttons: ['Discard change', 'Cancel'],
  //     // buttons: ['Save', 'Discard change', 'Cancel']
  //   });

  //   return dialogRef.afterClosed().pipe(
  //     map((result) => {
  //       // if (result === 'Save') {
  //       //   return true;
  //       // }
  //       if (result === 'Discard change') {
  //         return true;
  //       }
  //       if (result === 'Cancel') {
  //         return false;
  //       }
  //     }),
  //     take(1)
  //   );
  // }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event) {
  //   if (!isDevMode() && this.registryFormService.isFormDirty()) {
  //     console.log('Processing beforeunload...');
  //     event.returnValue = false;
  //   }
  // }
  //#endregion Warning before leaving
}
