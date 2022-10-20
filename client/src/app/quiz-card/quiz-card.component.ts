import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';

import { Word } from './word';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  words: Word[] = []
  score: number = 0
  currenntIndex: number = 1
  currentWord: Word = this.words[this.currenntIndex]
  finelRank: string = ""
  options = ["verb", "noun", "adverb", "adjective"];

  constructor(private _wordService: WordService) { }

  ngOnInit(): void {
    this._wordService.getWords().subscribe((res) => {
      this.words = res["data" as keyof object] as Word[]
      this.currentWord = this.words[0]
    })
  }

  trackingScore() {
    this.score = this.score + 10
  }

  calcResult(score: number) {
    this._wordService.calcResult(score).subscribe(res => {
      this.finelRank = res["data" as keyof object]
    })
  }

  getNextWord(answer: string) {
    if (answer === this.words[this.currenntIndex - 1].pos) {
      this.trackingScore()
    }
    if (this.currenntIndex >= this.words.length) {
      this.calcResult(this.score)
    }
    this.currentWord = this.words[this.currenntIndex++]
  }
}
