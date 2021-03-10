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
    return this.http.get(AppComponent.url + '/todolist');
  }

  /** DELETE: delete a todo from the database */
  async deleteTodo(id){

    // Test ID received
    // alert(id);
    return this.http.delete(AppComponent.url + '/todolist/' + id)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
  }
}
