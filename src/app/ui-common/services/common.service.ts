import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private httpService: HttpClient) { }

  public fetchTemplateInformation(): Observable<any> {
    return this.httpService.get("./assets/data/template.json");
  }

  public fetchTableInformation(): Observable<any> {
    return this.httpService.get("./assets/data/data.json");
  }
}
