import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>You selected user with id={{UserId}}</h1>
                 `,
    
})
export class UserDetailsComponent  implements OnInit{
       public UserId;
       constructor(private route:ActivatedRoute){}
       ngOnInit(){
          
           let id=this.route.snapshot.params['id'];
           this.UserId=id;
       }
  }



