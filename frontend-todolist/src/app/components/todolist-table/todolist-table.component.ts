import { Component, OnInit } from '@angular/core';
import { TodolistService } from "../../services/todolist.service";

@Component({
  selector: 'app-todolist-table',
  templateUrl: './todolist-table.component.html',
  styleUrls: ['./todolist-table.component.css']
})
export class TodolistTableComponent implements OnInit {

  todosArray = [];
  displayStatus: boolean;

  constructor(public todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTodos();
    this.displayStatus = true;
  }

  async getTodos() {
    (await this.todolistService.getTodos()).subscribe(data => {
      //@ts-ignore
      this.todosArray = data.data;
    });
  }

  async getTodoById(id){
    (await this.todolistService.getTodoById(id));
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

  async displayArchive(){
    this.displayStatus = !this.displayStatus;
    await this.getTodos();
    return this.displayStatus;
  }
}
