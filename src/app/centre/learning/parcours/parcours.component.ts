import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {Cours} from '../../../Controller/Model/cours.model';
import {Section} from '../../../Controller/Model/section.model';
import {Centre} from '../../../Controller/Model/centre.model';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  open(content): void {
    this.modalService.open(content);
  }
  // tslint:disable-next-line:typedef
  public updateParcours(index: number, parcours: Parcours){
    this.parcoursService.updateParcours(index, parcours);
  }
  // tslint:disable-next-line:typedef
  public validateSaveParcours(){
    return  this.parcoursService.validateSaveParcours();
  }
  // tslint:disable-next-line:typedef
  public deleteSection(sections: Section){
    this.parcoursService.deleteSection(sections);
  }
  get section(): Section {
    return this.parcoursService.section;
  }
  get sectionList(): Array<Section> {
    return this.parcoursService.sectionList;
  }
  public savesection(): void{
    this.parcoursService.savesection();
  }
  get cours(): Cours {
    return this.parcoursService.cours;
  }
  get parcoursList(): Array<Parcours> {
    return this.parcoursService.parcoursList;
  }
  get centreList(): Array<Centre> {
    return this.parcoursService.centreList;
  }  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }
  get coursList(): Array<Cours> {
    return this.parcoursService.coursList;
  }
  // tslint:disable-next-line:typedef
  public deleteCours(cour: Cours){
    this.parcoursService.deleteCours(cour);
  }
  afficheSecList(cour: Cours): void {
    this.parcoursService.affichelistSection(cour);
  }
  // tslint:disable-next-line:typedef
  public deleteParcours(parcour: Parcours){
    this.parcoursService.deleteParcours(parcour);
  }
  // tslint:disable-next-line:typedef
  findAllCentre() {
    this.parcoursService.findAllCentre();
  }
  public save(): void {
    this.parcoursService.save();
  }
  public UpdateParcours(): void {
    this.parcoursService.UpdateParcours();
  }

  ngOnInit(): void {
    this.parcoursService.init();
  }


  // tslint:disable-next-line:typedef
  afficheCours(parcour: Parcours): void {
    this.parcoursService.afficheCours(parcour);
  }
}
