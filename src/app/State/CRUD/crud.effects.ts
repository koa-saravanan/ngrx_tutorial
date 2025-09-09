import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TodoService } from "../../Services/todo.service";
import { createTodo, createTodoFailure, createTodoSuccess, deleteTodo, deleteTodoFailure, deleteTodoSuccess, loadTodos, loadTodosFailure, loadTodosSuccess, updateTodo, updateTodoFailure, updateTodoSuccess } from "./crud.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()

export class TodoEffects {
    actions$ = inject(Actions);
    private store = inject(Store);
    constructor(private todoService: TodoService) { }

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodos),
        mergeMap(() => this.todoService.getTodos().pipe(
            map(todos => loadTodosSuccess({ todos })),
            catchError(error => of(loadTodosFailure({ error })))
        ))
    ));

    createTodo$ = createEffect(() => this.actions$.pipe(
        ofType(createTodo),
        mergeMap(({ todo }) => this.todoService.postTodods(todo).pipe(
            map((createdTodo) => {
                this.store.dispatch(loadTodos());
                return createTodoSuccess({ todo: createdTodo });
            }),
            catchError(error => of(createTodoFailure({ error })))
        ))
    ));

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        mergeMap(({ id, todo }) => this.todoService.putTodods(id, todo).pipe(
            map((updatedTodo) => {
                this.store.dispatch(loadTodos());
                return updateTodoSuccess({ todo: updatedTodo });
            }),
            catchError(error => of(updateTodoFailure({ error })))
        ))
    ));

    deleteTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteTodo),
            mergeMap(({ id }) =>
                this.todoService.deleteTodos(id).pipe(
                    map(() => {
                        this.store.dispatch(loadTodos());
                        return deleteTodoSuccess({ id });
                    }),
                    catchError((error) => of(deleteTodoFailure({ error })))
                ))
        ));

}