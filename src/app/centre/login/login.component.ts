import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../Controller/Model/etudiant.model';
import {LoginService} from '../../Controller/Service/login.service';

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


  get etudiant(): Etudiant {
    return this.loginService.etudiant;
  }


  public findEtudiant(username: string, password: string)
  {
    return this.loginService.findEtudiant(username,password);
  }


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

}
