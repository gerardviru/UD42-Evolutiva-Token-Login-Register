import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  character: any = null;

  constructor(private characterservicio: CharacterService) { }

  ngOnInit(): void {

    this.character = this.characterservicio.getCharacter();
  }

}
