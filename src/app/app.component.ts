import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './store/root-store.state';
import { AppStoreSelectors, AppStoreActions } from './store/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  theme$ = this.store.select(AppStoreSelectors.theme);
  private subscription: Subscription[] = [];

  constructor(private store: Store<AppState>, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.subscription.push(
      this.breakpointObserver
        .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
        .subscribe((result) => {
          let device = 'others';
          let navbarOpened = true;
          let sidebarOpened = true;
          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            device = 'handset';
            navbarOpened = false;
            sidebarOpened = false;
          } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
            device = 'tablet';
          }
          this.store.dispatch(AppStoreActions.setDevice({ newDevice: device }));
          this.store.dispatch(AppStoreActions.openNavbar({ open: navbarOpened }));
          this.store.dispatch(AppStoreActions.openSidebar({ open: sidebarOpened }));
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  onSwipe(evt) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    // const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';
    // this.eventText += `${x} ${y}<br/>`;

    console.log('App swipe', x);
    if (x === 'left') {
      this.store.dispatch(AppStoreActions.closeNavbar());
    } else if (x === 'right') {
      this.store.dispatch(AppStoreActions.closeSidebar());
    }
  }
}
