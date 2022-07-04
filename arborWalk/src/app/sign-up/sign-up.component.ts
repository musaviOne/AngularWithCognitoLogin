import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../services/cognito/cognito.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;
  showPassword = false;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
  }

  public signUp(): void {
    this.loading = true;
    this.user.email = this.user.email;
    this.cognitoService.signUp(this.user)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      }).catch(() => {
        this.loading = false;
    });
  }

  public confirmSignUp(): void {
      this.loading = true;
      this.cognitoService.confirmSignUp(this.user)
        .then(() => {
          this.router.navigate(['/signIn']);
        }).catch(() => {
          this.loading = false;
        });
  }

  hidePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
