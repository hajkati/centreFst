import {Centre} from './centre.model';
import {Parcours} from './parcours.model';
import {QuizEtudiant} from './quiz-etudiant.model';
export class Etudiant {
  public id: number;
  public ref: string;
  public nom: string;
  public prenom: string;
  public age: number;
  public  login: string;
  public ville: string;
  public password: string;
  public parcours = new Parcours();
  public centre = new Centre();
  public quizEtudiant = new Array<QuizEtudiant>();
  public etat: string;
}
