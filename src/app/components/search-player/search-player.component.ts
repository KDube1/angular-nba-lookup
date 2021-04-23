import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import{PlayerService} from '../../services/player.service';
import {Player} from '../../models/Player';


@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {
  @Output() getPlayers: EventEmitter<any> = new EventEmitter();

  name:string;
  players:Player[];


  constructor(private playerService: PlayerService) { }
  

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.playerService.getPlayers(this.name).subscribe(response =>{
      this.players = response.data;
      console.log(this.players);
    })
   
  }

}
