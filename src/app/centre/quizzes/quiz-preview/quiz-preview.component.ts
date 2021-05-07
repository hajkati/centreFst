import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../Controller/Service/quiz.service';
import {Question} from '../../../Controller/Model/question.model';
import {Reponse} from '../../../Controller/Model/reponse.model';
import {TypeDeQuestion} from '../../../Controller/Model/type-de-question.model';
import {Quiz} from '../../../Controller/Model/quiz.model';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.component.html',
  styleUrls: ['./quiz-preview.component.css']
})
export class QuizPreviewComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  get questions(): Array<Question> {
    return this.quizService.questions;
  }
  get reponses(): Array<Reponse> {
    return this.quizService.reponses;
  }
  public quizSelected(): void{
    this.quizService.quizSelected();
  }
  get question(): Question {
    return    this.quizService.question;
  }
  get reponse(): Reponse {
    return this.quizService.reponse;
  }
  get type(): TypeDeQuestion {
    return this.quizService.question.typeDeQuestion;
  }
  get types(): Array<TypeDeQuestion> {
    return this.quizService.types;
  }
  get quizs(): Array<Quiz> {
    return this.quizService.quizs;
  }
  get quiz(): Quiz {
    return this.quizService.question.quiz;
  }
  get typeQst(): string {
   return  this.quizService.typeQst;
  }
  // tslint:disable-next-line:typedef
  public TypeQuestion(){
    return this.quizService.TypeQuestion();
  }
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:typedef
  public findRepByQuestion(question: Question){
    return this.quizService.findRepByQuestion(question);
  }
  ngOnInit(): void {
    this.quizService.findFormule();
    this.quizService.findQuiz();
    this.quizService.TypeQuestion();
    this.quizService.findFormuleRep();
    this.question.numero = 1 ;
   /* this.quizService.QuizChoose(this.quiz);
    this.quizService.findByNumero();
    this.quizService.findByQuestionRef();
    this.quizService.findQuizRef();*/
  }
  // tslint:disable-next-line:typedef
  public findByNumero(){
    return this.quizService.findByNumero();
  }
  // tslint:disable-next-line:typedef
  public findByQuestionRef(){
    return this.quizService.findByQuestionRef();
  }
  // tslint:disable-next-line:typedef
  public findQuizRef(){
    return this.quizService.findQuizRef();
  }
  // tslint:disable-next-line:typedef
  QuizChoose(quiz: Quiz) {
    return this.quizService.QuizChoose(quiz);
  }
}
