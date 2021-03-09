import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodolistService } from "../../services/todolist.service";


@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.css']
})
export class TodolistFormComponent implements OnInit {


  constructor(private httpClient: HttpClient, private todolistService: TodolistService) { }

  ngOnInit(): void {};

  onSubmit(f: NgForm){

    console.log(f.value);
    console.log("ok");

    this.httpClient.post<any>('http://localhost:3000/todolist', f.value)
      .subscribe(
        (Response) => console.log(Response),
        (Error) => console.log(Error)
      );

    alert("The form is submitted");
    f.reset();
    // this.todolistService.getTodos();
  }
}
