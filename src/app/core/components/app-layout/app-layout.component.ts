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
  navbarMode = 'side';
  navbarOpened = true;
  sidebarMode: string;
  sidebarOpened: boolean;
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
      this.store.select(AppStoreSelectors.navbarMode).subscribe((mode) => (this.navbarMode = mode)),
      this.store
        .select(AppStoreSelectors.navbarOpened)
        .subscribe((open) => (this.navbarOpened = open)),
      this.store
        .select(AppStoreSelectors.sidebarMode)
        .subscribe((mode) => (this.sidebarMode = mode)),
      this.store
        .select(AppStoreSelectors.sidebarOpened)
        .subscribe((open) => (this.sidebarOpened = open))
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

  touchStart(event: any) {
    // if (event.cancelable) {
    //   event.preventDefault();
    // }

    const initialX = event.touches[0].clientX;
    const initialY = event.touches[0].clientY;

    const touchMove = (e) => {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = initialX - currentX;
      const diffY = initialY - currentY;
      const thresholdX = 100;

      // if (Math.abs(diffX) > Math.abs(diffY)) {
      //   // sliding horizontally
      //   if (diffX > 0) {
      //     console.log('swiped left');
      //   } else {
      //     console.log('swiped right');
      //   }
      // } else {
      //   // sliding vertically
      //   if (diffY > 0) {
      //     console.log('swiped up');
      //   } else {
      //     console.log('swiped down');
      //   }
      // }

      if (diffX > 0 && diffX > thresholdX) {
        // console.log('swiped left');
        if (this.navbarMode === 'over' && this.navbarOpened) {
          this.store.dispatch(AppStoreActions.closeNavbar());
          touchEnd();
        } else if (this.sidebarMode === 'over' && !this.navbarOpened) {
          this.store.dispatch(AppStoreActions.openSidebar());
          touchEnd();
        }
      } else if (diffX < 0 && diffX < -thresholdX) {
        // console.log('swiped right');
        if (this.sidebarMode === 'over' && this.sidebarOpened) {
          this.store.dispatch(AppStoreActions.closeSidebar());
          touchEnd();
        } else if (this.navbarMode === 'over' && !this.sidebarOpened) {
          this.store.dispatch(AppStoreActions.openNavbar());
          touchEnd();
        }
      }
    };

    const touchEnd = () => {
      event.target.removeEventListener('touchmove', touchMove);
      event.target.removeEventListener('touchend', touchEnd);
    };

    event.target.addEventListener('touchmove', touchMove);
    event.target.addEventListener('touchend', touchEnd);
  }
}
