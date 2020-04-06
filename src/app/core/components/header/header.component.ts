import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navbarToggle = new EventEmitter<void>();
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onToggleNavbar() {
    this.navbarToggle.emit();
  }

  onToggleSidebar() {
    this.sidebarToggle.emit();
  }
}
