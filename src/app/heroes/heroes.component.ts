import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(public _hero: HeroService) {
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this._hero.getHeroes()
    .subscribe((resp)=>{
      this.heroes = resp;
    },(err)=>{
      console.log(err);
    });
  }
  
}
