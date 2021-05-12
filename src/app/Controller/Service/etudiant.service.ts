/* tslint:disable:typedef */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Etudiant} from '../model/etudiant.model';
import {Parcours} from '../model/parcours.model';
import {Centre} from '../model/centre.model';
import {Inscription} from '../model/inscription.model';
import {Cours} from '../Model/cours.model';
import {EtatInscription} from '../Model/etat-inscription.model';
import {Prof} from '../Model/prof.model';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private _etudiant: Etudiant;
  private _etudiants: Array<Etudiant>;
  private _prof: Array<Prof>;
  private _inscriptions: Array<Inscription>;
  private _etatinscriptionslist: Array<EtatInscription>;
  private _index: number;
  private _parcours: Parcours;
  private _centre: Centre;
  private _etudiantupdate: Etudiant;

  private _etudiantslist: Array<Etudiant>;


  get prof(): Array<Prof> {
    if (this._prof == null){
      this._prof = new Array<Prof>();
    }
    return this._prof;
  }

  set prof(value: Array<Prof>) {
    this._prof = value;
  }

  get etatinscriptionslist(): Array<EtatInscription> {
    if (this._etatinscriptionslist == null){
      this._etatinscriptionslist = new Array<EtatInscription>();
    }
    return this._etatinscriptionslist;
  }

  set etatinscriptionslist(value: Array<EtatInscription>) {
    this._etatinscriptionslist = value;
  }

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
    const index = this._etudiants.findIndex(c => c.ref === c.ref);
    if (index !== -1){
      this._etudiants.splice(index, 1);
      this._etudiants = null;
    }
  }
  public delete(etudiants: Etudiant){
    this.etudiant.ref = etudiants.ref;
    this.http.delete<number >('http://localhost:8036/learn/etudiant/ref/' + etudiants.ref ).subscribe(
      data => {
        console.log('data' + data);
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

  public findByNom(name: string) {
    this.http.get<Array<Etudiant>>('http://localhost:8036/learn/etudiant/nom/' + name ).subscribe(
      data => {
        this._etudiants = data ;
        this._etudiant = null ;
      }, error => {
        console.log('erroro');
      }
    );
  }

  public save(): void {
    this.http.post<number>('http://localhost:8036/learn/etudiant/', this.etudiant).subscribe(
      data => {
        if (data >= 0) {
          this.findAll();
          this._etudiant = null;
        }
      }, error => {
        console.log('la fonction ne fonctionne pas');
      }
    );
    this._etudiant = null;
  }


  public update(index: number, etudiant: Etudiant) {
    this.etudiant = this.clone(etudiant);
    this._index = index;
  }
  public valider(): void {
    this.http.put('http://localhost:8036/learn/etudiant/', this.etudiant).subscribe(
      data =>  {if (data >= 0){
        this.findAll();
        console.log('succes update section');
      }}, eror => {
        console.log('error update section');
      }
    );
    this._etudiant = null;
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
    this.http.get<Array<Etudiant>>( 'http://localhost:8036/learn/etudiant/').subscribe(
      data => {
        this.etudiants = data;
      }, error => {
        console.log(error);
      }
    );
  }
  public findAllProf(){
    this.http.get<Array<Prof>>( 'http://localhost:8036/centre/prof/').subscribe(
      data => {
        this.prof = data;
      }, error => {
        console.log(error);
      }
    );
  }
  public findAllEtat(){
    this.http.get<Array<EtatInscription>>( 'http://localhost:8036/learn/etatInscription/').subscribe(
      data => {
        this.etatinscriptionslist = data;
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
    myClone.prof = etudiant.prof;
    myClone.etatInscription = etudiant.etatInscription;
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
