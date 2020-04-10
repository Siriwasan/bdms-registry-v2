import { Component, OnDestroy, OnInit } from '@angular/core';
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
          let sidebarOpened = true;
          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            device = 'handset';
            sidebarOpened = false;
          } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
            device = 'tablet';
          }
          this.store.dispatch(AppStoreActions.setDevice({ newDevice: device }));
          this.store.dispatch(AppStoreActions.openSidebar({ open: sidebarOpened }));
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
