import { Component } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Company } from 'src/app/services/models/company.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  companies: Company[] = [];
  totalPages: number = 0;

  constructor(private companyService: CompanyServiceService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(page: number = 0): void {
    this.companyService.getAllCompanies(page).subscribe(response => {
      this.companies = response.content;
      this.totalPages = response.totalPages;
      console.log(this.companies);
    });
  }


}
