import { Directive, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[scrollSpyElement]',
})
export class ScrollSpyElementDirective implements AfterViewInit, OnDestroy {
  @Input()
  private scrollSpyId: string;

  constructor(
    private elementRef: ElementRef,
    private scrollSpy: ScrollSpyService,
  ) {}

  public ngAfterViewInit(): void {
    this.scrollSpy.addElement(this.elementRef.nativeElement, this.scrollSpyId);
  }

  public ngOnDestroy(): void {
    this.scrollSpy.removeElement(this.elementRef.nativeElement, this.scrollSpyId);
  }
}
