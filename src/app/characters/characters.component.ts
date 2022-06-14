import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {

  characterService: CharacterService;
  characters: any = null;

  constructor(private characterservicio: CharacterService) {

    this.characterService = characterservicio;

  }

  ngOnInit(): void {

    this.characters = this.characterservicio.getCharacters();

  }

}
