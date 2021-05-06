/* tslint:disable:typedef whitespace triple-equals comment-format */
import { Injectable } from '@angular/core';
import {Question} from '../model/question.model';
import {Reponse} from '../model/reponse.model';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../model/quiz.model';
import {Etudiant} from '../model/etudiant.model';
import {QuizEtudiant} from '../model/quiz-etudiant.model';
import {ReponseEtudiant} from '../model/reponse-etudiant.model';
import {TypeDeQuestion} from '../model/type-de-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _questions: Array<Question>;
  private _questionsAll: Array<Question>;
  private _question: Question;
  private _reponses: Array<Reponse>;
  private _reponsesCorrect: Array<Reponse>;
  private _quizs: Array<Quiz>;
  private _reponse: Reponse;
  private _reponseCorr: Reponse;
  private _i = 1;
  private _j = 0;
  private _a: number;
  private _k = -1;
  private _n: number;
  private _note: number;
  private _m: number;
  private _q = 0;
  private _r = 0;
  private _typeQst :string;
  private correctAns : string[];
  private _selectedItemsRadio : Array<Reponse>;
  private _selectedItemsCheckBox : Array<Reponse>;
  private count = 0;
  private _etudiant: Etudiant;
  private _quiz: Quiz;
  private _quizEtudiant: QuizEtudiant;
  private _type: TypeDeQuestion;
  private _types: Array<TypeDeQuestion>;
  private _quizEtudiants: Array<QuizEtudiant>;
  private _quizEtudiantsInsert: Array<QuizEtudiant>;
  private _reponseEtudiant: ReponseEtudiant;
  private _reponsesEtudiant: Array<ReponseEtudiant>;
  private _reponsesEtudiantNote: Array<ReponseEtudiant>;


  get reponsesEtudiant(): Array<ReponseEtudiant> {
    if(this._reponsesEtudiant == null)
    {
      this._reponsesEtudiant = new Array<ReponseEtudiant>();
    }
    return this._reponsesEtudiant;
  }

  set reponsesEtudiant(value: Array<ReponseEtudiant>) {
    this._reponsesEtudiant = value;
  }

  get reponsesEtudiantNote(): Array<ReponseEtudiant> {
    if(this._reponsesEtudiantNote == null)
    {
      this._reponsesEtudiantNote = new Array<ReponseEtudiant>();
    }
    return this._reponsesEtudiantNote;
  }

  set reponsesEtudiantNote(value: Array<ReponseEtudiant>) {
    this._reponsesEtudiantNote = value;
  }

  get type(): TypeDeQuestion {
    if(this._type == null)
    {
      this._type = new TypeDeQuestion();
    }
    return this._type;
  }

  set type(value: TypeDeQuestion) {
    this._type = value;
  }


  get types(): Array<TypeDeQuestion> {
    if(this._types == null)
    {
      this._types = new Array<TypeDeQuestion>();
    }
    return this._types;
  }

  set types(value: Array<TypeDeQuestion>) {
    this._types = value;
  }

  get quizEtudiants(): Array<QuizEtudiant> {
    if(this._quizEtudiants == null)
    {
      this._quizEtudiants = new Array<QuizEtudiant>();
    }
    return this._quizEtudiants;
  }

  set quizEtudiants(value: Array<QuizEtudiant>) {
    this._quizEtudiants = value;
  }

  get quizEtudiantsInsert(): Array<QuizEtudiant> {
    if(this._quizEtudiantsInsert == null)
    {
      this._quizEtudiantsInsert = new Array<QuizEtudiant>();
    }
    return this._quizEtudiantsInsert;
  }

  set quizEtudiantsInsert(value: Array<QuizEtudiant>) {
    this._quizEtudiantsInsert = value;
  }

  get quizEtudiant(): QuizEtudiant {
    if(this._quizEtudiant == null)
    {
      this._quizEtudiant = new QuizEtudiant();
    }
    return this._quizEtudiant;
  }

  set quizEtudiant(value: QuizEtudiant) {
    this._quizEtudiant = value;
  }

  get reponseEtudiant(): ReponseEtudiant {
    if(this._reponseEtudiant == null)
    {
      this._reponseEtudiant = new ReponseEtudiant();
    }
    return this._reponseEtudiant;
  }

  set reponseEtudiant(value: ReponseEtudiant) {
    this._reponseEtudiant = value;
  }

  get etudiant(): Etudiant {
    if(this._etudiant == null)
    {
      this._etudiant = new Etudiant();
    }
    return this._etudiant;
  }

  set etudiant(value: Etudiant) {
    this._etudiant = value;
  }

  get quiz(): Quiz {
    if(this._quiz == null)
    {
      this._quiz = new Quiz();
    }
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

  get i(): number {
    return this._i;
  }

  set i(value: number) {
    this._i = value;
  }


  get n(): number {
    return this._n;
  }

  set n(value: number) {
    this._n = value;
  }

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get q(): number {
    return this._q;
  }

  set q(value: number) {
    this._q = value;
  }

  get r(): number {
    return this._r;
  }

  set r(value: number) {
    this._r = value;
  }

  get m(): number {
    return this._m;
  }

  set m(value: number) {
    this._m = value;
  }

  get j(): number {
    return this._j;
  }

  set j(value: number) {
    this._j = value;
  }
  get k(): number {
    return this._k;
  }

  set k(value: number) {
    this._k = value;
  }

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get questions(): Array<Question> {
    if(this._questions == null)
    {
      this._questions = new Array<Question>();
    }
    return this._questions;
  }

  set questions(value: Array<Question>) {
    this._questions = value;
  }

  get questionsAll(): Array<Question> {
    if(this._questionsAll == null)
    {
      this._questionsAll = new Array<Question>();
    }
    return this._questionsAll;
  }

  set questionsAll(value: Array<Question>) {
    this._questionsAll = value;
  }

  get reponses(): Array<Reponse> {
    if(this._reponses == null)
    {
      this._reponses = new Array<Reponse>();
    }
    return this._reponses;
  }

  set reponses(value: Array<Reponse>) {
    this._reponses = value;
  }


  get reponsesCorrect(): Array<Reponse> {
    if(this._reponsesCorrect == null)
    {
      this._reponsesCorrect = new Array<Reponse>();
    }
    return this._reponsesCorrect;
  }

  set reponsesCorrect(value: Array<Reponse>) {
    this._reponsesCorrect = value;
  }

  get question(): Question {
    if(this._question == null)
    {
      this._question = new Question();
    }
    return this._question;
  }

  set question(value: Question) {
    this._question = value;
  }


  get reponse(): Reponse {
    if(this._reponse == null)
    {
      this._reponse = new Reponse();
    }
    return this._reponse;
  }

  set reponse(value: Reponse) {
    this._reponse = value;
  }

  get reponseCorr(): Reponse {
    if(this._reponseCorr == null)
    {
      this._reponseCorr = new Reponse();
    }
    return this._reponse;
  }

  set reponseCorr(value: Reponse) {
    this._reponseCorr = value;
  }

  get selectedItemsRadio(): Array<Reponse> {
    return this._selectedItemsRadio;
  }

  set selectedItemsRadio(value: Array<Reponse>) {
    this._selectedItemsRadio = value;
  }

  get selectedItemsCheckBox(): Array<Reponse> {
    return this._selectedItemsCheckBox;
  }

  set selectedItemsCheckBox(value: Array<Reponse>) {
    this._selectedItemsCheckBox = value;
  }


  get quizs(): Array<Quiz> {
    if(this._quizs == null)
    {
      this._quizs = new Array<Quiz>();
    }
    return this._quizs;
  }

  set quizs(value: Array<Quiz>) {
    this._quizs = value;
  }

  public findQuiz()
  {
    this.http.get<Array<Quiz>>('http://localhost:8036/centre/quiz/' ).subscribe(
      data => {
        this.quizs = data;
      }
    );
  }

  public findAll(){
    this.http.get<Array<Question>>('http://localhost:8036/centre/question/').subscribe(
      data => {
        this.questionsAll = data;
        this.count = data.length;
      }
    );
  }

  public findByNumero(){
    this.findAll();
    this.http.get<Question>('http://localhost:8036/centre/question/numero/1').subscribe(
      data => {
        this.question = data;
      }
    );
  }

  public findByNumeroNext(){
    this.i = this.i + 1;
    this.http.get<Question>('http://localhost:8036/centre/question/numero/' + this.i).subscribe(
      data => {
        this.question = data;
        this.typeQst = data.typeDeQuestion.ref;
        this.answerNext();
      }
    );
  }
  public findByQuestionRef(){
    this.j = this.j + 1;
    this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/question/numero/' + this.j).subscribe(
      data => {
        this.reponses = data;
      }
    );
  }

  public check(){
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.a = 0;
      for (this.n = 0 ; this.n < this.selectedItemsRadio.length ; this.n = this.n + 1)
      {
        for (this.m = 0 ; this.m < this.reponsesCorrect.length ; this.m = this.m + 1)
        {
          if(this.reponsesCorrect[this.m].ref == this.selectedItemsRadio[this.n].ref)
          {
            this.a = this.a + 1;
          }
        }
      }
      if(this.a == 1)
      {
        this.insertReponseEtudiant(this.question.pointReponseJuste);
        this.note = this.note + this.question.pointReponseJuste;
      }
      else
      {
        this.insertReponseEtudiant(this.question.pointReponsefausse);
        this.note = this.note + this.question.pointReponsefausse;
      }
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      this.a = 0;
      for (this.n = 0 ; this.n < this.selectedItemsCheckBox.length ; this.n = this.n + 1)
      {
        for (this.m = 0 ; this.m < this.reponsesCorrect.length ; this.m = this.m + 1)
        {
          if(this.reponsesCorrect[this.m].ref == this.selectedItemsCheckBox[this.n].ref)
          {
            this.a = this.a + 1;
          }
        }
      }
      if(this.a == this.reponsesCorrect.length && this.selectedItemsCheckBox.length == this.reponsesCorrect.length)
      {
        this.a = this.question.pointReponseJuste;
        this.note = this.note + this.question.pointReponseJuste;
      }
      else
      {
        this.a = this.question.pointReponsefausse;
        this.note = this.note + this.question.pointReponsefausse;
      }
      for (this.n = 0 ; this.n < this.selectedItemsCheckBox.length ; this.n = this.n + 1)
      {
        this.findAllQuizEtudiant();
        this.findQuizEtudiant();
        this.reponseEtudiant.id = 1;
        this.reponseEtudiant.note = (this.a/this.selectedItemsCheckBox.length);
        this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        this.reponseEtudiant.ref = 're' + (this.r + 1 + this.n);
        this.reponseEtudiant.reponse = this.selectedItemsCheckBox[this.n];

        this.http.post('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant).subscribe(
          data => {
            this.findAllQuizEtudiant();
            this.reponseEtudiant = null;
            this.r = this.r + 1;
          }
        );
      }
      this.answerNext();
    }
    if(this.i  == this.count)
    {
      console.log('seuil de reussite est = ' + this.quiz.seuilReussite);
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
    }
    else
    {
      this.CorrectAnswer();
      this.findByNumeroNext();
      this.findByQuestionRef();
    }
  }



  public checkInput(rep) {
    this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    this.a = 0;
    for (this.m = 0; this.m < this.reponsesCorrect.length; this.m = this.m + 1) {
      if (this.reponsesCorrect[this.m].lib == rep) {
        this.a = this.a + this.question.pointReponseJuste;
        this.note = this.note + this.question.pointReponseJuste;
      }
      this.reponseEtudiant.id = 1;
      this.reponseEtudiant.note = this.a;
      this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
      this.reponseEtudiant.ref = 're' + (this.r + 1);
      this.reponseEtudiant.reponse = this.reponsesCorrect[this.m];

      this.http.post('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant).subscribe(
        data => {
          this.findAllQuizEtudiant();
          this.reponseEtudiant = null;
          this.r = this.r + 1;
        }
      );
    }
    if(this.i  == this.count)
    {
      console.log('seuil de reussite est = ' + this.quiz.seuilReussite);
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
    }
    else
    {
      this.CorrectAnswer();
      this.findByNumeroNext();
      this.findByQuestionRef();
    }
  }

  public findEtudiant()
  {
    this.http.get<Etudiant>('http://localhost:8036/learn/etudiant/ref/e1').subscribe(
      data => {
        this.etudiant = data;
      }
    );
  }

  public findQuizRef()
  {
    this.http.get<Quiz>('http://localhost:8036/centre/quiz/ref/g1').subscribe(
      data => {
        this.quiz = data;
      }
    );
  }

  public findAllQuizEtudiant()
  {
    this.http.get<Array<QuizEtudiant>>('http://localhost:8036/centre/quizEtudiant/').subscribe(
      data => {
        this.quizEtudiants = data;
        this.q = data.length;
      }
    );
  }

  public findAllReponseEtudiant()
  {
    this.http.get<Array<ReponseEtudiant>>('http://localhost:8036/centre/reponseEtudiant/').subscribe(
      data => {
        this.reponsesEtudiant = data;
        this.r = data.length;
      }
    );
  }

  public insertQuizEtudiant()
  {
    this.findAllQuizEtudiant();
    this.quizEtudiant.etudiant = this.etudiant;
    this.quizEtudiant.quiz = this.quiz;
    this.quizEtudiant.dateDebut = null;
    this.quizEtudiant.dateFin = null;
    this.quizEtudiant.id = (this.q + 1);
    this.quizEtudiant.note = 0;
    this.quizEtudiant.ref = 'qe' + (this.q + 1);
    this.quizEtudiant.resultat = null;

    this.http.post<number>('http://localhost:8036/centre/quizEtudiant/', this.quizEtudiant).subscribe(
      data => {
        this.findAllQuizEtudiant();
        //this.quizEtudiant = null;
      }, error => {
        console.log('error');
      }
    );
  }

  public findType()
  {
    this.http.get<Array<TypeDeQuestion>>('http://localhost:8036/centre/typeDeQuestion/').subscribe(
      data => {
        this.types = data;
      }
    );
  }
  public findQuizEtudiant()
  {
    this.findAllQuizEtudiant();
    this.http.get<QuizEtudiant>('http://localhost:8036/centre/quizEtudiant/ref/qe' + this.q).subscribe(
      data => {
        this.quizEtudiant = data;
      }
    );
  }

  public insertReponseEtudiant(z: number) {
    this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    if (this.question.typeDeQuestion.ref == 't1') {
      for (this.n = 0; this.n < this.selectedItemsRadio.length; this.n = this.n + 1) {
        this.reponseEtudiant.id = 1;
        this.reponseEtudiant.note = z;
        this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
        this.reponseEtudiant.ref = 're' + (this.r + 1);
        this.reponseEtudiant.reponse = this.selectedItemsRadio[this.n];

        this.http.post('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant).subscribe(
          data => {
            this.findAllQuizEtudiant();
            this.reponseEtudiant = null;
            this.r = this.r + 1;
          }
        );
      }
    }
  }
  public insertReponseEtudiantCheckBox(y: number)
  {
    this.findAllQuizEtudiant();
    this.findQuizEtudiant();
    this.reponseEtudiant.id = 1;
    this.reponseEtudiant.note = y;
    this.reponseEtudiant.quizEtudiant = this.quizEtudiant;
    this.reponseEtudiant.ref = 're' + (this.r + 500);
    this.reponseEtudiant.reponse = this.selectedItemsCheckBox[this.n];
    this.http.post('http://localhost:8036/centre/reponseEtudiant/', this.reponseEtudiant).subscribe(
      data => {
        this.findAllQuizEtudiant();
        this.reponseEtudiant = null;
      }
    );

  }

  public answer(){
    this.findAllReponseEtudiant();
    this.note = 0;
    this.insertQuizEtudiant();
    this.CorrectAnswer();
    document.getElementById ('start').remove();
    document.getElementById ('question').style.visibility = 'visible';
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.typeQst = 'radio';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      this.typeQst = 'checkbox';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.question.typeDeQuestion.ref == 't3')
    {
      document.getElementById ('reponse-radio').style.visibility = 'hidden';
      document.getElementById ('reponse-text').style.visibility = 'visible';
    }
  }

  public answerNext(){
    document.getElementById ('question').style.visibility = 'visible';
    if(this.question.typeDeQuestion.ref == 't1')
    {
      this.typeQst = 'radio';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      this.typeQst = 'checkbox';
      document.getElementById ('reponse-radio').style.visibility = 'visible';
      document.getElementById ('reponse-text').style.visibility = 'hidden';
    }
    else if(this.typeQst == 't3')
    {
      document.getElementById ('reponse-radio').style.visibility = 'hidden';
      document.getElementById ('reponse-text').style.visibility = 'visible';
      this.typeQst = 'text';
    }
  }

  public CorrectAnswer()
  {
    this.k = this.k + 1;
    this.http.get<Array<Reponse>>('http://localhost:8036/centre/reponse/criteria/numero/' + this.k).subscribe(
      data => {
        this.reponsesCorrect = data;
      }
    );
  }

  public getAnswerRadio(event: any,ref: Reponse)
  {
    if(this.question.typeDeQuestion.ref == 't1')
    {
      if(event.target.checked)
      {
        this._selectedItemsRadio.push(ref);
        this._selectedItemsRadio = this._selectedItemsRadio.filter(m=>m==ref);
      }
    }
    else if(this.question.typeDeQuestion.ref == 't2')
    {
      if(event.target.checked)
      {
        this._selectedItemsCheckBox.push(ref);
      }
      else {
        this._selectedItemsCheckBox = this._selectedItemsCheckBox.filter(m=>m!=ref);
      }
    }
  }

  constructor(private  http: HttpClient) { }
}
