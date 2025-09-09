import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createTodo, deleteTodo, loadTodos, updateTodo } from '../../State/CRUD/crud.actions';
import { selectTodos } from '../../State/TODO/todos.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  private store = inject(Store);

  newData = '';
  isCreate!: boolean;

  // todosData$ = this.store.select(selectTodos);

  crudData$!: Observable<any[]>;

  ngOnInit(): void {
    // this.store.dispatch(loadTodos());
    this.crudData$ = this.store.select(selectTodos);
    this.loadData();
  }

  loadData() {
    this.store.dispatch(loadTodos());
  }
  addData(data: any) {
    this.store.dispatch(createTodo({ todo: { title: data } }));
    this.newData = '';
  }
  updateData(id:number,todo:any) {
    const updatedData = {...todo, title : prompt('Enter new title.', todo.title)};
    this.store.dispatch(updateTodo({id,todo:updatedData}));
  }
  deleteData(id:number) {
    this.store.dispatch(deleteTodo({id}));
  }
  createData() {
    this.isCreate = true;
  }
}