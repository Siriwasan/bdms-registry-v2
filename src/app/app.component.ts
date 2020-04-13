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
    console.log(Breakpoints);
    this.subscription.push(
      this.breakpointObserver
        .observe([
          Breakpoints.HandsetPortrait,
          Breakpoints.HandsetLandscape,
          Breakpoints.TabletPortrait,
        ])
        .subscribe((result) => {
          console.log(result);
          let device = 'others';
          let navbarMode = 'side';
          let navbarOpened = true;
          let sidebarMode = 'side';
          let sidebarOpened = true;

          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            console.log('Breakpoints.HandsetPortrait');
            device = 'handset';
            navbarMode = 'over';
            navbarOpened = false;
            sidebarMode = 'over';
            sidebarOpened = false;
          } else if (result.breakpoints[Breakpoints.HandsetLandscape]) {
            console.log('Breakpoints.HandsetLandscape');
            device = 'handset';
            navbarMode = 'over';
            navbarOpened = false;
            sidebarMode = 'side';
            sidebarOpened = true;
          } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
            console.log('Breakpoints.TabletPortrait');
            device = 'tablet';
          }

          this.store.dispatch(AppStoreActions.setDevice({ newDevice: device }));
          this.store.dispatch(AppStoreActions.setNavbarMode({ mode: navbarMode }));
          this.store.dispatch(AppStoreActions.openNavbar({ open: navbarOpened }));
          this.store.dispatch(AppStoreActions.setSidebarMode({ mode: sidebarMode }));
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
