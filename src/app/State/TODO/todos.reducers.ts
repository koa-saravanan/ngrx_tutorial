import { createReducer, on } from "@ngrx/store";
import { ITodo } from "./todos.store";
import { loadTodos, loadTodosSuccess } from "./todos.actions";

export interface ITodoState{
    todos : ITodo[];
}

export const initialState : ITodoState = {
    todos : []
};

export const todoReducer = createReducer(
    initialState, 
    on(loadTodos, (state) => state),
    on(loadTodosSuccess, (state, {todos})=>({...state, todos}))
)