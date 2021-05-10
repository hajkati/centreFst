
import {Etudiant} from './etudiant.model';

export class Prof {
  public id: number;
  public numero: number;
  public nom: string;
  public prenom: string;
  public  etudiantList = new Array<Etudiant>();
}
