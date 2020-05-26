import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(){

    init_plugins();
  }

  ingresar(){

    console.log('INGRESAR');

    this.router.navigate(['/dashboard']);
  }

}
