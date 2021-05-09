/* tslint:disable:typedef */
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Etudiant} from '../model/etudiant.model';
import {Parcours} from '../model/parcours.model';
import {Centre} from '../model/centre.model';
import {Inscription} from '../model/inscription.model';
import {Cours} from '../Model/cours.model';
import {Prof} from '../Model/prof.model';
import { EtatInscription } from '../Model/etat-inscription.model';




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
  private _profList: Array<Prof>;
  private _etatlist: Array<EtatInscription>;
  private _centreList: Array<Centre>;
  private _etudiantslist: Array<Etudiant>;
  private _parcourslist: Array<Parcours>;



  get parcourslist(): Array<Parcours> {
    if (this._parcourslist == null){this._parcourslist = new Array<Parcours>();
    }
    return this._parcourslist;
  }

  set parcourslist(value: Array<Parcours>) {
    this._parcourslist = value;
  }

  get etatlist(): Array<EtatInscription> {
    if (this._etatlist == null){this._etatlist = new Array<EtatInscription>();
    }
    return this._etatlist;
  }

  set etatlist(value: Array<EtatInscription>) {
    this._etatlist = value;
  }

  get centreList(): Array<Centre> {
    if (this._centreList == null){this._centreList = new Array<Centre>();
    }
    return this._centreList;
  }

  set centreList(value: Array<Centre>) {
    this._centreList = value;
  }


  public findAllProf(): void {
    this.http.get< Array<Prof> >('http://localhost:8036/centre/prof/').subscribe(
      data => {
        this._profList = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  public findAllCentre(): void {
    this.http.get< Array<Centre> >('http://localhost:8036/learn/centre/').subscribe(
      data => {
        this._centreList = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  public findAllParcours(): void {
    this.http.get< Array<Parcours> >('http://localhost:8036/E-learning/parcours/').subscribe(
      data => {
        this._parcourslist = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  public findAllEtat(): void {
    this.http.get< Array<EtatInscription> >('http://localhost:8036/learn/etatInscription/').subscribe(
      data => {
        this._etatlist = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  get profList(): Array<Prof> {
    if (this._profList == null){
      this._profList = new Array<Prof>();
    }
    return this._profList;
  }

  set profList(value: Array<Prof>) {
    this._profList = value;
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
    this.http.delete<number>('http://localhost:8036/learn/etudiant/ref/' + etudiants.ref ).subscribe(
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
      data => {
        console.log('oki');
      }
    );
    console.log('error');

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
