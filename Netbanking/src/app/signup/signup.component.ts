import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // @Output() user = new EventEmitter<{name: string, password: string}>();

  userName;
  password;
  conPass;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }
  signup() {
    if(this.password == this.conPass) {
      console.log("signup successful");
      this.userService.setUser(this.userName, this.password)
    } else{
      alert('Passwords do not match')
    }
  }

}
