
import { Component } from '@angular/core';

     @Component({
      selector: 'app-ToDoList',
      templateUrl: './todolist.component.html',
      styleUrls: ['./todolist.component.css']
     })
     export class ToDoListComponent {
       tasks: string [] = ["Coffee", "Breakfast", "Tea"];
       task: string | undefined;

    
      constructor() {}
     addTask(){
          console.log(this.task);
     }
     }