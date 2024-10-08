import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';
import { ProductDetailsComponent } from './features/shop/product-details/product-details.component';
import { TestErrorComponent } from './features/test-error/test-error.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { ServerErrorComponent } from './shared/component/server-error/server-error.component';
import { LoginComponent } from './features/account/login/login.component';
import { RegisterComponent } from './features/account/register/register.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent, canActivate: [authGuard] },
    { path: 'shop/:id', component: ProductDetailsComponent, canActivate: [authGuard] },
    // For Actual Project
    // { path: 'shop', component: ShopComponent, canActivate: [authGuard] },
    // { path: 'shop/:id', component: ProductDetailsComponent, canActivate: [authGuard] },
    { path: 'account/login', component: LoginComponent },
    // { path: 'cart', component: CartComponent },
    // { path: 'checkout', component: CheckoutComponent , canActivate: [authGuard] },
    { path: 'account/register', component: RegisterComponent },
    { path: 'test-error', component: TestErrorComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'server-error', component: ServerErrorComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
