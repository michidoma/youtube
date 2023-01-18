import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesResolver } from './categories/categories.resolver';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultsComponent } from './results/results.component';
import { ResultsResolver } from './results/results.resolver';
import { WatchComponent } from './watch/watch.component';
import { WatchResolver } from './watch/watch.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    title: 'YouTube',
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'watch',
    component: WatchComponent,
    resolve: { watchData: WatchResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    title: 'Results',
    path: 'results',
    component: ResultsComponent,
    resolve: { resultsData: ResultsResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: { catData: CategoriesResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((p) => p.ProfileModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./modules/feed/feed.module').then((f) => f.FeedModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
