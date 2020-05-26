import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

declare function init_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private f: FormBuilder,
              private authservice: AuthService,
              private router: Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {

    init_plugins();

    this.form = this.f.group({
      username: [''],
      password: ['']

    });
  }

  onSubmit() {
    console.log('VALUE FORM', this.form.value);

    this.authservice.login(this.form.value).subscribe( res=> {
      res
      console.log('res');
      this.router.navigate(['/dashboard'])

    });

  }
}
