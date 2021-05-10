
import {Etudiant} from './etudiant.model';
import {ClassRoom} from './class-room.model';

export class Prof {
  public id: number;
  public numero: number;
  public nom: string;
  public prenom: string;
  public  etudiantList = new Array<Etudiant>();
  public  classRoomList = new Array<ClassRoom>();
}
