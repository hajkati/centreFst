/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {EtudiantService} from '../../../Controller/Service/etudiant.service';
import {Centre} from '../../../Controller/Model/centre.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {ParcoursService} from '../../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Prof} from '../../../Controller/Model/prof.model';
import {EtatInscription} from '../../../Controller/Model/etat-inscription.model';
@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  constructor(private etudiantService: EtudiantService, private modalService: NgbModal) {
  }

  public delete(etudiants: Etudiant) {
    this.etudiantService.delete(etudiants);
  }

  public save() {
    this.etudiantService.save();
  }
  public update(index: number, etudiant: Etudiant) {
    this.etudiantService.update(index, etudiant);
  }
  public valider() {
    this.etudiantService.valider();
  }
  open(content): void {
    this.modalService.open(content);
  }

  ngOnInit(): void {
    this.etudiantService.findAll();
  }

  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get profList(): Array<Prof> {
    return this.etudiantService.prof;
  }
  get etudiants(): Array<Etudiant> {
    return this.etudiantService.etudiants;
  }
  get etatInscriptionList(): Array<EtatInscription> {
    return this.etudiantService.etatinscriptionslist;
  }
  get etudiantslist(): Array<Etudiant> {
    return this.etudiantService.etudiantslist;
  }

  get centre(): Centre {
    return this.etudiantService.centre;
  }

  get parcours(): Parcours {
    return this.etudiantService.parcours;
  }
  findAllEtat(): void {
    this.etudiantService.findAllEtat();
  }
  findAllProf(): void {
    this.etudiantService.findAllProf();
  }
  findByNom(name: string): void {
    this.etudiantService.findByNom(name);
  }
}
