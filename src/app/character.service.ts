import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/characters';

@Injectable({
  providedIn: 'root',
})


export class CharacterService {
  charaters: any = null;
  character: any = null;


  constructor(private http: HttpClient) {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
    .subscribe(
        result => {
          this.charaters = result;
        }
      )
  }

  getCharacters() {
    return this.charaters;
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getCharacterId(id: string | null) {
    for (const character of this.charaters) {
      if (character.id === id) {
        return character;
      }
    }
  }

  getCharacter() {
    return this.character;
  }

  setCharacter(id: string | null) {
    this.character = this.getCharacterId(id);
  }
}
