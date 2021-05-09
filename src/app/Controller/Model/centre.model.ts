import {Parcours} from './parcours.model';
import {Etudiant} from './etudiant.model';

export class Centre {
  public  id: number ;
  public  ref: string ;
  public  libelle: string ;
  public  description: string;
  public  log: string;
  public  password: string;
  public  parcoursList = new Array<Parcours>();

}
