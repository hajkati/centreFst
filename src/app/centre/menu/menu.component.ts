import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../Controller/Service/login.service';
import {Etudiant} from '../../Controller/Model/etudiant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  get etudiant(): Etudiant {
    return this.loginService.etudiant;
  }

  public findEtudiant(username: string, password: string)
  {
    return this.loginService.findEtudiant(username,password);
  }

  ngOnInit(): void {
    this.loginService.etudiant;
  }

}
