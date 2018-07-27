import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  title: String;
  subtitle: String;
  confrontations: Array<object>;
  
  constructor() { }
  
  ngOnInit(){
    this.title = 'My MTG competition app!';
    this.subtitle =  'Enfrentamientos:';
    this.confrontations = [
      {local: 'Lore', visit: 'Alber', round: 1},
      {local: 'Jose', visit: 'Luismi', round: 1},
      {local: 'Jose', visit: 'Alber', round: 2},
      {local: 'Lore', visit: 'Luismi', round: 2},
      {local: 'Jose', visit: 'Lore', round: 3},
      {local: 'Luismi', visit: 'Alber', round: 3}
    ];
  }

  public getConfrontations() {

  }


}
