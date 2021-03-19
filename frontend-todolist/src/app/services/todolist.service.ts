import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  private todosServiceArray: Observable<Object>;

  constructor(private http: HttpClient) { }

  /** GET: Get all todos from the database */
  async getTodos(){
    this.todosServiceArray = this.http.get(AppComponent.url + '/todolist');
    return this.todosServiceArray;
  }

  /** GETBYID: get a todo by ID */
  async getTodoById(id){
    return this.http.get(AppComponent.url + '/todolist/' + id)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
  }

  /** CREATE: create a todo */
  async createTodo(object){
    this.http.post<any>(AppComponent.url + '/todolist/', object)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      )
  }

  /** UPDATE: update a todo */
  async update(id, data){
    this.http.put(AppComponent.url + '/todolist/' + id, data)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      )
  }

  /** DELETE: delete a todo from the database */
  async deleteTodo(id){
    this.http.delete(AppComponent.url + '/todolist/' + id)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
  }
}
