import { Component, OnInit } from '@angular/core';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Section} from '../../../Controller/Model/section.model';
import {Cours} from '../../../Controller/Model/cours.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {CategorieSection} from '../../../Controller/Model/categorie-section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  // tslint:disable-next-line:typedef
  public deleteSection(sections: Section){
    this.parcoursService.deleteSection(sections);
  }
  // tslint:disable-next-line:typedef
  findAllCategorieSection() {
    this.parcoursService.findAllCategorieSection();
  }
  // tslint:disable-next-line:typedef
  findSectionByid(id: number) {
    this.parcoursService.findSectionByid(id);
  }
  // tslint:disable-next-line:typedef
  findAllCours() {
    this.parcoursService.findAllCours();
  }
  get section(): Section {
    return this.parcoursService.section;
  }
  get categoriesection(): CategorieSection {
    return this.parcoursService.categoriesection;
  }
  get sectionList(): Array<Section> {
    return this.parcoursService.sectionList;
  }
  get categoriesectionList(): Array<CategorieSection> {
    return this.parcoursService.categoriesectionList;
  }
  // tslint:disable-next-line:typedef
  public updateSection(index: number, section: Section){
    this.parcoursService.updateSection(index, section);
  }
  // tslint:disable-next-line:typedef
  public validateSaveSection(){
    return  this.parcoursService.validateSaveSection();
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
  get parcours(): Parcours {
    return this.parcoursService.parcours;
  }
  get coursList(): Array<Cours> {
    return this.parcoursService.coursList;
  }
  ngOnInit(): void {
  }
  open(content): void {
    this.modalService.open(content);
  }

}
