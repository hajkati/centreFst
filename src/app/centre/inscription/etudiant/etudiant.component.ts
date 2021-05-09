import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../../../Controller/Service/etudiant.service';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {Parcours} from '../../../Controller/Model/parcours.model';
import {Centre} from '../../../Controller/Model/centre.model';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private etudiantService: EtudiantService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.etudiantService.save();
  }
  get etudiant(): Etudiant {
    return this.etudiantService.etudiant;
  }
  get parcours(): Parcours{
    return this.etudiantService.etudiant.parcours;
  }
  get centre(): Centre{
    return this.etudiantService.etudiant.parcours.centre;
  }
}
