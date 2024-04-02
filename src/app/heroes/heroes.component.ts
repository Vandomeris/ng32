import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from '../hero.service';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, HeroDetailsComponent, MessagesComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  heroes: Hero[] = []

  getHeroes(): void{
    this.heroService.getHeroes().subscribe((heroesList) => this.heroes = heroesList)
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  selectedHero?: Hero

  onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add('Вы выбрали героя: ' + hero.name)
  }

}
