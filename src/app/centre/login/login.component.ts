import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = document.getElementById('username');
  public pass = document.getElementById('password');
  public username(){
      document.getElementById('username').style.visibility = 'hidden';
  }
  public password(){
      document.getElementById('password').style.visibility = 'hidden';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
