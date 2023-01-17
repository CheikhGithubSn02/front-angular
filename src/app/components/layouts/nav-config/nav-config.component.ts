import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-config',
  templateUrl: './nav-config.component.html',
  styleUrls: ['./nav-config.component.scss']
})
export class NavConfigComponent {
  loginForm!: FormGroup;
  email!: any;
  password!: any;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  get emailField(): any {
    
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    
    return this.loginForm.get('password');
  }

  loginFormSubmit(): void {
    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
    //console.log(this.loginForm.value);
    // Call Api
    console.log(this.email, this.password);
  }
}

