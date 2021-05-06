/* tslint:disable:typedef */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parcours} from '../model/parcours.model';
import {Centre} from '../model/centre.model';
import {Etudiant} from '../model/etudiant.model';
import {Inscription} from '../model/inscription.model';
import {EtatInscription} from '../model/etat-inscription.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private _etudiant: Etudiant;
  private _parcours: Parcours;
  private _centre: Centre;
  private _inscriptions: Array<Inscription>;
  private _isncription: Inscription;
  private _etatInscription: EtatInscription;
  private _index: number;
  private _etudiants: Array<Etudiant>;
  private _inscriptionslist: Array<Inscription>;


  get inscriptionslist(): Array<Inscription> {
    if (this._inscriptionslist == null){
      this._inscriptionslist = new Array<Inscription>();
    }
    return this._inscriptionslist;
  }

  set inscriptionslist(value: Array<Inscription>) {
    this._inscriptionslist = value;
  }
  public findByNumeroInscription(numeroInscription: number) {this.http.get<Array<Inscription>>('http://localhost:8036/learn/inscription/numeroInscription/13' + numeroInscription ).subscribe(
    data => {
      this._inscriptionslist = data ;
      this.isncription = null ;
    }, error => {
      console.log('erroro');
    }
  );
  }

  public update(index: number, inscription: Inscription) {
    this.isncription = this.cloneinscription(inscription);
    this._index = index;
  }
  public save(): void{
    if (this.isncription.id == null){
      this.http.post<number>('http://localhost:8036/learn/inscription/', this.isncription).subscribe(
        data => {
          if (data >= 0) {
            this.findAll();
            this.isncription = null;
          }
        }, error => {
          console.log('error');
        }
      );
      this.isncription = null;
    }
  }


  public findAll(){
    this.http.get<Array<Inscription>>( 'http://localhost:8036/learn/inscription/').subscribe(
      data => {
        this.inscriptions = data;
      }, error => {
        console.log(error);
      }
    );
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

  get etatInscription(): EtatInscription {
    if (this._etatInscription == null){
      this._etatInscription = new EtatInscription();
    }
    return this._etatInscription;
  }

  set etatInscription(value: EtatInscription) {
    this._etatInscription = value;
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

  get parcours(): Parcours {
    if (this._parcours == null){
      this._parcours = new Parcours();
    }
    return this._parcours;
  }

  set parcours(value: Parcours) {
    this._parcours = value;
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

  get inscriptions(): Array<Inscription> {
    if (this._inscriptions == null){
      this._inscriptions = new Array<Inscription>();
    }
    return this._inscriptions;
  }

  set inscriptions(value: Array<Inscription>) {
    this._inscriptions = value;
  }

  get isncription(): Inscription {
    if (this._isncription == null){
      this._isncription = new Inscription();
    }
    return this._isncription;
  }

  set isncription(value: Inscription) {
    this._isncription = value;
  }

  constructor(private http: HttpClient ) { }

  private cloneinscription(inscription: Inscription){
    const myCloneinscription = new Inscription();
    myCloneinscription.id = inscription.id;
    myCloneinscription.numeroInscription = inscription.numeroInscription;
    myCloneinscription.datefininscription = inscription.datefininscription;
    myCloneinscription.datedebutinscription = inscription.datedebutinscription;
    myCloneinscription.centre = inscription.centre;
    myCloneinscription.etudiant = inscription.etudiant;
    myCloneinscription.parcours = inscription.parcours;
    myCloneinscription.etatInscription = inscription.etatInscription;
    return myCloneinscription;

  }
  private cloneetatinscription(etatInscription: EtatInscription){
    const myCloneetat = new EtatInscription();
    myCloneetat.id = etatInscription.id;
    myCloneetat.ref = etatInscription.ref;
    myCloneetat.libelle = etatInscription.libelle;
  }

  private clone(etudiant: Etudiant) {
    const myClone = new Etudiant();
    myClone.login = etudiant.login;
    myClone.password = etudiant.password;
    myClone.id = etudiant.id;
    myClone.parcours = etudiant.parcours;
    myClone.centre = etudiant.centre;
    myClone.ville = etudiant.ville;

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
