import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from './services/cognito/cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'arborWalk';

  constructor(private router: Router,
              private cognitoService: CognitoService) {

  }

  public ngOnInit(): void {

  }
}
