import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Section} from '../../../Controller/Model/section.model';
import {Cours} from '../../../Controller/Model/cours.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  // tslint:disable-next-line:typedef
  public updateCours(index: number, cours: Cours){
    this.parcoursService.updateCours(index, cours);
  }
  get section(): Section {
    return this.parcoursService.section;
  }
  get cours(): Cours {
    return this.parcoursService.cours;
  }
  get parcoursList(): Array<Parcours> {
    return this.parcoursService.parcoursList;
  }
  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }
  get coursList(): Array<Cours> {
    return this.parcoursService.coursList;
  }
  // tslint:disable-next-line:typedef
  public deleteCours(cour: Cours){
    this.parcoursService.deleteCours(cour);
  }
  public savecours(): void{
    this.parcoursService.savecours();
  }

  afficheSecList(cour: Cours): void {
    this.parcoursService.affichelistSection(cour);
  }
  // tslint:disable-next-line:typedef
  init() {
    this.parcoursService.init();
  }
  public save(): void {
    this.parcoursService.save();
  }
  public AjoutSection(id: number): void {
    this.parcoursService.AjoutSection(id);
  }
  ngOnInit(): void {
  }
  open(content): void {
    this.modalService.open(content);
  }
// tslint:disable-next-line:typedef
  public validateSaveCours(){
    return  this.parcoursService.validateSaveCours();
  }
  // tslint:disable-next-line:typedef
  afficheCours(parcour: Parcours): void {
    this.parcoursService.afficheCours(parcour);
  }

}
