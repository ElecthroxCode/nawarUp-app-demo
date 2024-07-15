import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilCompanyComponent } from './pages/perfil-company/perfil-company.component';
import { PerfilClientComponent } from './pages/perfil-client/perfil-client.component';
import { CompanyAccountComponent } from './pages/new-accounts/company-account/company-account.component';
import { NewAccountsComponent } from './pages/new-accounts/new-accounts.component';
import { CustomerAccountComponent } from './pages/new-accounts/customer-account/customer-account.component';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'company', component: PerfilCompanyComponent},
  {path: 'client', component: PerfilClientComponent},
  {path: 'new-company', component: CompanyAccountComponent},
  {path: 'new-customer', component: CustomerAccountComponent},
  {path: 'new-company-menu', component: NewAccountsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'help', component: HelpComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
