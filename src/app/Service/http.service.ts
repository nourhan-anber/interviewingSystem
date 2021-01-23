import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rule, Question, User } from '../client-side/data';

@Injectable({
    providedIn: 'root',
})

export class HttpService {
    constructor() { }

    getCompanyName() {
        return new Observable((observer) => {
            observer.next('testCompany');
        })
    }
    getCompanyRules() {
        return new Observable((observer) => {
            const rules: Rule[] = [
                { 'id': 1, 'name': 'Read Carefully', 'checked': false },
                { 'id': 2, 'name': `Can't go back`, 'checked': false },
                { 'id': 3, 'name': `You'll be asked to explain one or more of your answers afterwards`, 'checked': false },
            ]
            observer.next(rules);
        })
    }
    getAllQuestions(){
        let questions: Question[] = [
            {'id': 1, 'explanation': '', 'title': 'Write an example of a simple HTML document with some header information and page content.', 'level': 1, 'questionType': 'WH question', 'weight': 10, 'expectedAnswer': 'HTML documents are all different, but they follow a basic structure of the head and body. Here you‘re checking the candidate has a good grasp of HTML document structure and basic HTML tags such as DOCTYPE, html, head, title, meta, body, h1, p, etc.', 'choices': []},
            {'id': 2, 'explanation': '', 'title': 'Briefly explain the CSS box model. Write some code snippets to describe show what you mean.', 'level': 1, 'questionType': 'WH question', 'weight': 10, 'expectedAnswer': 'The CSS box model refers to the layout and design of HTML elements. It‘s a box shape that wraps around each HTML element. A box is made up of its content, padding, border and margin. Content of the box, Padding, Border, Margin', 'choices': []},
            {'id': 3, 'explanation': '', 'title': 'In JavaScript, how can the style of an HTML element be changed?', 'level': 1, 'questionType': 'WH question', 'weight': 10, 'expectedAnswer': 'For example, to change the font size: document.getElementById(“someElement").style.fontSize = "20";', 'choices': []},
            {'id': 4, 'explanation': '', 'title': ' Build & Fix Model is suitable for programming exercises of ___________ LOC ', 'level': 1, 'questionType': 'Multiple choice', 'weight': 10, 'expectedAnswer': '100 or 200', 'choices': ['100-200', '200-400', '400-1000', 'above 1000']},
            {'id': 5, 'explanation': '', 'title': 'RAD stands for', 'level': 1, 'questionType': 'Multiple choice', 'weight': 20, 'expectedAnswer': 'None of the mentioned', 'choices': ['Relative Application Development', 'Rapid Application Development', 'Rapid Application Document', 'None of the mentioned']},
            {'id': 6, 'explanation': '', 'title': 'Which one of the following models is not suitable for accommodating any change?', 'level': 2, 'questionType': 'Multiple choice', 'weight': 10, 'expectedAnswer': 'Waterfall Model', 'choices': ['Build & Fix Model', 'Prototyping Model', 'RAD Model', 'Waterfall Model']},
            {'id': 7, 'explanation': '', 'title': 'Which is not one of the types of prototype of Prototyping Model?', 'level': 2, 'questionType': 'Multiple choice', 'weight': 20, 'expectedAnswer': 'Diagonal Prototype', 'choices': ['Horizontal Prototype', 'Vertical Prototype', 'Diagonal Prototype', 'Domain Prototype']},
            {'id': 8, 'explanation': '', 'title': 'How would you explain APIs to non-technical stakeholders?', 'level': 2, 'questionType': 'WH question', 'weight': 20, 'expectedAnswer': 'An API (Application Programming Interface) may be used for a web-based system, software library, computer hardware, and an operating or database system. It is a set of rules (code) and specifications that software programs can follow in order to communicate. Simply put, it works as an interface between different programs and facilitates their interaction.', 'choices': []}
        ];
        return new Observable((observer) =>{
        observer.next(questions);
        }); 
    }
    getLevelQuestion(level: number){
        return new Observable((observer)=>{
            let questionsList: Question[] = [];
            let index : number = 1;
            this.getAllQuestions().subscribe((questions: Question[])=>{
                questions.map((question:Question)=>{
                    if(question.level == level){
                        questionsList.push(question);
                    }
                });
                questionsList.map((question: Question)=>{
                    question.id = index;
                    index++;
                })
            })
            observer.next(questionsList);
        })
    }
    getAllUsers(){
        return new Observable((observer)=>{
            let users: User[] = [
                {id: 1, name: 'Ahmed Wasfy', email: 'ahmed.m.wasfy@gmail.com', phoneNumber: '4166487003', level: 2, answers: [], total: 0},
                {id: 2, name: 'Nourhan Anber', email: 'nourhan.anber@gmail.com', phoneNumber: '4162767022', level: 1, answers: [], total: 0},
                {id: 3, name: 'Ramy Anber', email: 'ramy.anber@gmail.com', phoneNumber: '4162767022', level: 1, answers: [], total: 0}
            ];
            observer.next(users);
        });

    }
    getCurrentUser(id : number){
        return new Observable((observer)=>{
            let user: User;
            this.getAllUsers().subscribe((users: User[])=>{
                users.map((u:User)=>{
                    if(u.id == id){
                        user = u;
                    }
                })
            })
            observer.next(user);
        })
    }
    addCurrentUser(id: number){
        this.getCurrentUser(id).subscribe((user:User)=>{
            localStorage.setItem('user', JSON.stringify(user));
        })
    }
    addNewInterview(user: User){
        localStorage.setItem('interviews', JSON.stringify(user));
    }
    updateCurrentUser(newUser: User){
        localStorage.setItem('user', JSON.stringify(newUser));
    }
}