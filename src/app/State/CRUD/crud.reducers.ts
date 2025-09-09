import { Action, createReducer, on } from "@ngrx/store";
import { createTodoSuccess, deleteTodoSuccess, loadTodosSuccess, updateTodoSuccess } from "./crud.actions";

export interface TodoState {
    todos: any[];
}

export const initialState: TodoState = {
    todos: []
}

export const todoReducer = createReducer(
    initialState,
    on(loadTodosSuccess, (state: TodoState, { todos }) => ({ ...state, todos })),
    on(createTodoSuccess, (state: TodoState, { todo }) => ({ ...state, todos : [...state.todos,todo] })),
    on(updateTodoSuccess, (state: TodoState, { todo }) => ({ ...state, todos : state.todos.map(t=> t.id === todo.id ? todo:t)})),
    on(deleteTodoSuccess, (state: TodoState, { id }) => ({ ...state, todos : state.todos.filter(t=>t.id !== id)})),
);

// export function reducer(state = initialState, action:Action): TodoState{
//     return todoReducer(state,action);
// }

