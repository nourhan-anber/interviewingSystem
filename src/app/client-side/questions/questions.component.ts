import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';
import { Question } from '../data';
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
  currentLevel: number;
  toWords = new ToWords();
  
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(result=>{
      this.currentQuestionId = result.questionId;
      this.currentLevel = result.level;
      this.fetchQuestions();
    });

  }

  fetchQuestions(){
    this.http.getLevelQuestion(this.currentLevel).subscribe((result: Question[])=>{
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
    }
  }

}
