import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos = [
    {id:1, description:'Learn some fucking JAVA!'},
    {id:2, description:'Learn springboot'},
    {id:3, description:'Learn Angular'},
    {id:4, description:'Become a man'},
  ]
  // todo = {
  //   id:1,
  //   description: 'Learn some fucking JAVA!!!'
  // }

  constructor() {}

  ngOnInit() {
      
  }
}
