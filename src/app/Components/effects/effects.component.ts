import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodos } from '../../State/TODO/todos.selectors';
import { loadTodos } from '../../State/TODO/todos.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-effects',
  imports: [AsyncPipe],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.scss'
})
export class EffectsComponent implements OnInit {
  private store = inject(Store);

  todosData$ = this.store.select(selectTodos);

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
