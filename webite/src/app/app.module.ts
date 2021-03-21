import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';
import {Routes,RouterModule} from '@angular/router';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    FooterComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
