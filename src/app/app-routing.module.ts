import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ParcoursComponent} from './centre/learning/parcours/parcours.component';
import {PageNotFoundComponent} from './centre/page-not-found/page-not-found.component';
import {CentreComponent} from './centre/centre.component';
import {LearningComponent} from './centre/learning/learning.component';
import {EtatInscription} from './Controller/Model/etat-inscription.model';
import {EtudiantComponent} from './centre/inscription/etudiant/etudiant.component';
import {QuestionQuizComponent} from './centre/quizzes/question-quiz/question-quiz.component';
import {QuizCreateComponent} from './centre/quizzes/quiz-create/quiz-create.component';

import {ParcoursListComponent} from './centre/learning/parcours-list/parcours-list.component';
import {CoursListComponent} from './centre/learning/cours-list/cours-list.component';
import {SectionListComponent} from './centre/learning/section-list/section-list.component';
import {CategorieSectionListComponent} from './centre/learning/categorie-section-list/categorie-section-list.component';
import {SuperCategorieSectionListComponent} from './centre/learning/super-categorie-section-list/super-categorie-section-list.component';

import {EtudiantListComponent} from './centre/inscription/etudiant-list/etudiant-list.component';
import {InscriptionListComponent} from './centre/inscription/inscription-list/inscription-list.component';
import {QuizListComponent} from './centre/quizzes/quiz-list/quiz-list.component';
import {LoginComponent} from './centre/login/login.component';
import {QuizPreviewComponent} from './centre/quizzes/quiz-preview/quiz-preview.component';

// tslint:disable-next-line:max-line-length
export const components = [LearningComponent, ParcoursListComponent , CoursListComponent, SectionListComponent, CategorieSectionListComponent, SuperCategorieSectionListComponent ,  InscriptionListComponent , EtudiantComponent , EtudiantListComponent , QuestionQuizComponent , QuizCreateComponent , QuizListComponent , QuizPreviewComponent ,  LoginComponent  ];
const routes: Routes = [
  {path: '' , component: PageNotFoundComponent},
  {path: 'login' , component: components[13]},
  {path: 'parcours' , component: components[0]},
  {path: 'parcours-list' , component: components[1]},
  {path: 'cours-list' , component: components[2]},
  {path: 'section-list' , component: components[3]},
  {path: 'categoriesection-list' , component: components[4]},
  {path: 'supercategoriesection-list' , component: components[5]},
  {path: 'inscription-list' , component: components[6]},
  {path: 'etudiant' , component: components[7]},
  {path: 'etudiant-list' , component: components[8]},
  {path: 'quiz' , component: components[9]},
  {path: 'quiz-create' , component: components[10]},
  {path: 'quiz-list' , component: components[11]},
  {path: 'quiz-preview' , component: components[12]},
  {path: '**' , component: PageNotFoundComponent},
];
@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
