import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodolistService } from "../../services/todolist.service";
import { TodolistTableComponent } from "../todolist-table/todolist-table.component";


@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.css']
})
export class TodolistFormComponent implements OnInit {


  constructor(private httpClient: HttpClient, private todolistService: TodolistService, private todolistTableComponent: TodolistTableComponent) { }

  ngOnInit(): void {};

  async getTodos() {
    (await this.todolistService.getTodos()).subscribe(data => {
      //@ts-ignore
      this.todosArray = data.data;
    });
  }

  async onSubmit(f: NgForm){
    this.httpClient.post<any>('http://localhost:3000/todolist', f.value)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );
    await this.todolistTableComponent.ngOnInit();
    f.reset();
  }
}
