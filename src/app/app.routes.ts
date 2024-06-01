import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs/jobs.component';
import { FavoritesComponent } from './jobs/favorites/favorites.component';
import { DetailsComponent } from './jobs/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    { path: 'jobs', component: JobsComponent },
    { path: 'favorites', component: FavoritesComponent },
    { path: 'jobs/:id', component: DetailsComponent }
];
