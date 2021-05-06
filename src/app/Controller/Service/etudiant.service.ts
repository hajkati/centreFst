/* tslint:disable:typedef */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Etudiant} from '../model/etudiant.model';
import {Parcours} from '../model/parcours.model';
import {Centre} from '../model/centre.model';
import {Inscription} from '../model/inscription.model';
import {Cours} from '../Model/cours.model';




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
  private _etudiantupdate: Etudiant;

  private _etudiantslist: Array<Etudiant>;


  get etudiantupdate(): Etudiant {
    if (this._etudiantupdate == null){
      this._etudiantupdate = new Etudiant();
    }
    return this._etudiantupdate;
  }

  set etudiantupdate(value: Etudiant) {
    this._etudiantupdate = value;
  }

  public deleteEtudiant(etudiants: Etudiant){
    const index = this._etudiants.findIndex(s => s.ref === etudiants.ref);
    if (index !== -1){
      this._etudiants.splice(index, 1);
    }
  }
  public delete(etudiants: Etudiant){
    this.etudiant.ref = etudiants.ref;
    this.http.delete<number >('http://localhost:8039/Meryam/etudiant/ref/' + etudiants.ref ).subscribe(
      data => {
        this.deleteEtudiant(etudiants);
      }, error => {
        console.log('error');
      }
    );

  }

  get etudiantslist(): Array<Etudiant> {
    if (this._etudiantslist == null) {
      this._etudiantslist = new Array<Etudiant>();
    }
    return this._etudiantslist;
  }

  set etudiantslist(value: Array<Etudiant>) {
    this._etudiantslist = value;
  }



  public save(): void {

    this.http.post<number>('http://localhost:8039/Meryam/etudiant/', this.etudiant).subscribe(
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

  public update(index: number, etudiant: Etudiant) {
    this.etudiant = this.clone(etudiant);
    this._index = index;
  }
  public valider(): void {
    this.etudiantupdate.id = this.etudiant.id;
    this.etudiantupdate.nom = this.etudiant.nom;
    this.etudiantupdate.login = this.etudiant.login;
    this.etudiantupdate.prenom = this.etudiant.prenom;
    this.etudiantupdate.password = this.etudiant.password;
    this.etudiantupdate.age = this.etudiant.age;
    this.etudiantupdate.ref = this.etudiant.ref;
    this.etudiantupdate.ville = this.etudiant.ville;
    this.etudiantupdate.parcours = this.etudiant.parcours;
    this.etudiantupdate.etat = 'valider';
    this.http.put('http://localhost:8039/Meryam/etudiant/', this.etudiantupdate).subscribe(
      data => {
        console.log('succes');
      }
    );
    console.log('er');

  }
  get etudiants(): Array<Etudiant> {
    if (this._etudiants == null){this._etudiants = new Array<Etudiant>();
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
    this.http.get<Array<Etudiant>>( 'http://localhost:8039/Meryam/etudiant/').subscribe(
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
