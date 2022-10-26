import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesComponent } from './services/services.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { InscriptionprestataireComponent } from './inscriptionprestataire/inscriptionprestataire.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { BricolageComponent } from './bricolage/bricolage.component';
import { JardinageComponent } from './jardinage/jardinage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    AccueilComponent,
    ServicesComponent,
    ConnexionComponent,
    InscriptionComponent,
    InscriptionprestataireComponent,
    InscriptionClientComponent,
    BricolageComponent,
    JardinageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
