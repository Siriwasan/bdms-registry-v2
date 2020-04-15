import {
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
  HostListener,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ScrollSpyService } from '../scroll-spy/scroll-spy.service';
import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors, AppStoreActions } from 'src/app/store/app';
import { handleSwipe } from 'src/app/shared/functions/swipe';

export class RegistryFormComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  public currentSection = '';
  public tocMaxHeight: string;
  private tocMaxHeightOffset = 0;

  private listener: any;
  private scrollTarget: Element;
  private currentSectionSubscription: Subscription;

  device = 'Others';
  sidebarMode = 'side';
  sidebarOpened = true;
  completionContent = true;
  private subscription: Subscription[] = [];

  constructor(
    protected store: Store<AppState>,
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef
  ) {}

  ngOnInit() {
    this.subscription.push(
      this.store.select(AppStoreSelectors.device).subscribe((newDevice) => {
        this.device = newDevice;
        // this.calculatTocMaxHeight();
      }),
      this.store
        .select(AppStoreSelectors.sidebarMode)
        .subscribe((mode) => (this.sidebarMode = mode)),
      this.store
        .select(AppStoreSelectors.sidebarOpened)
        .subscribe((open) => (this.sidebarOpened = open))
    );

    this.store.dispatch(AppStoreActions.initializeLayout());
  }

  ngAfterViewInit(): void {
    this.initializeScrollSpy();

    this.listener = () => this.calculatTocMaxHeight();
    this.scrollTarget.addEventListener('scroll', this.listener, false);

    this.currentSectionSubscription = this.scrollSpy
      .getCurrentSection$()
      .subscribe((currentSection: string): void => {
        this.currentSection = currentSection;
        this.changeDetector.markForCheck();
      });
  }

  ngAfterContentInit() {
    this.calculatTocMaxHeight();
  }

  private initializeScrollSpy() {
    const el = this.hostElement.nativeElement as Element;
    this.scrollTarget = el.querySelector('mat-drawer-content');
    if (!this.scrollTarget) {
      console.log('[Error] Scroll target is not define');
    }

    this.scrollSpy.setScrollTarget(this.scrollTarget);
    this.scrollSpy.subscribeScroll();
  }

  ngOnDestroy() {
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
    // if (!this.tocMaxHeightOffset) {
    // Must wait until `mat-toolbar` is measurable.
    const el = this.hostElement.nativeElement as Element;
    const headerEl = document.querySelector('.app-header');
    // const footerEl = el.querySelector('footer');
    // if (headerEl && footerEl) {
    //   this.tocMaxHeightOffset = headerEl.clientHeight + footerEl.clientHeight + 24; //  fudge margin
    // }
    this.tocMaxHeightOffset = headerEl.clientHeight;
    // }

    const cutOffHeight = document.body.scrollHeight - window.pageYOffset - this.tocMaxHeightOffset;
    this.completionContent = cutOffHeight > 550;
    const completionContainerHeight = (this.completionContent ? 250 : 70) - 32;

    this.tocMaxHeight = (
      document.body.scrollHeight -
      window.pageYOffset -
      this.tocMaxHeightOffset -
      completionContainerHeight
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

    this.store.dispatch(AppStoreActions.closeSidebar());
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
