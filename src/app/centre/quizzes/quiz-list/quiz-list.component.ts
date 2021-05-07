import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../controller/service/quiz.service';
import {Question} from '../../../controller/model/question.model';
import {Reponse} from '../../../controller/model/reponse.model';
import {TypeDeQuestion} from '../../../controller/model/type-de-question.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  get questions(): Array<Question> {
    return this.quizService.questions;
  }
  get types(): Array<TypeDeQuestion> {
    return this.quizService.types;
  }
  get reponses(): Array<Reponse> {
    return this.quizService.reponses;
  }
  ngOnInit(): void {
    this.quizService.findFormule();
    this.quizService.findFormuleRep();
    this.quizService.findRepByQuestion(this.question);
  }
  // tslint:disable-next-line:typedef
  public findRepByQuestion(question: Question){
    this.quizService.findRepByQuestion(question);
  }
  // @ts-ignore
  get question(): Question {
    return    this.quizService.question;
  }
}
