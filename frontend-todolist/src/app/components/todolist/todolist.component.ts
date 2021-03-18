import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodolistService } from "../../services/todolist.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todosArray = [];
  displayStatus: boolean;

  constructor(private httpClient: HttpClient, private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTodos();
    this.displayStatus = true;
  }

  async onSubmit(f: NgForm){
    await this.todolistService.createTodo(f.value);
    f.reset();
    await this.getTodos();
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

  async displayArchive(){
    this.displayStatus = !this.displayStatus;
    await this.getTodos();
    return this.displayStatus;
  }

  async deleteTodo(id){
    await this.todolistService.deleteTodo(id);
    await this.getTodos();
  }
}
