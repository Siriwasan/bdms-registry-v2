import {
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ScrollSpyService } from '../scroll-spy/scroll-spy.service';
import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors, AppStoreActions } from 'src/app/store/app';
import { handleSwipe } from 'src/app/shared/functions/swipe';

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
    protected store: Store<AppState>,
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef
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

  closeSidebar() {
    this.store.dispatch(AppStoreActions.closeSidebar());
  }

  tocClicked(toc: string) {
    this.scrollTo(toc);

    if (this.device === 'handset') {
      this.store.dispatch(AppStoreActions.closeSidebar());
    }
  }

  onSwipe(evt) {
    if (handleSwipe(evt) === 'rightEdge') {
      this.store.dispatch(AppStoreActions.toggleSidebar());
    }
  }

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
