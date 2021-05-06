import { Injectable } from '@angular/core';
import {Parcours} from '../model/parcours.model';
import { HttpClient } from '@angular/common/http';
import {Cours} from '../model/cours.model';
import {Section} from '../Model/section.model';
import {CategorieSection} from '../Model/categorie-section.model';
import {SuperCategorieSection} from '../Model/super-categorie-section.model';
import {Centre} from '../Model/centre.model';


@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private _parcours: Parcours;
  private _parcoursList: Array<Parcours>;
  private _cours: Cours;
  private _coursList: Array<Cours>;
  private _coursList2: Array<Cours>;
  private _section: Section;
  private _categoriesectionList: Array<CategorieSection>;
  private _categoriesection: CategorieSection;
  private _supercategoriesectionList: Array<SuperCategorieSection>;
  private _supercategoriesection: SuperCategorieSection;
  private _sectionList: Array<Section>;
  private _sectionListByLibelle: Array<Section>;
  private _centre: Centre;
  private _centreList: Array<Centre>;
  private _index: number;
  constructor(private http: HttpClient ) {  }
  // tslint:disable-next-line:typedef
  public updateParcours(index: number, parcours: Parcours) {
    this._parcours = this.clone(parcours);
    this._index = index;
  }
  // tslint:disable-next-line:typedef
  public updateCours(index: number, cours: Cours) {
    this._cours = this.clonecours(cours);
    this._index = index;
  }
  // tslint:disable-next-line:typedef
  public updateSection(index: number, section: Section) {
    this._section = this.clonesection(section);
    this._index = index;
  }
  public validateSaveParcours(): boolean{
    return this.parcours.code != null;
  }
  public validateSaveCours(): boolean{
    return this.cours.code != null;
  }
  public validateSaveSection(): boolean{
    return this.section.code != null;
  }
  public savecours(): void {
    this.http.put('http://localhost:8036/E-learning/cours/', this.cours).subscribe(
      data => {if (data > 0){
        console.log(' save cours');
      }}, eror => {
        console.log('error save cours');
      }
    );
    this.afficheCours(this.cours.parcours);
    this._cours = null ;
  }
  public AjoutSection(id: number): void {
    this.http.get<number>('http://localhost:8036/E-learning/cours/id/' + id).subscribe(
      data => {
        console.log(' save section');
      }
    );
  }
  public savesection(): void {
      this.http.put('http://localhost:8036/E-learning/section/', this.section).subscribe(
        data => {if (data >= 0){
          console.log('succes update section');
        }}, eror => {
          console.log('error update section');
        }
      );
      this._section = null;
      this.affichelistSection(this.section.cours);
  }
  public save(): void {
    if (this.parcours.id == null){
    this.http.post<number>('http://localhost:8036/E-learning/parcours/', this.parcours).subscribe(
      data => {
        if (data >= 0){
          /*this.parcoursList.push(this.clone(this.parcours));*/
          this.init();
          this._parcours = null ;
        }
      }, eror => {
        console.log('error save cours');
      }
    ); }else{
  this.http.put('http://localhost:8036/E-learning/parcours/', this.parcours).subscribe(
    data => {if (data >= 0){
      console.log('succes update parcours');
}}, eror => {
  console.log('error update parcours');
}
); }
    this.init();
    this._parcours = null ;
  }

  public init(): void {
    this.http.get< Array<Parcours> >('http://localhost:8036/E-learning/parcours/').subscribe(
      data => {
        this._parcoursList = data ;
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

  public findAllCours(): void {
    this.http.get< Array<Cours> >('http://localhost:8036/E-learning/cours/').subscribe(
      data => {
        this._coursList2 = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  public findAllSection(): void {
    this.http.get< Array<Section> >('http://localhost:8036/E-learning/section/').subscribe(
      data => {
        this._sectionListByLibelle = data ;
      }, error => {
        console.log('error');
      }
    );
    this._sectionList = null;
  }
  public findAllCategorieSection(): void {
    this.http.get< Array<CategorieSection> >('http://localhost:8036/E-learning/categoriesection/').subscribe(
      data => {
        this._categoriesectionList = data ;
      }, error => {
        console.log('error');
      }
    );

  }
  public findAllSuperCategorieSection(): void {
    this.http.get< Array<SuperCategorieSection> >('http://localhost:8036/E-learning/supercategoriesection/').subscribe(
      data => {
        this._supercategoriesectionList = data ;
      }, error => {
        console.log('error');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public deleteFromSectionview(sections: Section){
    const index = this._sectionList.findIndex(s => s.id === sections.id);
    if (index !== -1){
      this._sectionList.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteFromParcoursview(parcour: Parcours){
    const index = this._parcoursList.findIndex(p => p.id === parcour.id);
    if (index !== -1){
      this._parcoursList.splice(index, 1);
      this._sectionList = null;
      this._coursList = null;
    }
  }
  // tslint:disable-next-line:typedef
  public deleteFromCoursview(cour: Cours){
    const index = this._coursList.findIndex(c => c.id === cour.id);
    if (index !== -1){
      this._coursList.splice(index, 1);
      this._sectionList = null;
    }
  }
  // tslint:disable-next-line:typedef
  public deleteSection(sections: Section) {
    this.section.id = sections.id;
    this.http.delete<number>('http://localhost:8036/E-learning/section/id/' + sections.id).subscribe(
      data => {
        console.log('data' + data);
        this.deleteFromSectionview(sections);
      }, error => {
        console.log('error');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public deleteCours(cour: Cours){
    this.cours.id = cour.id;
    this.http.delete<number >('http://localhost:8036/E-learning/cours/id/' + cour.id ).subscribe(
      data => {
        this.deleteFromCoursview(cour);
      }, error => {
        console.log('error');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public deleteParcours(parcour: Parcours){
    this.parcours.id = parcour.id;
    this.http.delete<number>('http://localhost:8036/E-learning/parcours/id/' + parcour.id).subscribe(
      data => {
        this.deleteFromParcoursview(parcour);
      }, error => {
        console.log('error');
      }
    );

  }

  get categoriesectionList(): Array<CategorieSection> {
    if (this._categoriesectionList == null){
      this._categoriesectionList = new Array<CategorieSection>();
    }
    return this._categoriesectionList;
  }

  set categoriesectionList(value: Array<CategorieSection>) {
    this._categoriesectionList = value;
  }

  get supercategoriesectionList(): Array<SuperCategorieSection> {
    if (this._supercategoriesectionList == null){
      this._supercategoriesectionList = new Array<SuperCategorieSection>();
    }
    return this._supercategoriesectionList;
  }

  set supercategoriesectionList(value: Array<SuperCategorieSection>) {
    this._supercategoriesectionList = value;
  }

  get supercategoriesection(): SuperCategorieSection {
    if (this._supercategoriesection == null) {
      this._supercategoriesection = new SuperCategorieSection();
    }
    return this._supercategoriesection;
  }

  set supercategoriesection(value: SuperCategorieSection) {
    this._supercategoriesection = value;
  }

  get categoriesection(): CategorieSection {
    if (this._categoriesection == null) {
      this._categoriesection = new CategorieSection();
    }
    return this._categoriesection;
  }

  set categoriesection(value: CategorieSection) {
    this._categoriesection = value;
  }

  get centre(): Centre {
    if (this._centre == null) {
      this._centre = new Centre();
    }
    return this._centre;
  }

  set centre(value: Centre) {
    this._centre = value;
  }

  get sectionListByLibelle(): Array<Section> {
    if (this._sectionListByLibelle == null){
      this._sectionListByLibelle = new Array<Section>();
    }
    return this._sectionListByLibelle;
  }

  set sectionListByLibelle(value: Array<Section>) {
    this._sectionListByLibelle = value;
  }

  get section(): Section {
    if (this._section == null) {
      this._section = new Section();
    }
    return this._section;
  }

  get sectionList(): Array<Section> {
    if (this._sectionList == null){
      this._sectionList = new Array<Section>();
    }
    return this._sectionList;
  }

 get centreList(): Array<Centre> {
    return this._centreList;
  }

  set centreList(value: Array<Centre>) {
    if (this._centreList == null){
      this._centreList = new Array<Centre>();
    }
    this._centreList = value;
  }

  get cours(): Cours{
    if (this._cours == null){
      this._cours = new Cours();
    }
    return this._cours;
  }

  get coursList2(): Array<Cours> {
    if (this._coursList2 == null){
      this._coursList2 = new Array<Cours>() ;
    }
    return this._coursList2;
  }
  get coursList(): Array<Cours> {
    if (this._coursList == null){
      this._coursList = new Array<Cours>() ;
    }
    return this._coursList;
  }
  get parcours(): Parcours {
    if (this._parcours == null) {
      this._parcours = new Parcours();
    }
    return this._parcours;
  }

  get parcoursList(): Array<Parcours> {
    if (this._parcoursList == null ) {
      this._parcoursList = new Array<Parcours>();
    }
    return this._parcoursList;
  }

  public clone(parcours: Parcours): Parcours {
    const clone = new Parcours();
    clone.id = parcours.id;
    clone.code = parcours.code;
    clone.libelle = parcours.libelle;
    clone.numeroOrder = parcours.numeroOrder;
    clone.nombreCours = parcours.nombreCours;
    clone.description = parcours.description;
    clone.dateCreation = parcours.dateCreation;
    clone.datePublication = parcours.datePublication;
    clone.coursList = parcours.coursList;
    clone.centre = parcours.centre;
    return clone;
  }
  public clonecours(cours: Cours): Cours {
    const myClone = new  Cours();
    myClone.id = cours.id;
    myClone.code = cours.code;
    myClone.libelle = cours.libelle;
    myClone.numeroOrder = cours.numeroOrder;
    myClone.description = cours.description;
    myClone.image = cours.image;
    myClone.nombreLinkFinalise = cours.nombreLinkFinalise;
    myClone.nombreLinkEnCours = cours.nombreLinkEnCours;
    myClone.nombreSectionEnCours = cours.nombreSectionEnCours;
    myClone.nombreSectionFinalise = cours.nombreSectionFinalise;
    myClone.sectionList = cours.sectionList;
    myClone.parcours = cours.parcours;
    return myClone;
  }

  public clonesection(section: Section): Section{
    const myClone = new  Section();
    myClone.code = section.code;
    myClone.libelle = section.libelle;
    myClone.urlImage = section.urlImage;
    myClone.urlImage2 = section.urlImage2;
    myClone.urlImage3 = section.urlImage3;
    myClone.urlVideo = section.urlVideo;
    myClone.cours = section.cours;
    myClone.categorieSection = section.categorieSection;
    myClone.indicationProf = section.indicationProf;
    myClone.questions = section.questions;
    myClone.contenu = section.contenu;
    myClone.url = section.url;
    myClone.content = section.content;
    return myClone;
  }

  public afficheCours(parcour: Parcours): void {
    this.parcours.code = parcour.code;
    this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/parcours/code/' + parcour.code ).subscribe(
      data => {
        this._coursList = data;
        this._sectionList = null;
      }, error => {
        console.log('erroro');
      }
    );
  }

  affichelistSection(cour: Cours): void {
    this.cours.id = cour.id;
    this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/cours/id/' + cour.id ).subscribe(
      data => {
        this._sectionList = data;
      }, error => {
        console.log('erreuri');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findSectionByLibelle(libel: string) {
    this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/libelle/' + libel ).subscribe(
      data => {
        this._sectionListByLibelle = data;
        this._section = null ;
      }, error => {
        console.log('erroro');
      }
    );

  }
  // tslint:disable-next-line:typedef
  public findCoursByLibelle(libel: string) {
    this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/libelle/' + libel ).subscribe(
      data => {
        this._coursList2 = data ;
        this._cours = null ;
      }, error => {
        console.log('erroro');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findParcoursByLibelle(libel: string) {
    this.http.get<Array<Parcours>>('http://localhost:8036/E-learning/parcours/libelle/' + libel ).subscribe(
      data => {
        this._parcoursList = data ;
        this._parcours = null ;
      }, error => {
        console.log('erroro');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findCategorieSectionByLibelle(libel: string) {
    this.http.get<Array<CategorieSection>>('http://localhost:8036/E-learning/categoriesection/libelle/' + libel ).subscribe(
      data => {
        this._categoriesectionList = data ;
        this._categoriesection = null ;
      }, error => {
        console.log('erroro');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findSuperCategorieSectionByLibelle(libel: string) {
    this.http.get<Array<SuperCategorieSection>>('http://localhost:8036/E-learning/supercategoriesection/libelle/' + libel ).subscribe(
      data => {
        this._supercategoriesectionList = data ;
        this._supercategoriesection = null ;
      }, error => {
        console.log('erroro');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findCoursByid(id: number) {
    this.http.get<Array<Cours>>('http://localhost:8036/E-learning/cours/cours/id/' + id ).subscribe(
      data => {
        this._coursList = data ;
      }, error => {
        console.log('erroro');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findSectionByid(id: number) {
    this.http.get<Array<Section>>('http://localhost:8036/E-learning/section/id/' + id ).subscribe(
      data => {
        this._sectionList = data ;
      }, error => {
        console.log('erroro');
      }
    );
  }
}

