import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../../services/player.service'

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player:Player;
  id:string;

  constructor(private activatedroute:ActivatedRoute, 
    private playerService:PlayerService) { }

  ngOnInit(): void {

    this.id = this.activatedroute.snapshot.paramMap.get("id");

    this.playerService.getPlayerFromID(this.id).subscribe(response =>{
      this.player = response;
      console.log(this.player);
      
    })



  }

}
