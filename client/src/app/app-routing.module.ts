import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCardComponent } from './quiz-card/quiz-card.component';

const routes: Routes = [
  { path: '', component: QuizCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
