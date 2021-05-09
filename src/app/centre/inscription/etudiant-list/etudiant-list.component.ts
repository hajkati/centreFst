/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {EtudiantService} from '../../../Controller/Service/etudiant.service';
import {Centre} from '../../../Controller/Model/centre.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Prof} from "../../../Controller/Model/prof.model";
import {ParcoursService} from "../../../Controller/Service/parcours.service";
import { EtatInscription } from 'src/app/Controller/Model/etat-inscription.model';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {


  constructor(private etudiantService: EtudiantService , private modalService: NgbModal ) { }

  public delete(etudiants: Etudiant){
    this.etudiantService.delete(etudiants);
  }
  public save(){
    this.etudiantService.save();
  }

  public valider(etudiant: Etudiant) {
    this.etudiantService.valider(etudiant);
  }
  ngOnInit(): void {
    this.etudiantService.findAll();
  }
  open(content): void {
    this.modalService.open(content);
  }
  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }
  get profList(): Array<Prof> {
    return this.etudiantService.profList;
  }
  get etudiantslist(): Array<Etudiant> {
    return this.etudiantService.etudiantslist;
  }
  get centrelist(): Array<Centre> {
    return this.etudiantService.centreList;
  }

  get etatlist(): Array<EtatInscription> {
    return this.etudiantService.etatlist;
  }
  get centre(): Centre{
    return this.etudiantService.centre;
  }
  get parcours(): Parcours{
    return this.etudiantService.parcours;
  }
  findByNom(name: string): void {
    this.etudiantService.findByNom(name);
  }
  findAllProf() {
    this.etudiantService.findAllProf();
  }
  findAllCentre() {
    this.etudiantService.findAllCentre();
  }
  findAllEtat(){
    this.etudiantService.findAllEtat();
  }
}
