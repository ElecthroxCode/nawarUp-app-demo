import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Company } from './models/company.model';
import { Observable } from 'rxjs';

//estructura de general que trae la api:
interface CompanyResponse {
  totalPages: number;
  totalElements: number;
  content: Company[];
}

@Injectable()
export class CompanyServiceService {
private readonly URL_COMAPNIES = 'http://localhost:8080/companies';
//inyectamos el servicio
 httpClient = inject(HttpClient);
  //con este obtenermos un observable de las compañias:
    getAllCompanies(page: number = 0, size: number = 2): Observable<CompanyResponse> {
      const params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());
        
      return this.httpClient.get<CompanyResponse>(`${this.URL_COMAPNIES}`, { params });
    }
  
}
