import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { RutasComponent } from './rutas/rutas.component';

const rutas: Route[] = [
  { path: "", component: LoginComponent },
  { path: "rutas", component: RutasComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    LoginComponent,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
