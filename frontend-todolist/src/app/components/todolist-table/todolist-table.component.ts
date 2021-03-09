import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodolistService } from "../../services/todolist.service";


@Component({
  selector: 'app-todolist-table',
  templateUrl: './todolist-table.component.html',
  styleUrls: ['./todolist-table.component.css']
})
export class TodolistTableComponent implements OnInit {

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
}
