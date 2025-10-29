import { ContactsComponent} from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { Routes } from '@angular/router';

export const routes: Routes = [  { path: '', component: AboutComponent },          
  { path: 'about', component: AboutComponent },   
  { path: 'portfolio', component: PortofolioComponent }, 
  {path:'contacts',component:ContactsComponent},
  { path: '**', redirectTo: '' } ];
