import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Guias } from './pages/guias/guias';
import { Faq } from './pages/faq/faq';
import { Unete } from './pages/unete/unete';
import { AppDetail } from './pages/app-detail/app-detail';
import { Agente } from './pages/agente/agente';
import { Politicas } from './pages/politicas/politicas';
import { Terminos } from './pages/terminos/terminos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'guias', component: Guias },
  { path: 'faq', component: Faq },
  { path: 'unete', component: Unete },
  { path: 'apps/:id', component: AppDetail },
  { path: 'agente', component: Agente },
  { path: 'politicas', component: Politicas },
  { path: 'terminos', component: Terminos }
];
