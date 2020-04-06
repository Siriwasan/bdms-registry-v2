import { Component, OnInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { ScrollSpyComponent } from 'src/app/shared/modules/scroll-spy/scroll-spy.component';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent extends ScrollSpyComponent implements OnInit, OnDestroy {
  showSidebar = false;
  sidebarOpened = true;
  isMobile: boolean;
  private subscription: Subscription[] = [];

  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef,
    private sidebarService: SidebarService,
    private breakpointObserver: BreakpointObserver
  ) {
    super(changeDetector, scrollSpy, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();

    this.subscription.push(
      this.sidebarService.sidebarToggle.subscribe(() => {
        this.sidebarOpened = !this.sidebarOpened;
        this.showSidebar = !this.showSidebar;
      }),
      this.breakpointObserver.observe('(max-width: 600px)').subscribe((result) => {
        this.isMobile = result.matches;
        this.sidebarOpened = !result.matches;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  tocClicked(toc: string) {
    this.scrollTo(toc);

    if (this.isMobile) {
      this.sidebarOpened = false;
    }
  }
}
