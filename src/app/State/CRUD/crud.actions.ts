import { createAction, props } from "@ngrx/store";

export const loadTodos = createAction('[Todo] load Todos');
export const loadTodosSuccess = createAction('[Todo] load todos success', props<{todos : any[]}>());
export const loadTodosFailure = createAction('[Todo] load todos failure', props<{error : any}>());

export const createTodo = createAction('[Todo] Create Todo', props<{ todo: any }>());
export const createTodoSuccess = createAction('[Todo] Create Todo Success', props<{ todo: any }>());
export const createTodoFailure = createAction('[Todo] Create Todo Failure', props<{ error: any }>());

export const updateTodo = createAction('[Todo] Update Todo', props<{ id: number, todo: any }>());
export const updateTodoSuccess = createAction('[Todo] Update Todo Success', props<{ todo: any }>());
export const updateTodoFailure = createAction('[Todo] Update Todo Failure', props<{ error: any }>());

export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success', props<{ id: number }>());
export const deleteTodoFailure = createAction('[Todo] Delete Todo Failure', props<{ error: any }>());

