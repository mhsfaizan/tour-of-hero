import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _heroService:HeroService) { }
  heroes:Hero[];
  ngOnInit() {
    this._heroService.getHeroes()
    .subscribe((heroes)=>{
      this.heroes = heroes;
      this.heroes = this.heroes.slice(0,5);
    })
  }
}
