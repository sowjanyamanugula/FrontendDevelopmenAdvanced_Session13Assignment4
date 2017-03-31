import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Routing App</h1>
             <nav>
                <a routerLink="/users" routerLinkActive="active">Users</a>
                <a routerLink="/department" routerLinkActive="active">Departments</a>
             </nav>
             <router-outlet></router-outlet>`,
    
})
export class AppComponent  {
 
   
  }



