import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { EnemyComponent } from './enemy/enemy.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    EnemyComponent,
    BattlefieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
