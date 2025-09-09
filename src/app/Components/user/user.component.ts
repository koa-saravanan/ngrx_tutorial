import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Icounter } from '../../State/Counter/counter.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

    counter$ : Observable<number>;
  
    constructor(private store : Store<Icounter>){
      this.counter$ = this.store.select('counter');
    }
}
