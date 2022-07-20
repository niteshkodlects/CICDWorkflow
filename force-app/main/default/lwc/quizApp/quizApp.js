import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions=[
        {id:"Question 1",
        question:"Which is not template loop",
        answers :{
            a:"foreach",b:"iterator",c:"map loop"

        },correctAnswer:"c"},
        {id:"Question 1",
        question:"Which is not file in lwc",
        answers :{
            a:"Apex",b:"html",c:"js"

        },correctAnswer:"a"},
        {id:"Question 1",
        question:"Which is not template loop",
        answers :{
            a:"foreach",b:"iterator",c:"map loop"

        },correctAnswer:"c"},
    ]
}