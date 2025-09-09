import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../State/Counter/counter.action';
import { Icounter } from '../../State/Counter/counter.store';
import { AdminComponent } from '../admin/admin.component';
import { CustomCounterComponent } from '../custom-counter/custom-counter.component';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-counter',
  imports: [AdminComponent, UserComponent, AsyncPipe, CustomCounterComponent,],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent{
  // counter: number = 0;
  counter$: Observable<number>;

  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }

  onIncrement() {
    // this.counter++;
    this.store.dispatch(increment());
  }

  onDecrement() {
    // this.counter--;
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.counter = 0;
    this.store.dispatch(reset());
  }

}
