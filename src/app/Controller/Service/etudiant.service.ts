/* tslint:disable:typedef */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Etudiant} from '../model/etudiant.model';
import {Parcours} from '../model/parcours.model';
import {Centre} from '../model/centre.model';
import {Inscription} from '../model/inscription.model';




@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private _etudiant: Etudiant;
  private _etudiants: Array<Etudiant>;
  private _inscriptions: Array<Inscription>;
  private _index: number;
  private _parcours: Parcours;
  private _centre: Centre;
  private urlbase = 'http://localhost:8036';
  private url = '/learn/etudiant';
  private _etudiantslist: Array<Etudiant>;


  get etudiantslist(): Array<Etudiant> {
    if (this._etudiantslist == null){
      this._etudiantslist = new Array<Etudiant>();
    }
    return this._etudiantslist;
  }

  set etudiantslist(value: Array<Etudiant>) {
    this._etudiantslist = value;
  }

  public findEtudiantByNom(nom: string) {this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/nom/' + nom ).subscribe(
    data => {
      this._etudiantslist = data ;
      this.etudiant = null ;
    }, error => {
      console.log('erroro');
    }
  );
  }



  public update(index: number, etudiant: Etudiant) {
    this.etudiant = this.clone(etudiant);
    this._index = index;
  }
  public save(): void {

    this.http.post<number>('http://localhost:8036/learn/etudiant/', this.etudiant).subscribe(
      data => {
        if (data >= 0) {
          this.findAll();
          this._etudiant = null;
        }
      }, error => {
        console.log('error');
      }
    );
    this._etudiant = null;
  }

  get etudiants(): Array<Etudiant> {
    if (this._etudiants == null){
      this._etudiants = new Array<Etudiant>();
    }
    return this._etudiants;
  }

  set etudiants(value: Array<Etudiant>) {
    this._etudiants = value;
  }


  get inscriptions(): Array<Inscription> {
    if (this._inscriptions == null){
      this._inscriptions = new Array<Inscription>();
    }
    return this._inscriptions;
  }

  set inscriptions(value: Array<Inscription>) {
    this._inscriptions = value;
  }

  constructor(private http: HttpClient) { }
  public findAll(){
    this.http.get<Array<Etudiant>>( 'http://localhost:8036/learn/etudiant/').subscribe(
      data => {
        this.etudiants = data;
      }, error => {
        console.log(error);
      }
    );
  }

  get etudiant(): Etudiant {
    if (this._etudiant == null){
      this._etudiant = new Etudiant();
    }
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }


  get centre(): Centre {
    if (this._centre == null){
      this._centre = new Centre();
    }
    return this._centre;
  }

  set centre(value: Centre) {
    this._centre = value;
  }

  get parcours(): Parcours {
    if (this._parcours == null){
      this._parcours = new Parcours();
    }
    return this._parcours;
  }

  set parcours(value: Parcours) {
    this._parcours = value;
  }

  private clone(etudiant: Etudiant) {
    const myClone = new Etudiant();
    myClone.login = etudiant.login;
    myClone.password = etudiant.password;
    myClone.id = etudiant.id;
    myClone.parcours = etudiant.parcours;
    myClone.centre = etudiant.centre;
    return myClone;
  }

  private cloneParcours(parcours: Parcours){
    const myCloneParcours = new Parcours();
    myCloneParcours.id = parcours.id;
    myCloneParcours.code = parcours.code;
    myCloneParcours.dateCreation = parcours.dateCreation;
    myCloneParcours.libelle = parcours.libelle;
    myCloneParcours.numeroOrder = parcours.numeroOrder;
    myCloneParcours.datePublication = parcours.datePublication;
    myCloneParcours.description = parcours.description;

  }
  private cloneCentre(centre: Centre){
    const myCloneCentre = new Centre();
    myCloneCentre.id = centre.id;
    myCloneCentre.log = centre.log;
    myCloneCentre.libelle = centre.libelle;
    myCloneCentre.ref = centre.ref;
    myCloneCentre.password = centre.password;
    myCloneCentre.description = centre.description;

  }
}
