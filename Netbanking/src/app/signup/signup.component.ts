import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() user = new EventEmitter<{name: string, password: string}>();

  userName=''
  password=''
  conPass=''
  constructor() { console.log('signup component')}

  ngOnInit(): void {
  }
  signup() {
    if(this.password == this.conPass) {
      console.log("signup successful");
      this.user.emit({
      name : this.userName,
      password : this.password
    })
    } else{
      alert('Passwords do not match')
    }
  }

}
