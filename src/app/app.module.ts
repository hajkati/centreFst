import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './Centre/menu/menu.component';
import { PageNotFoundComponent } from './Centre/page-not-found/page-not-found.component';
import {AppRoutingModule, components} from './app-routing.module';
import {CentreComponent} from './centre/centre.component';
import { LearningComponent } from './Centre/learning/learning.component';
import { EtudiantComponent } from './centre/inscription/etudiant/etudiant.component';
import { InscriptionComponent } from './Centre/inscription/inscription.component';
import { QuizzesComponent } from './Centre/quizzes/quizzes.component';
import {ParcoursComponent} from './centre/learning/parcours/parcours.component';
import {SectionComponent} from './centre/learning/section/section.component';
import {CoursComponent} from './centre/learning/cours/cours.component';
import {ParcoursListComponent} from './centre/learning/parcours-list/parcours-list.component';
import {SectionListComponent} from './centre/learning/section-list/section-list.component';
import {CoursListComponent} from './centre/learning/cours-list/cours-list.component';
import {CategorieSectionListComponent} from './centre/learning/categorie-section-list/categorie-section-list.component';
import {EtudiantListComponent} from './centre/inscription/etudiant-list/etudiant-list.component';
import {SuperCategorieSectionListComponent} from './centre/learning/super-categorie-section-list/super-categorie-section-list.component';
import {InscriptionListComponent} from './centre/inscription/inscription-list/inscription-list.component';
import {QuestionQuizComponent} from './centre/quizzes/question-quiz/question-quiz.component';
import {QuizCreateComponent} from './centre/quizzes/quiz-create/quiz-create.component';
import {QuizListComponent} from './centre/quizzes/quiz-list/quiz-list.component';
import {QuizPreviewComponent} from './centre/quizzes/quiz-preview/quiz-preview.component';
import { LoginComponent } from './centre/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    components,
    CentreComponent,
    ParcoursComponent,
    MenuComponent,
    PageNotFoundComponent,
    CoursComponent,
    SectionComponent,
    ParcoursListComponent,
    CoursListComponent,
    SectionListComponent,
    CategorieSectionListComponent,
    SuperCategorieSectionListComponent,
    LearningComponent,
    EtudiantComponent,
    EtudiantListComponent,
    InscriptionListComponent,
    QuestionQuizComponent,
    QuizCreateComponent,
    QuizListComponent,
    InscriptionComponent,
    ParcoursComponent,
    CoursComponent,
    SectionComponent,
    QuizzesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
