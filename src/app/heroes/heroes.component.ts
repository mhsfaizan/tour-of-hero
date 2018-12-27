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
  ngOnInit() {
    this.getHeroes();
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(){
    this._hero.getHeroes()
    .subscribe((heroes)=>{
      this.heroes = heroes;
    },(err)=>{
      console.log(err);
    });
  }
  
}
