import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";


@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  async getTodos(){
    return this.http.get(AppComponent.url + '/todolist');
  }
}
