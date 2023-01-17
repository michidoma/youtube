import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultsComponent } from './results/results.component';
import { ResultsGuard } from './results/results.guard';
import { ResultsResolver } from './results/results.resolver';
import { WatchComponent } from './watch/watch.component';
import { WatchGuard } from './watch/watch.guard';
import { WatchResolver } from './watch/watch.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'watch',
    component: WatchComponent,
    resolve: { watchData: WatchResolver },
    canActivate: [WatchGuard],
  },
  {
    path: 'results',
    component: ResultsComponent,
    resolve: { resultsData: ResultsResolver },
    canActivate: [ResultsGuard],
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
