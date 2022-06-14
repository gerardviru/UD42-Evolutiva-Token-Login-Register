import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/character.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: Character = {
    name:'',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
  }
  submitted = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void { }

  saveCharacter(): void{
    const data= {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
    };

    this.characterService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }


    // Add New
  addCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
    };
    if (!data.name) {
      alert('Please add name!');
      return;
    }
  }

    newCharacter(): void{
      this.submitted = false;
      this.character = {
        name:'',
        status: '',
        species: '',
        gender: '',
        origin: '',
        location: '',
        image: '',
      };
    }
}
