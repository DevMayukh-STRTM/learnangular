import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos: Todo[] = [];

  constructor() {
    this.todos.push(
      new Todo(0, "Do Physics", "Hello World")
    )
  }

}
