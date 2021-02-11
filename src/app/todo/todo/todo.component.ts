import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from '../services/todo.service';
import { Todo } from './../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todo = new Todo();
  constructor(
    private todoService: TodoService,
    private tostrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.tostrService.success(`${this.todo.name} a été ajouté avec succès`);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.tostrService.success(`${todo.name} a été supprimé avec succès`);
    this.todoService.deleteTodo(todo);
  }
}
