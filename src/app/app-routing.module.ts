import { JardinageComponent } from './jardinage/jardinage.component';
import { BricolageComponent } from './bricolage/bricolage.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { InscriptionprestataireComponent } from './inscriptionprestataire/inscriptionprestataire.component';
import { ContentComponent } from './content/content.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "accueil", component: ContentComponent},
  {path:"services", component: ServicesComponent},
  {path:"connexion", component: ConnexionComponent },
  {path:"inscription", component:InscriptionComponent},
  {path:"inscriptionprestataire",component:InscriptionprestataireComponent},
  {path:"inscriptionClient",component:InscriptionClientComponent},
  {path:"Bricolage",component:BricolageComponent},
  {path:"jardinage",component:JardinageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
