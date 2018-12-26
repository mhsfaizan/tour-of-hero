import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _message:MessageService) {
   }
  getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }
}
