import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  userDoesNotExists: boolean;
  allFiledsNotCompleted: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.allFiledsNotCompleted = false;
    this.userDoesNotExists = false;
  }

  signin() {
    this.init();
    if(this.isEmpty(this.email) && this.isEmpty(this.password)) {
      this.allFiledsNotCompleted = true;
    } else {
      const user = {
        email: this.email,
        password: this.password
      }
      this.authService.signIn(user).subscribe(user => {
        if(user.length <= 0) {
          this.userDoesNotExists = true;
        } else {
          localStorage.setItem("user_id", user[0].id)
          this.router.navigate(['/feed']);
        }
      })
    }
  }

  isEmpty(text): boolean {
      return (text === undefined || text === null || text === '');
  }

}
