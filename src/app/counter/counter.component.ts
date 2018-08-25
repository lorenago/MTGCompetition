import { Component, OnInit } from '@angular/core';
import { CustomIconService } from '../services/custom-icon.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  players = [
    {
      id: 1,
      name: 'Lore',
      life: 20
    },
    {
      id: 2,
      name: 'Alber',
      life: 9
    }
  ]

  public updateLife(player, quantity): void {
    player.life += Number(quantity);
  }

  constructor() { }

  ngOnInit() {
  }

}
