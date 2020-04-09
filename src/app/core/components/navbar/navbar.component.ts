import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/root-store.state';
import { AppStoreActions, AppStoreSelectors } from 'src/app/store/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() navItemSelected = new EventEmitter<void>();
  theme$ = this.store.select(AppStoreSelectors.theme);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onNavItemSelected() {
    this.navItemSelected.emit();
  }

  toggleDarkTheme(checked: boolean) {
    this.store.dispatch(AppStoreActions.setDarkTheme({ darkTheme: checked }));
  }
}
