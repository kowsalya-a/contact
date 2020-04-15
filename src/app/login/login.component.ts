import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginPage = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });  
  submitted: boolean;
  
  constructor( private navigate: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginPage.controls; }

  onLoginClick() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginPage.invalid) {
      return;
    }
      this.navigate.navigateByUrl('template')
    }
}
