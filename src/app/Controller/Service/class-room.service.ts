import { Injectable } from '@angular/core';
import {ClassRoom} from '../Model/class-room.model';
import {SuperCategorieSection} from '../Model/super-categorie-section.model';
import {Prof} from '../Model/prof.model';
import {Parcours} from '../Model/parcours.model';
import {Cours} from '../Model/cours.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {

  constructor(private http: HttpClient) { }
  private _classRoom: ClassRoom;
  private _prof: Prof;
  private _classRoomList: Array<ClassRoom>;
  private _profList: Array<Prof>;



  get classRoom(): ClassRoom {
    if (this._classRoom == null){
      if (this._classRoom == null) {
        this._classRoom = new ClassRoom();
      }
    }
    return this._classRoom;
  }

  set classRoom(value: ClassRoom) {
    this._classRoom = value;
  }

  get classRoomList(): Array<ClassRoom> {
    if (this._classRoomList == null){
      this._classRoomList = new Array<ClassRoom>();
    }
    return this._classRoomList;
  }

  set classRoomList(value: Array<ClassRoom>) {
    this._classRoomList = value;
  }


  get prof(): Prof {
    if (this._prof == null){
      this._prof = new Prof();
    }
    return this._prof;
  }

  set prof(value: Prof) {
    this._prof = value;
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
  public findAllProf(): void {
    this.http.get< Array<Prof> >('http://localhost:8036/centre/prof/').subscribe(
      data => {
        this._profList = data ;
      }, error => {
        console.log('error');
      }
    );

  }
  public findAllClass(): void {
    this.http.get< Array<ClassRoom> >('http://localhost:8036/E-learning/classRoom/').subscribe(
      data => {
        this._classRoomList = data ;
      }, error => {
        console.log('error');
      }
    );

  }
  public afficheClass(prof: Prof): void {
    this.prof.id = prof.id;
    this.http.get<Array<ClassRoom>>('http://localhost:8036/E-learning/classRoom/Prof/id/' + prof.id ).subscribe(
      data => {
        this._classRoomList = data;
      }, error => {
        console.log('erroro');
      }
    );
  }
}
