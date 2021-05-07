import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../Model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _etudiant: Etudiant;

  get etudiant(): Etudiant {
    if(this._etudiant == null)
    {
      this._etudiant = new Etudiant();
    }
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  public findEtudiant(username: string, password: string)
  {
    this.etudiant = null;
    this.http.get<Etudiant>('http://localhost:8036/learn/etudiant/login/' + username + '/password/' + password).subscribe(
      data => {
        this.etudiant = data;
        console.log(this.etudiant);
      }
    );
  }
  constructor(private  http: HttpClient) { }
}
