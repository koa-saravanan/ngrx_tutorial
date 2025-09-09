import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../State/TODO/todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private base_url = 'https://jsonplaceholder.typicode.com/todos';

  // constructor(private http : HttpClient) { }

  // getTodos() : Observable<ITodo[]>{
  //   return this.http.get<ITodo[]>(this.base_url);
  // }

   private base_url = 'http://localhost:3000/Todos';

  constructor(private http : HttpClient) { }

  getTodos() : Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.base_url);
  }
  
  postTodods(todo:any){
    return this.http.post(this.base_url,todo);
  }

  putTodods(id : number,todo:any){
    return this.http.put(`${this.base_url}/${id}`,todo);
  }

  deleteTodos(id:number){
    return this.http.delete(`${this.base_url}/${id}`);
  }
  
}
