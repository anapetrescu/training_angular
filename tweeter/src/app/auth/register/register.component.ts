import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.component.scss']
})
export class RegisterComponent {
  email: String;
  password: String;
  repeatPassword: String;
  constructor(
    private authService: AuthService
  ) { }

  signUp() {
    if(this.password === this.repeatPassword) {
      const newUser = {
        email: this.email,
        password: this.password
      };
      this.authService.signUp(newUser).subscribe(response => {
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
      })
    }
  }
}
