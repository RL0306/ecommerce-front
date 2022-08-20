import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Form submitted");
  }

  log(x : any){
    console.log(x);
  }

}
