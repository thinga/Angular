import { Component, OnInit } from '@angular/core';
import { Hero } from '../Daten/hero';
import { HEROES } from '../Daten/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  
  constructor() { }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 

  ngOnInit(): void {
  }

}