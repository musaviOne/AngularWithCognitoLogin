import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService, IUser } from '../services/cognito/cognito.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit{

  loading: boolean;
  user: IUser;
  isAuthenticated: boolean;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated()
      .then((success: boolean) => {
        this.isAuthenticated = success;
      });
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/profile']);
      }).catch(() => {
      this.loading = false;
    });
  }

  public signOut(): void {
    this.cognitoService.signOut()
      .then(() => {
        this.router.navigate(['/signIn']);
      });
  }
}
