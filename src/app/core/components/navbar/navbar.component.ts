import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() navItemSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onNavItemSelected() {
    this.navItemSelected.emit();
  }
}
