import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../Services/todo.service";
import * as TodoActions from './todos.actions';
import { mergeMap, map } from "rxjs";
import { ITodo } from "./todos.store";

@Injectable()

export class todoEffects {
    actions$ = inject(Actions);
    constructor(private todoService: TodoService) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            mergeMap(() =>
                this.todoService.getTodos().pipe(
                    map((todos: ITodo[]) => TodoActions.loadTodosSuccess({ todos }))
                )
            )
        )
    )
}