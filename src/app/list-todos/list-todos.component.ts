import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description : string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos: Todo[] = [];

  message: String ='';
    // new Todo(1, 'Learn some fucking JAVA!', false, new Date()),
    // new Todo(2, 'Learn springboot', false, new Date),
    // new Todo(1, 'Learn Angular', false, new Date()),
    // new Todo(1, 'Become a man, idiot!', false, new Date())
    // // {id:1, description:'Learn some fucking JAVA!'},
    // // {id:2, description:'Learn springboot'},
    // // {id:3, description:'Learn Angular'},
    // // {id:4, description:'Become a man'},
  
  // todo = {
  //   id:1,
  //   description: 'Learn some fucking JAVA!!!'
  // }

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) {}

  ngOnInit() {  
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retiveAllTodos('Gonza').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any){
    console.log(`delete todo ${id} `)
    this.todoService.deleteTodo('Gonza', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }
}
