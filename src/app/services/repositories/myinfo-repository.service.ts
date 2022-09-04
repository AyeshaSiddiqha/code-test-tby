import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../../shared/model/info/info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyinfoRepositoryService {

  private infoUrl = 'api/info';

  constructor(private http: HttpClient) { }

getInformation(): Observable<Info> {
  return this.http.get<Info>(this.infoUrl);
}

}
