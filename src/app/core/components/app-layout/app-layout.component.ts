import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/root-store.state';
import { AppStoreSelectors, AppStoreActions } from 'src/app/store/app';
import { handleSwipe } from 'src/app/shared/functions/swipe';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  device = 'others';
  navbarOpened = true;
  private subscription: Subscription[] = [];

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription.push(
      this.store
        .select(AppStoreSelectors.device)
        .subscribe((newDevice) => (this.device = newDevice)),
      this.store
        .select(AppStoreSelectors.navbarOpened)
        .subscribe((open) => (this.navbarOpened = open))
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  closeNavbar() {
    this.store.dispatch(AppStoreActions.closeNavbar());
  }

  onSwipe(evt) {
    if (handleSwipe(evt) === 'leftEdge') {
      this.store.dispatch(AppStoreActions.toggleNavbar());
    }
  }
}
