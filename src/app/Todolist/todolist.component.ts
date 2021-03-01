
import { Component } from '@angular/core';

     @Component({
      selector: 'app-ToDoList',
      templateUrl: './todolist.component.html',
      styleUrls: ['./todolist.component.css']
     })
     export class ToDoListComponent {
       tasks: string [] = [];
       task!: string;
          i!: number;

    
      constructor() {}
     addTask(){
         this.tasks.push(this.task);
     }
     deleteTask(i: number){
          delete this.tasks[i];
     }
     }