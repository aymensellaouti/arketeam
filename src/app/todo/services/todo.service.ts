import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from './../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }

  getTodos(): Todo[] {
    return this.todos;
  }

  logTodos() {
    this.loggerService.logger(this.todos);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
