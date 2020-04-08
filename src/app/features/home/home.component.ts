import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { increment, decrement, reset } from '../../store/counter.actions';
import { setTheme } from '../../store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number; app: string }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
    this.store.dispatch(setTheme());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
