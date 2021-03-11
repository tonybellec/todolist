import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { AppComponent } from "../app.component";


@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  constructor(private http: HttpClient) { }

  /** GET: Get all todos from the database */
  async getTodos(){
    return this.http.get(AppComponent.url + '/todolist')
  }

  /** GETBYID: get a todo by ID */
  async getTodoById(id){
    return this.http.get(AppComponent.url + '/todolist/' + id)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
  }

  /** UPDATE: update a todo */
  async update(id, data){
    return this.http.put(AppComponent.url + '/todolist/' + id, data)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      )
  }

  /** DELETE: delete a todo from the database */
  async deleteTodo(id){
    return this.http.delete(AppComponent.url + '/todolist/' + id)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
  }
}
