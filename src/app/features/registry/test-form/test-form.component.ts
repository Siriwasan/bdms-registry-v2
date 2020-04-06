import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';

import { ScrollSpyService } from '../../../shared/modules/scroll-spy/scroll-spy.service';
import { ScrollSpyComponent } from 'src/app/shared/modules/scroll-spy/scroll-spy.component';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
})
export class TestFormComponent extends ScrollSpyComponent implements OnInit {
  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected scrollSpy: ScrollSpyService,
    protected hostElement: ElementRef
  ) {
    super(changeDetector, scrollSpy, hostElement);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
