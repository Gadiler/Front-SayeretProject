import { Point } from 'src/app/models/point';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class PointsServerService {

  constructor(private httpClient: HttpClient) { }

  public getAllPoints(): Observable<Point[]> {
    return this.httpClient.get<Point[]>("http://localhost:8080/user/getAllPoints");
  }
  public getPointByName(name: string): Observable<Point>{
    return this.httpClient.get<Point>(`http://localhost:8080/user/getPointByName/${name}`);
  }
  public getAllAreas(): Observable<Area[]> {
    return this.httpClient.get<Area[]>("http://localhost:8080/user/getAllAreas");
  }
}
