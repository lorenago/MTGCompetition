import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

class Player {
  id: Number;
  name: String;
  life: Number;
}

class Match {
  local: String;
  visit: String;
  round: Number;
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public newTournament: String;
  public players: Player[] = [];
  public matchs: Match[] = [];
  public newPlayerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newPlayerForm = fb.group({
      id: new FormControl(''),
      playerName: new FormControl('', Validators.required),
      life: new FormControl(20, Validators.min(0))
    });
   }

  ngOnInit() {
    this.onClear();
    this.title = 'Torneos locales';
    this.subtitle =  'Próximos enfrentamientos:';
    this.newTournament = 'Crear un nuevo torneo';
    this.players = [];
    this.matchs = [
      {local: 'Lore', visit: 'Alber', round: 1},
      {local: 'Jose', visit: 'Luismi', round: 1},
      {local: 'Jose', visit: 'Alber', round: 2},
      {local: 'Lore', visit: 'Luismi', round: 2},
      {local: 'Jose', visit: 'Lore', round: 3},
      {local: 'Luismi', visit: 'Alber', round: 3}
    ];
  }

  addNewPlayer(): void {
    this.players.push({
      id: this.players.length + 1,
      name: this.newPlayerForm.value.playerName,
      life: 20
    });
    this.onClear();
  }

  deletePlayer(playerId): void {
    const index = this.players.map(e => e.id).indexOf(playerId);
    this.players.splice(index, 1);
  }

  matchMaker(): void {

  }

  onClear(): void {
    this.newPlayerForm.reset();
  }


}
