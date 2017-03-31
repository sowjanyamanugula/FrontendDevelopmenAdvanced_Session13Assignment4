import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  
  template: `<h1>Users Component</h1>
             <ul *ngFor="let user of userList">
                <li (click)="onSelect(user)">{{user.name}}</li>
              </ul>`,
    
})
export class UsersComponent  {
 constructor(private router:Router){}
   userList: any = [
            {name: "Avnesh Shakya",id: 1,  profession:"Employee"},
            {name: "Adam", id: 2, profession: "Employee"},
            {name: "Eve", id: 3, profession: "Employee"},
            {name: "Mohan", id: 4, profession: "Employee"},
            {name: "Sohan", id: 5, profession: "Employee"},
            ]
   onSelect(user){
       this.router.navigate(['/users',user.id])
   }

  }



