import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'black', component: BlackComponent },
  { path: 'white', component: WhiteComponent },
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ColorsModule { }
