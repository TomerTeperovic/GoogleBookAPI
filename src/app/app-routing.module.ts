import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";

const routes: Routes =[
    { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule) },
    { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
    { path: '', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
    exports: [RouterModule]
})
export class AppRoutingModule {}