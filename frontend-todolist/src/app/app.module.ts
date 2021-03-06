import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistTableComponent } from './components/todolist-table/todolist-table.component';
import { TodolistFormComponent } from './components/todolist-form/todolist-form.component';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodolistTableComponent,
    TodolistFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodolistTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
