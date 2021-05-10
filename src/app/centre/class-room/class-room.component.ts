import { Component, OnInit } from '@angular/core';
import {ClassRoom} from '../../Controller/Model/class-room.model';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Prof} from '../../Controller/Model/prof.model';
import {Parcours} from '../../Controller/Model/parcours.model';
import {ClassRoomService} from '../../Controller/Service/class-room.service';
import {EtudiantClassRoom} from '../../Controller/Model/etudiant-class-room.model';
import {QuizClassRoom} from '../../Controller/Model/quiz-class-room.model';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {

  constructor(private classRoomService: ClassRoomService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.classRoomService.findAllProf();
  }
  get etudiantClassRoomList(): Array<EtudiantClassRoom> {
    return this.classRoomService.etudiantClassRoomList;
  }
  get quizClassRoomList(): Array<QuizClassRoom> {
    return this.classRoomService.quizClassRoomList;
  }
  get etudiantClassRoom(): EtudiantClassRoom {
    return this.classRoomService.etudiantClassRoom;
  }
  get quizClassRoom(): QuizClassRoom {
    return this.classRoomService.quizClassRoom;
  }
  get classRoomList(): Array<ClassRoom> {
    return this.classRoomService.classRoomList;
  }
  get profList(): Array<Prof> {
    return this.classRoomService.profList;
  }
  open(content): void {
    this.modalService.open(content,{size:'lg'});
  }
  // tslint:disable-next-line:typedef
  afficheClass(prof: Prof): void {
    this.classRoomService.afficheClass(prof);
  }
  afficheQuiz(classRoom1: ClassRoom): void {
    this.classRoomService.afficheQuiz(classRoom1);
  }
  afficheEtudiant(classRoom1: ClassRoom): void {
    this.classRoomService.afficheEtudiant(classRoom1);
  }
}
