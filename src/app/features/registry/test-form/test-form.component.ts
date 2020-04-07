import { Component, OnInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { ScrollSpyComponent } from 'src/app/shared/modules/scroll-spy/scroll-spy.component';
import { SidebarService } from 'src/app/shared/services/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent extends ScrollSpyComponent implements OnInit, OnDestroy {
  device = 'others';
  sidebarOpened = true;
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
      this.breakpointObserver
        .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
        .subscribe((result) => {
          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            this.device = 'handset';
            this.sidebarOpened = false;
          } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
            this.device = 'tablet';
            this.sidebarOpened = true;
          } else {
            this.device = 'others';
            this.sidebarOpened = true;
          }
        }),
      this.sidebarService.sidebarToggle.subscribe(() => {
        this.sidebarOpened = !this.sidebarOpened;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  tocClicked(toc: string) {
    this.scrollTo(toc);

    if (this.device === 'handset') {
      this.sidebarOpened = false;
    }
  }
}
