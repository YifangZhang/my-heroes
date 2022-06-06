import { Component, OnInit } from '@angular/core';

import { CharacterComponent } from '../character/character.component';
import { EnemyComponent } from '../enemy/enemy.component';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {

  /* define variables */
  curCharacter: CharacterComponent | undefined;
  curEnemy: EnemyComponent | undefined;
  distance: Number = 2;


  /** character: CharacterComponent, enemy: EnemyComponent , */
  constructor(dist: Number) { 

    //this.curCharacter = character;
    //this.curEnemy = enemy;
    this.distance = dist;

  }

  ngOnInit(): void {
    
  }

  getDistance(): Number {
    return this.distance;
  }

}
