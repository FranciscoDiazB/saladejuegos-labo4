import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PosicionLetra } from './posicion-letra';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss'
})
export class AhorcadoComponent implements OnInit {


  dataAuth = inject(AuthService);
  flagStartGame:boolean = false;
  flagWrongLetter:boolean = false;
  guessingWords:string[] = ['MARIANO','JORGE','CACATUA','SOL','MELANCOLIA']; 
  errorNumber:number = 0;
  randomNumber!:number;
  randomWord!:string;
  letterGuessed:string = '';
  letterRepeated!:boolean;
  positionLetterRepeated:PosicionLetra[] = [];
  rightLetter:number = 0;
  countErrorPoints:number = 0;
  points:number = 0;
  guessedWordRight:boolean = false;

  ngOnInit(): void {
    this.pickRandomWord();
  }

  pickRandomWord(){
    console.log('Array: ' + this.guessingWords.length);
    
    this.randomNumber =  Math.floor(Math.random() * this.guessingWords.length);

    for(let i = 0; i < this.guessingWords.length; i++){

      if(this.randomNumber == i){

        this.randomWord = this.guessingWords[i];
        this.guessingWords.splice(this.guessingWords.indexOf(this.randomWord), 1);
      }
    }
  }

  wordGuessedRight(){

    console.log(this.randomWord);

    if(this.rightLetter == this.randomWord.length){
      
      this.pickRandomWord();
      this.rightLetter = 0;
      this.guessedWordRight = true;
      this.points += 50;
      setTimeout('', 3000);
    }
  }

  guessLetter(letter:string){

    this.letterRepeated = false;
    this.letterGuessed = letter;

    if(this.randomWord.includes(letter)){

      console.log("Incluye " + letter)

      for(let i = 0; i < this.randomWord.length; i++){

        if(this.randomWord[i] == letter && this.letterRepeated == false){
          
          let newPosition = new PosicionLetra(i, letter);

          this.rightLetter++;
          this.positionLetterRepeated.push(newPosition);
          this.points+=10;
        }
      }
      console.log(this.rightLetter);
    }
    else{
      this.flagWrongLetter = true;
      console.log("NO incluye " + letter)
      this.errorNumber++;
      this.countErrorPoints+=1;
      this.points-=this.countErrorPoints;
    }

    if(this.points < 0){
      this.points = 0;
    }
    this.positionGuessedLetters();
    this.wordGuessedRight();
  }


  positionGuessedLetters(){

    for(let i = 0; i < this.positionLetterRepeated.length; i++){
      console.log(this.positionLetterRepeated[i])
    }

  }

  startGame(){
    this.flagStartGame = true;
  }

  restartGame(){
    this.flagStartGame = false;
    this.flagWrongLetter = false;
    this.errorNumber = 0;
  }  
}
