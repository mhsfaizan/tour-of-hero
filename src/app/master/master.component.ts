import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  hero:Hero;
  constructor(private _route:ActivatedRoute,private heroService:HeroService) { }

  ngOnInit() {
      this.getHero();
  }
  getHero():void{
    const id = this._route.snapshot.paramMap.get("id");
    this.heroService.getHero(parseInt(id))
    .subscribe((hero)=>{
      this.hero = hero;
    })    
  }
}
