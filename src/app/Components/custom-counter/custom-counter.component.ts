import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCustomCounter, removeCustomCounter } from '../../State/Counter/counter.action';
import { Icounter } from '../../State/Counter/counter.store';

@Component({
  selector: 'app-custom-counter',
  imports: [FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss'
})
export class CustomCounterComponent {

  constructor(private store : Store<Icounter>){}

  addCounterValue!: number;
  removeCounterValue! : number

  addCounter() {
    this.store.dispatch(addCustomCounter({addValue : +this.addCounterValue}));
  }

  removeCounter(){
    this.store.dispatch(removeCustomCounter({removeValue : +this.removeCounterValue}));
  }
}
