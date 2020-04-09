import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './store/root-store.state';
import { AppStoreSelectors } from './store/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  device = 'others';
  private subscription: Subscription;

  theme$ = this.store.select(AppStoreSelectors.theme);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  constructor(private store: Store<AppState>, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.subscription = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
        if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          this.device = 'handset';
        } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
          this.device = 'tablet';
        } else {
          this.device = 'others';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
