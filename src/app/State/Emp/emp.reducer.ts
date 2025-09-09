import { createReducer } from "@ngrx/store";
import { Istore } from "./store";

export const initialState : ReadonlyArray<Istore> = [
    {
        "id":1,
        "name":"Alex",
        "username":'alex',
        "email": 'alex@gmail.com'
    },
    {
        "id":2,
        "name":"Alex",
        "username":'alex',
        "email": 'alex@gmail.com'
    },
    {
        "id":3,
        "name":"Alex",
        "username":'alex',
        "email": 'alex@gmail.com'
    }
]

export const empReducer = createReducer(initialState);