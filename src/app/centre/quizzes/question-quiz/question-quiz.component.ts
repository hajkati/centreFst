/* tslint:disable:typedef whitespace */
import { Component, OnInit } from '@angular/core';
import {Question} from '../../../Controller/Model/question.model';
import {Reponse} from '../../../Controller/Model/reponse.model';
import {QuestionService} from '../../../Controller/Service/question.service';
import {Quiz} from '../../../Controller/Model/quiz.model';
import {Etudiant} from '../../../Controller/Model/etudiant.model';
import {QuizEtudiant} from '../../../Controller/Model/quiz-etudiant.model';
import {ReponseEtudiant} from '../../../Controller/Model/reponse-etudiant.model';
import {TypeDeQuestion} from '../../../Controller/Model/type-de-question.model';
import { Subscription, interval } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-quiz',
  templateUrl: './question-quiz.component.html',
  styleUrls: ['./question-quiz.component.css']
})
export class QuestionQuizComponent implements OnInit {

  constructor(private questionService: QuestionService, private  http: HttpClient, private modalService: NgbModal) { }

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('05/09/2021 20:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;


  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    if(this.secondsToDday == 0 && this.minutesToDday == 0 && this.hoursToDday == 0 && this.daysToDday == 0)
    {
      this.quizEtudiant.id = this.quizEtudiants.length;
      this.quizEtudiant.note = this.note;
      if(this.quizEtudiant.note >= this.quiz.seuilReussite)
      {
        this.quizEtudiant.resultat = 'validé';
      }
      else {
        this.quizEtudiant.resultat = 'non validé';
      }
      this.http.put('http://localhost:8036/centre/quizEtudiant/' , this.quizEtudiant).subscribe(
        data => {
          console.log('');
        }
      );
      document.getElementById ('finish').style.visibility = 'visible';
      document.getElementById ('quiz').remove();
      document.getElementById ('countdown').style.visibility = 'hidden';
      document.getElementById ('progression').style.visibility = 'hidden';
    }
    else if(this.secondsToDday < 0 || this.minutesToDday < 0 || this.hoursToDday < 0 || this.daysToDday < 0)
    {
      document.getElementById ('countdown').remove();
      document.getElementById ('btn-start').remove();
    }
  }

  get questions(): Array<Question> {
    return this.questionService.questions;
  }

  get questionsAll(): Array<Question> {
    return this.questionService.questionsAll;
  }

  get reponses(): Array<Reponse> {
    return this.questionService.reponses;
  }

  get question(): Question {
    return this.questionService.question;
  }

  get reponse(): Reponse {
    return this.questionService.reponse;
  }

  get reponseCorr(): Reponse {
    return this.questionService.reponseCorr;
  }

  get reponsesCorrect(): Array<Reponse> {
    return this.questionService.reponsesCorrect;
  }

  public findByNumero(){
    this.questionService.findByNumero();
  }

  public findAll(){
    this.questionService.findAll();
  }

  public findByQuestionRef(){
    this.questionService.findByQuestionRef();
  }

  public CorrectAnswer(){
    this.questionService.CorrectAnswer();
  }

  public answer(){
    this.questionService.answer();
  }

  public answerNext(){
    this.questionService.answerNext();
  }

  public findByNumeroNext(){
    this.questionService.findByNumeroNext();
  }

  public findAllReponseEtudiant(){
    this.questionService.findAllReponseEtudiant();
  }

  public check(){
    this.questionService.check();
  }

  public checkInput(rep: string){
    this.questionService.checkInput(rep);
  }


  public getAnswerRadio(event: any,ref: Reponse){
    this.questionService.getAnswerRadio(event,ref);
  }

  get quizs(): Array<Quiz> {
    return this.questionService.quizs;
  }

  public findQuiz()
  {
    return this.questionService.findQuiz();
  }

  get note(): number {
    return this.questionService.note;
  }

  get r(): number {
    return this.questionService.r;
  }

  public findEtudiant()
  {
    return this.questionService.findEtudiant();
  }

  public findQuizRef()
  {
    return this.questionService.findQuizRef();
  }

  public findAllQuizEtudiant()
  {
    return this.questionService.findAllQuizEtudiant();
  }

  get etudiant(): Etudiant {
    return this.questionService.etudiant;
  }

  get quiz(): Quiz {
    return this.questionService.quiz;
  }

  get quizEtudiant(): QuizEtudiant {
    return this.questionService.quizEtudiant;
  }

  get quizEtudiants(): Array<QuizEtudiant> {
    return this.questionService.quizEtudiants;
  }

  get quizEtudiantsInsert(): Array<QuizEtudiant> {
    return this.questionService.quizEtudiantsInsert;
  }

  get reponseEtudiant(): ReponseEtudiant {
    return this.questionService.reponseEtudiant;
  }

  get reponsesEtudiantNote(): Array<ReponseEtudiant> {
    return this.questionService.reponsesEtudiantNote;
  }

  public insertQuizEtudiant()
  {
    return this.questionService.insertQuizEtudiant();
  }

  get button(): string {
    return this.questionService.button;
  }

  get nbrRep(): string {
    return this.questionService.nbrRep;
  }

  public insertReponseEtudiant(z: number)
  {
    return this.questionService.insertReponseEtudiant(z);
  }
  public insertReponseEtudiantCheckBox(y: number)
  {
    return this.questionService.insertReponseEtudiantCheckBox(y);
  }

  get type(): TypeDeQuestion {
    return this.questionService.type;
  }

  get types(): Array<TypeDeQuestion> {
    return this.questionService.types;
  }

  get reponsesEtudiant(): Array<ReponseEtudiant> {
    return this.questionService.reponsesEtudiant;
  }
  get typeQst(): string {
    return this.questionService.typeQst;
  }

  open(content): void {
    this.modalService.open(content, {centered: true});
  }

  ngOnInit(): void {
    this.questionService.findByNumero();
    this.questionService.findByQuestionRef();
    this.questionService.CorrectAnswer();
    this.questionService.findQuiz();
    this.questionService.findEtudiant();
    this.questionService.findQuizRef();
    this.questionService.findAllQuizEtudiant();
    this.questionService.findAllReponseEtudiant();
    this.questionService.selectedItemsRadio = new Array<Reponse>();
    this.questionService.selectedItemsCheckBox = new Array<Reponse>();
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

}
