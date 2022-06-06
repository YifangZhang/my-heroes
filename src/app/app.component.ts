import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/* import json file into the component */
import countries from "./data/countries.json";

import { BattlefieldComponent } from './battlefield/battlefield.component';
import { CharacterComponent } from './character/character.component';
import { EnemyComponent } from './enemy/enemy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-heroes';

  public countryList:{name: string, code: string}[] = countries;
}
