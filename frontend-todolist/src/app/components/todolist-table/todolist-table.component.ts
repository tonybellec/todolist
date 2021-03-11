import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodolistService } from "../../services/todolist.service";
import {AppComponent} from "../../app.component";


@Component({
  selector: 'app-todolist-table',
  templateUrl: './todolist-table.component.html',
  styleUrls: ['./todolist-table.component.css']
})
export class TodolistTableComponent implements OnInit {

  todosArray = [];

  constructor(private http: HttpClient, public todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    (await this.todolistService.getTodos()).subscribe(data => {
      //@ts-ignore
      this.todosArray = data.data;
    });
  }

  async archiveTodo(todo, value){
    let id = todo._id;
    let newTodo = {
      archive: value
    };
    await this.todolistService.update(id, newTodo);
    await this.getTodos();
  }

  async deleteTodo(id){
    await this.todolistService.deleteTodo(id);
    await this.getTodos();
  }
}
