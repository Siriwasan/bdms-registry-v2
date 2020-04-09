import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/root-store.state';
import { AppStoreActions } from 'src/app/store/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() navItemSelected = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onNavItemSelected() {
    this.navItemSelected.emit();
  }

  toggleDarkTheme(checked: boolean) {
    this.store.dispatch(AppStoreActions.setDarkTheme({ darkTheme: checked }));
  }
}
