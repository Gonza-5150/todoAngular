import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number = 0
  todo: Todo = new Todo(this.id, '', false, new Date());
  constructor (
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.todo = new Todo(1, "", false, new Date());
      this.todoService.retriveTodo('Gonza', this.id)
      .subscribe (
        data => this.todo = data
      )
  }

  saveTodo(){}

}
