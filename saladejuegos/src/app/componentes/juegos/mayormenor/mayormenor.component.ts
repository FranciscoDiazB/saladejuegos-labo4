import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Mazocartas } from './mazocartas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.scss'
})
export class MayormenorComponent implements OnInit {

  flagStartGame:boolean = false;
  remainingLives:number = 6;

  cardDeck:Mazocartas[] = [
    {id:0, palo:'Corazon', numero:1}, {id:1, palo:'Corazon', numero:2}, {id:2, palo:'Corazon', numero:3}, {id:3, palo:'Corazon', numero:4}, 
    {id:4, palo:'Corazon', numero:5}, {id:5, palo:'Corazon', numero:6}, {id:6, palo:'Corazon', numero:7}, {id:7, palo:'Corazon', numero:8}, {id:8, palo:'Corazon', numero:9},
    {id:9, palo:'Corazon', numero:10}, {id:10, palo:'Corazon', numero:11}, {id:11, palo:'Corazon', numero:12}, {id:12, palo:'Corazon', numero:13},
    {id:0, palo:'Pica', numero:1}, {id:1, palo:'Pica', numero:2}, {id:2, palo:'Pica', numero:3}, {id:3, palo:'Pica', numero:4}, 
    {id:4, palo:'Pica', numero:5}, {id:5, palo:'Pica', numero:6}, {id:6, palo:'Pica', numero:7}, {id:7, palo:'Pica', numero:8}, {id:8, palo:'Pica', numero:9},
    {id:9, palo:'Pica', numero:10}, {id:10, palo:'Pica', numero:11}, {id:11, palo:'Pica', numero:12}, {id:12, palo:'Pica', numero:13},
    {id:0, palo:'Diamante', numero:1}, {id:1, palo:'Diamante', numero:2}, {id:2, palo:'Diamante', numero:3}, {id:3, palo:'Diamante', numero:4}, 
    {id:4, palo:'Diamante', numero:5}, {id:5, palo:'Diamante', numero:6}, {id:6, palo:'Diamante', numero:7}, {id:7, palo:'Diamante', numero:8}, {id:8, palo:'Diamante', numero:9},
    {id:9, palo:'Diamante', numero:10}, {id:10, palo:'Diamante', numero:11}, {id:11, palo:'Diamante', numero:12}, {id:12, palo:'Diamante', numero:13},
    {id:0, palo:'Trebol', numero:1}, {id:1, palo:'Trebol', numero:2}, {id:2, palo:'Trebol', numero:3}, {id:3, palo:'Trebol', numero:4}, 
    {id:4, palo:'Trebol', numero:5}, {id:5, palo:'Trebol', numero:6}, {id:6, palo:'Trebol', numero:7}, {id:7, palo:'Trebol', numero:8}, {id:8, palo:'Trebol', numero:9},
    {id:9, palo:'Trebol', numero:10}, {id:10, palo:'Trebol', numero:11}, {id:11, palo:'Trebol', numero:12}, {id:12, palo:'Trebol', numero:13},
  ];

  randomCard!:Mazocartas;
  randomNumber:number = -1;
  nextCard!:Mazocartas;
  currentCard:Mazocartas = new Mazocartas(-1, '', 0);
  flagSuccess = false;
  flagError = false;
  flagDraw = false;
  flagEmptyDeck = false;
  points:number = 0;
  errorsIncreasing = 0;

  ngOnInit(): void {
    
    this.playGameMayorMenor('', true);
  }

  playGameMayorMenor(condition:string, startingGame:boolean){

    ///this.loseGame();
    this.resetFlags();
    this.pickRandomCard();
    if(!startingGame){
      this.guessNextCard(condition);
    }
    console.log('Next Number: ' + this.nextCard.numero);
    console.log('Current Number: ' + this.currentCard.numero);
    this.currentCard = this.nextCard;

  }

  pickRandomCard(){

    console.log('Array: ' + this.cardDeck.length);
    
    this.randomNumber =  Math.floor(Math.random() * this.cardDeck.length);
    
    for(let i = 0; i < this.cardDeck.length; i++){
      
      if(i == this.randomNumber){
        
        this.randomCard = this.cardDeck[i];
        this.nextCard = this.randomCard;
        this.cardDeck.splice(this.cardDeck.indexOf(this.randomCard), 1);
      }
    }
    console.log('Random: ' + this.randomNumber)
  }

  guessNextCard(condition:string){
    
    if(condition == 'HIGHER'){

      if(this.nextCard.numero > this.currentCard.numero){
        this.flagSuccess = true;
        this.modifyPoints('Success');
      }
      else if(this.nextCard.numero < this.currentCard.numero){
        this.flagError = true;
        this.loseHP();
        this.modifyPoints('Error');
      }
      else{
        this.flagDraw = true;
        this.modifyPoints('Draw');
      }
    }

    if(condition == 'LOWER'){

      if(this.nextCard.numero < this.currentCard.numero){
        this.flagSuccess = true;
        this.modifyPoints('Success');
      }
      else if(this.nextCard.numero > this.currentCard.numero){
        this.flagError = true;
        this.loseHP();
        this.modifyPoints('Error');
      }
      else{
        this.flagDraw = true;
        this.modifyPoints('Draw');
      }
    }
    
  }

  modifyPoints(condition:string){
    
    if(condition == 'Success'){
      
      this.points += 10;
    }
    else if(condition == 'Error'){
      this.errorsIncreasing++;
      this.points -= this.errorsIncreasing;
    }
    else{
      this.points += 5;
    }

    if(this.points < 0){
      this.points = 0;
    }
    
  }

  loseGame(){

    if(this.remainingLives == 0){
      (document.getElementById("contUp") as HTMLFormElement).hidden = true; 
      (document.getElementById("contDown") as HTMLFormElement).hidden = true; 
    }
  }

  resetFlags(){
    this.flagSuccess = false;
    this.flagError = false;
    this.flagDraw = false
  }

  startGame(){
    this.flagStartGame = true;
  }

  restartGame(){
    this.flagStartGame = false;
    this.resetFlags();
  }

  loseHP(){
    this.remainingLives--;
  }

}
