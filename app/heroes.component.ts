import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit  {
  heroes: Hero[];
  selectedHero : Hero;
  constructor(
      private heroService: HeroService
  ){}
  getHeroes(): void {
    /*this.heroes = this.heroService.getHeroes();*/
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
        this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
