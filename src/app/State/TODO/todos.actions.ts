import { createAction, props } from "@ngrx/store"
import { ITodo } from "./todos.store";

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
    '[Todo] Load Todos Success',
    props<{ todos: ITodo[] }>()
)
