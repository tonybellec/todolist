import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodolistService } from "../../services/todolist.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todosArray = [];

  constructor(private http: HttpClient, private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos() {
    (await this.todolistService.getTodos()).subscribe(data => {
      //@ts-ignore
      this.todosArray = data.data;
    });
  }

  onSubmit(f: NgForm){

    console.log(f.value);
    console.log("ok");

    this.http.post()<any>('http://localhost:3000/todolist', f.value)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );

    alert("The form is submitted");
    f.reset();
    this.ngOnInit();
  }

}
