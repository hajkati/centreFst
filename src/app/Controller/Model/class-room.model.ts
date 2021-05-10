import {Prof} from './prof.model';

export class ClassRoom {
  public  id: number ;
  public  libelle: string;
  public  description: number;
  public  responsable = new Prof();
}
