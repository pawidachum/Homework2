
import { Component } from '@angular/core';

     @Component({
      selector: 'app-ToDoList',
      templateUrl: './todolist.component.html',
      styleUrls: ['./todolist.component.css']
     })
     export class ToDoListComponent {
       tasks: string [] = [];
       task!: string;

    
      constructor() {}
     addTask(){
         this.tasks.push(this.task);
     }
     }