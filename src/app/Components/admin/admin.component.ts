import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icounter } from '../../State/Counter/counter.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  counter$ : Observable<number>;

  constructor(private store : Store<Icounter>){
    this.counter$ = this.store.select('counter');
  }
}
