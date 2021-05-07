import { Injectable } from '@angular/core';
import {Reponse} from '../model/reponse.model';
import {Question} from '../model/question.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {TypeDeQuestion} from '../model/type-de-question.model';
import {Quiz} from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  get type(): TypeDeQuestion {
    // this.http.get(this._urlBase + this._urlType + '/');
    if (this._typeDeQuestion == null){
      this._typeDeQuestion = new TypeDeQuestion();
    }
    return this._typeDeQuestion;
  }

  set type(value: TypeDeQuestion) {
    this._typeDeQuestion = value;
  }
  get reponse(): Reponse {
    if (this._reponse == null) {
      this._reponse = new Reponse();
    }
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get reponses(): Array<Reponse> {
    if (this._reponses == null) {
      this._reponses = new Array<Reponse>();
    }
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }

  get question(): Question {
    if (this._question == null) {
      this._question = new Question();
    }
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }

  get questions(): Array<Question> {
    if (this._questions == null) {
      // @ts-ignore
      this._questions = new Array<Question>();
    }
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }
  constructor(private http: HttpClient) {
  }
  get types(): Array<TypeDeQuestion> {
    if (this._types == null){
      this._types = new Array<TypeDeQuestion>();
    }
    return this._types;
  }
  set types(value: Array<TypeDeQuestion>) {
    this._types = value;
  }
  get quiz(): Quiz {
    return this._quiz;
  }

  set quiz(value: Quiz) {
    this._quiz = value;
  }
  get typeQst(): string {
    return this._typeQst;
  }

  set typeQst(value: string) {
    this._typeQst = value;
  }


  get dataarray(): any[] {
    return this._dataarray;
  }

  set dataarray(value: any[]) {
    // @ts-ignore
    this._dataarray = value;
  }
  get quizs(): Array<Quiz> {
    if (this._quizs == null){
      this._quizs = new Array<Quiz>();
    }
    return this._quizs;
  }

  set quizs(value: Array<Quiz>) {
    this._quizs = value;
  }
  get j(): number {
    return this._j;
  }

  set j(value: number) {
    this._j = value;
  }
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _reponse: Reponse;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _quiz: Quiz;

// tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _typeDeQuestion: TypeDeQuestion;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _reponses: Array<Reponse>;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _typeQst: string;

// tslint:disable-next-line:variable-name
private _dataarray = [];

// tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _types: Array<TypeDeQuestion>;
// tslint:disable-next-line:variable-name
// @ts-ignore
  // tslint:disable-next-line:variable-name
  private _quizs: Array<Quiz>;

// tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _question: Question;
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name

// tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  private _questions: Array<Question>;
  // tslint:disable-next-line:typed variable-names variable-name
public _urlBase = 'http://localhost:8036/';
// tslint:disable-next-line:variable-name
public _urlQuestion = 'centre/question';
// tslint:disable-next-line:variable-name
private _urlReponse = 'centre/reponse';
// tslint:disable-next-line:variable-name
public _urlType = 'centre/TypeDeQuestion';
// tslint:disable-next-line:variable-name
public _urlQuiz = 'centre/quiz';
  // tslint:disable-next-line:variable-name
  private _j = 0;
public findFormuleRep(): void{
    this.http.get(this._urlBase + this._urlReponse + '/').subscribe(
      data => {
        // @ts-ignore
        this._reponses = data;
      }, error1 => {
        console.log('error finding reponses');
      }
    );
}
  // tslint:disable-next-line:variable-name
  // @ts-ignore
  // tslint:disable-next-line:variable-name
// tslint:disable-next-line:typedef
  public save() {
    // @ts-ignore
    // @ts-ignore
     this.http.post<number>(this._urlBase + this._urlQuestion + '/', this.question).subscribe(
     data => {
     if (data > 0){
    // @ts-ignore
       this.questions.push(this.clone(this.question));
    // @ts-ignore
       this.question = null;
       alert('Votre quiz est enregistré avec succès');
    // tslint:disable-next-line:align no-shadowed-variable no-unused-expression
    }else {
  console.log('error');
  }
  }
    );
  }
  // tslint:disable-next-line:typedef
  public saveQuiz(){
  this.http.post<number>(this._urlBase + this._urlQuiz + '/' , this.quiz).subscribe(
    data => {
      if (data > 0){
        this.quizs.push(this.cloneQuiz(this.quiz));
      }else {
        console.log('error quiz');
      }
    }
  );
  }
// tslint:disable-next-line:typedef
/*selectCorrect(){
  // tslint:disable-next-line:variable-name
    let _i = 0;
    this.question.correct = ['Vrai', 'Faux'];
    if (this.question.correct.indexOf('Vrai')){
     this.question.pointReponseJuste = _i++;
    }else if (this.question.correct.indexOf('Faux')){
      this.question.pointReponsefausse = _i++;
    }
}*/

// tslint:disable-next-line:typedef align
    public addReponse(){
      const x = document.getElementById('tableRep');
      // @ts-ignore
      if (x.style.display === 'none'){
        // @ts-ignore
        x.style.display = 'block';
      }else {
        // @ts-ignore
        x.style.display = 'block';
      }
      this.question.reponses.push(this.cloneRep(this.reponse));
      // @ts-ignore
      this.reponse = null;
    }
 /* }
);
}*/
// tslint:disable-next-line:typedef align
  public clone(question: Question) {
    const myQuestion = new Question();
    myQuestion.quiz = question.quiz;
    myQuestion.id = question.id;
    myQuestion.numero = question.numero;
    myQuestion.ref = question.ref;
    myQuestion.libelle = question.libelle;
    myQuestion.typeDeQuestion = question.typeDeQuestion;
    myQuestion.pointReponsefausse = question.pointReponsefausse;
    myQuestion.pointReponseJuste = question.pointReponseJuste;
    myQuestion.reponses = question.reponses;
    return myQuestion;
  }
  // tslint:disable-next-line:typedef
  public cloneQuiz(quiz: Quiz){
    const myQuiz = new Quiz();
    myQuiz.id = quiz.id;
    myQuiz.lib = quiz.lib;
    myQuiz.numero = quiz.numero;
    myQuiz.ref = quiz.ref;
    myQuiz.dateDebut = quiz.dateDebut;
    myQuiz.dateFin = quiz.dateFin;
    myQuiz.seuilReussite = quiz.seuilReussite;
    myQuiz.questions = quiz.questions;
    return myQuiz;
  }
  // tslint:disable-next-line:typedef
  public findRepByQuestion(question: Question){
      this.http.get<Array<Reponse>>(this._urlBase + this._urlReponse + '/question/numero/' +  question.numero).subscribe(
        data => {
          this.question.reponses = data;
        }, error1 => {
          console.log('error loading reponses from questionRef');
        }
      );
  }
  // tslint:disable-next-line:typedef
  public findByNumero(){
    this.findAll();
    this.http.get<Question>('http://localhost:8036/centre/question/numero/1').subscribe(
      data => {
        this.question = data;
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findByQuestionRef(){
    this.j = this.j + 1;
    this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/question/numero/' + this.j).subscribe(
      data => {
        this.reponses = data;
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findQuizRef()
  {
    this.http.get<Quiz>('http://localhost:8036/centre/quiz/ref/Q4').subscribe(
      data => {
        this.quiz = data;
      }
    );
  }
  // tslint:disable-next-line:typedef
  public QuizChoose(quiz: Quiz) {
    this.http.get<Array<Question>>(this._urlBase + this._urlQuestion + '/quiz/ref/' + quiz.ref).subscribe(
      data => {
        this.quiz.questions = data;
      } , error1 => {
        console.log('error loading questions from quizRef');
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findAll(): void {
    this.http.get<any>(this._urlBase + this._urlType + '/').subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        this._types = data;
      }, error1 => {
        console.log('can\'t bring data from database');
      }
    );
  }
  public findQuiz(): void {
    this.http.get<any>(this._urlBase + this._urlQuiz + '/').subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        this._quizs = data;
      }, error1 => {
        console.log('can\'t bring data from database');
      }
    );
  }
// tslint:disable-next-line:typedef align
  public cloneRep(reponse: Reponse) {
    const mycloneRep = new Reponse();
    mycloneRep.id = reponse.id;
    // @ts-ignore
    mycloneRep.lib = reponse.lib;
    mycloneRep.etatReponse = reponse.etatReponse;
    mycloneRep.ref = reponse.ref;
   // mycloneRep.question = reponse.question;
    return mycloneRep;
  }
  // tslint:disable-next-line:typedef
 findFormule(): void{
    this.http.get<any>(this._urlBase + this._urlQuestion + '/').subscribe(
      data => {
        // @ts-ignore
        this.questions = data;
      }, error1 => {
        console.log('error finding data');
      }
    );
 }
  // tslint:disable-next-line:typedef
 public addTable(){
    const x = document.getElementById('tableRep');
    // @ts-ignore
    if (x.style.display === 'none'){
      // @ts-ignore
      x.style.display = 'block';
    }else {
      // @ts-ignore
      x.style.display = 'block';
    }
 }
 public choixSelected(): void{
    console.log(this.types);
   // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.types.length; i++){
      // tslint:disable-next-line:triple-equals
      if (this.types[i].lib == this.question.typeDeQuestion.lib){
        // @ts-ignore
        this.question.typeDeQuestion = this.clone(this.types[i]);
        console.log(this.question.typeDeQuestion.lib);
      }
    }
    console.log(this.question);
    console.log(this.types);
 }
  public quizSelected(): void{
    console.log(this.quizs);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.quizs.length; i++){
      // tslint:disable-next-line:triple-equals
      if (this.quizs[i].ref == this.question.quiz.ref){
        // @ts-ignore
        this.question.quiz = this.clone(this.quizs[i]);
        console.log(this.question.quiz.ref);
      }
    }
    console.log(this.question);
    console.log(this.quizs);
  }
  // tslint:disable-next-line:typedef
 public defaultchecked(){
    this.reponse.etatReponse = 'Vrai';
  }
  // tslint:disable-next-line:typedef
 public TypeQuestion(){
    // tslint:disable-next-line:triple-equals
    if (this.question.typeDeQuestion.ref == 'C1'){
      this.typeQst = 'checkbox';
      // tslint:disable-next-line:triple-equals
    }else if (this.question.typeDeQuestion.ref == 'C2'){
    this.typeQst = 'radio';
      // tslint:disable-next-line:triple-equals
    }else if (this.question.typeDeQuestion.ref == 'C3'){
      this.typeQst = 'text';
    }
  }

  // tslint:disable-next-line:typedef
 // @ts-ignore
  // tslint:disable-next-line:typedef
  checked(event: any){
   let i = 0;
   if (event.target.checked){
     this.reponse.etatReponse = 'Vrai';
     this.question.pointReponseJuste = i++;
    }
    }
  // tslint:disable-next-line:typedef
    public checkedFalse(event: any){
    let w = 0;
    if (event.target.checked){
      this.reponse.etatReponse = 'Faux';
      this.question.pointReponsefausse = w++;
    }
    }
  // tslint:disable-next-line:typedef
  public addCard(){
    const elem = document.getElementById('addCard');
    // @ts-ignore
    const elemclone = elem.cloneNode(true);
    // @ts-ignore
    elem.appendChild(elemclone);
  }
  // tslint:disable-next-line:typedef
  public deleteCard(index: number){
    this.questions.splice(index , 1);
  }
  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
 /* correct(e){
    if (e.checked){
      this.reponse.correct = true;
    }else if (!e.checked){
      this.reponse.correct = false;
    }
  }*/
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  delete(index: number) {
    // @ts-ignore
    const reponse = this.reponse[index];
    /*this.http.delete(this._urlBase + this._urlReponse + '/ref/' + reponse.ref).subscribe(
      data => {*/
    this.question.reponses.splice(index, 1);
      }
   /* );
  }*/
}
