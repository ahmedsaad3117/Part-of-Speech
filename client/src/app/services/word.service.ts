import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private _httpClient: HttpClient) { }

  //To get the random words
  getWords() {
    return this._httpClient.get("http://localhost:3000/words")
  }

  //To calc the rank
  calcResult(score: number) {
    return this._httpClient.post("http://localhost:3000/rank", { score })
  }
}
