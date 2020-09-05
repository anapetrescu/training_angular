import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  repeatPassword: string;
  passwordsNotTheSame: boolean;
  allFiledsNotCompleted: boolean;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.passwordsNotTheSame = false;
    this.allFiledsNotCompleted = false;
  }
  signUp() {
    this.init();
    if (this.isEmpty(this.email) || this.isEmpty(this.password) || this.isEmpty(this.repeatPassword)) {
      this.allFiledsNotCompleted = true;
    }
    if (this.password === this.repeatPassword) {
      const newUser = {
        email: this.email,
        password: this.password
      }
      this.authService.signUp(newUser).subscribe(response => {
        if(response) {
          this.email = "";
          this.password = "";
          this.repeatPassword = "";
        }
      })
    } else {
        this.passwordsNotTheSame = true;
    }
  }

  isEmpty(text): boolean {
    return (text === undefined || text === null || text === '');
  }
}
