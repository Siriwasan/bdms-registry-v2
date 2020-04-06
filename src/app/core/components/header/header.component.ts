import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  @Output() navbarToggle = new EventEmitter<void>();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  onToggleNavbar() {
    this.navbarToggle.emit();
  }

  onToggleSidebar() {
    this.sidebarService.sidebarToggle.emit();
  }
}
