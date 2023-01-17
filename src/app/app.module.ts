import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNavConfig, NgbNavModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NavConfigComponent } from './components/layouts/nav-config/nav-config.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavConfigComponent,
    AccueilComponent,
    ConnexionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    NgbDropdown,
    ReactiveFormsModule
  ],
  providers: [NgbNavConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
