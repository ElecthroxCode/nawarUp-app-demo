import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './dashboard/header/navbar/navbar.component';
import { CardComponent } from './dashboard/content/card/card.component';
import { CarouselComponent } from './dashboard/content/carousel/carousel.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilCompanyComponent } from './pages/perfil-company/perfil-company.component';
import { CompanyServicesComponent } from './pages/perfil-company/company-services/company-services.component';
import { AppointmentCompanyComponent } from './pages/perfil-company/appointment-company/appointment-company.component';
import { PerfilClientComponent } from './pages/perfil-client/perfil-client.component';
import { CompanyAccountComponent } from './pages/new-accounts/company-account/company-account.component';
import { CustomerAccountComponent } from './pages/new-accounts/customer-account/customer-account.component';
import { NewAccountsComponent } from './pages/new-accounts/new-accounts.component';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyServiceService } from './services/company-service.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    PerfilCompanyComponent,
    CompanyServicesComponent,
    AppointmentCompanyComponent,
    PerfilClientComponent,
    CompanyAccountComponent,
    CustomerAccountComponent,
    NewAccountsComponent,
    LoginComponent,
    HelpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [CompanyServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
