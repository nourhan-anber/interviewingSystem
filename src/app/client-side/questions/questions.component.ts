import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';
import { Question, User } from '../data';
import { ToWords } from 'to-words';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionsList: Question[];
  currentQuestionId: number;
  currentQuestion: Question;
  currentUser: User;
  currentUserId: number;
  toWords = new ToWords();
  finalQuestion: boolean;
  answer;

  constructor(private http: HttpService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(result=>{
      this.fetchCurrentUser();
      this.currentQuestionId = result.questionId;
      this.currentUserId= result.userId;
      this.fetchQuestions();
      
    });

  }

  fetchCurrentUser(){
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser);
  }
  fetchQuestions(){
    this.http.getLevelQuestion(this.currentUser.level).subscribe((result: Question[])=>{
      console.log(result);
      this.questionsList = result;
    })
    this.getCurrentQuestion();
  }

  getCurrentQuestion(){
    if(this.questionsList){
      this.questionsList.map((question:Question)=>{
        if(question.id == this.currentQuestionId){
          this.currentQuestion = question;
        }
      })
      this.checkFinalQuestion();
    }
  }

  calculateTotal(){
    console.log(this.currentUser.total);
    if(this.currentQuestion.expectedAnswer.includes(this.answer)){
      console.log('correct!')
      this.currentUser.total += this.currentQuestion.weight;
    }
  }
  checkFinalQuestion(){
    if(this.currentQuestionId == this.questionsList.length){
      this.finalQuestion = true;

    }
  }

  addCurrentAnswerToList(){
    this.calculateTotal();
    this.currentUser.answers.push(this.answer);
    this.http.updateCurrentUser(this.currentUser);
  }

  finalStep(){
    this.addCurrentAnswerToList();
    this.http.addNewInterview(this.currentUser);
    localStorage.removeItem('user');
  }
}
