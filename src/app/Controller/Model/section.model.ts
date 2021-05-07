import { Cours } from './cours.model';
import {CategorieSection} from './categorie-section.model';
export class Section {
  public  id: number ;
  public  url: number ;
  public  content: number ;
  public code: string;
  public libelle: string;
  public contenu: string;
  public urlImage: string;
  public urlVideo: string;
  public urlImage2: string;
  public urlImage3: string;
  public questions: string;
  public indicationProf: string;
  public cours = new  Cours() ;
  public categorieSection = new  CategorieSection() ;
}

