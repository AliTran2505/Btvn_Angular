import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: any = [];
  todo: any = {
    name: '',
    status: false
  }
  constructor() { }

  ngOnInit(): void {
    this.getTodoLocalSt();
  }
  getTodoLocalSt() {
    if (localStorage.getItem('ahihi')) {
      let data: any = localStorage.getItem('ahihi');
      this.todoList = JSON.parse(data);
    } else {
      this.todoList = [];
    }
  }

  addTodo(): void {
    this.todoList.push(this.todo);
    localStorage.setItem('ahihi', JSON.stringify(this.todoList));
    this.getTodoLocalSt();
  }

  checkbox(i: number): void {
    let status = this.todoList.find((item: any, key: number) => {
      return key == i;
    }).status;
    if (status) {
      this.todoList.find((item: any, key: number) => {
        return key == i;
      }).status = false;
    } else {
      this.todoList.find((item: any, key: number) => {
        return key == i;
      }).status = true;
    }
    localStorage.setItem('ahihi', JSON.stringify(this.todoList));
    this.getTodoLocalSt();
  }

  deleteTodo(i: number): void {
    this.todoList.splice(i, 1);
    localStorage.setItem('ahihi', JSON.stringify(this.todoList));
    this.getTodoLocalSt();
  }

  updateTodo(i: number, name: string): void {
    this.todoList.find((item: any, key: number) => {
      return key == i;
    }).name = name;
    localStorage.setItem('ahihi', JSON.stringify(this.todoList));
    this.getTodoLocalSt();
  }
}
