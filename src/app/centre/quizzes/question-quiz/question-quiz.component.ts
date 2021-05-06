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

@Component({
  selector: 'app-question-quiz',
  templateUrl: './question-quiz.component.html',
  styleUrls: ['./question-quiz.component.css']
})
export class QuestionQuizComponent implements OnInit {

  constructor(private questionService: QuestionService) { }



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
  }

}
