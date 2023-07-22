import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getFiles() : Observable<any[]>{
    return this.http.get<any[]>(this.serverUrl + '/files')
  }

  getTablesInFile(fileName: string) : Observable<any[]>{
    return this.http.get<any[]>(this.serverUrl + '/file/' + fileName)
  }

  getTable(fileName: string, tableName: string){
    return this.http.get<any[]>(this.serverUrl + '/file/' + fileName + '/' + tableName)
  }
}
