import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsModule } from './modules/colors/colors.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule,
    ColorsModule,
    AppRoutingModule,
    RouterModule.forRoot([], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
