import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { OrangeComponent } from './orange/orange.component';
import { RedComponent } from './red/red.component';

const routes: Routes = [
  {
    path: 'colors', component: ColorsComponent, children: [
      { path: 'black', component: BlackComponent, outlet: 'cl' },
      { path: 'white', component: WhiteComponent, outlet: 'cl' },

      { path: 'orange', component: OrangeComponent, outlet: 'cl1' },
      { path: 'red', component: RedComponent, outlet: 'cl1' },
    ]
  },
]
@NgModule({
  declarations: [
    ColorsComponent,
    BlackComponent,
    WhiteComponent,
    OrangeComponent,
    RedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ColorsModule { }
