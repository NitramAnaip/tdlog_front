import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'Cours',
    loadChildren: './Cours/Cours.module#CoursPageModule'
  },
  {
    path: 'Exercice',
    loadChildren: './Exercice/Exercice.module#ExercicePageModule'
  },
  {
    path: 'Grammaire',
    loadChildren: './Grammaire/Grammaire.module#GrammairePageModule'
  },
  {
    path: 'Conjugaison',
    loadChildren: './Conjugaison/Conjugaison.module#ConjugaisonPageModule'
  },
  {
    path: 'DetailMot',
    loadChildren: './DetailMot/DetailMot.module#DetailMotPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
