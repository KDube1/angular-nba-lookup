import { Component, OnInit, Input } from '@angular/core';

import {Player} from '../../models/Player'

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
@Input() player:Player;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes ={
      player: true
    }
    return classes;
  }

}
