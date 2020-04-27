import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() userEvent = new EventEmitter<{name: string, pass: string}>();
  // @Output() signUpEvent = new EventEmitter<boolean>();

  userName=''
  password=''
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    // console.log("login called", this.password)
    // this.userEvent.emit(
    //   {
    //     name: this.userName,
    //     pass: this.password
    //   }
    // );
  }

  

}
