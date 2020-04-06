import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public sidebarToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
