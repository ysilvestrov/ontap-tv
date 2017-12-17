import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {TAPLISTSETTINGS} from './mock-taplist-settings';
import {ITaplistSettings} from './taplist-settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SettingsService {

  private settingsUrl = 'api/settings';  // URL to web api

  constructor(private http: HttpClient) { }

  get(id: string): Observable<ITaplistSettings> {
    const url = `${this.settingsUrl}/${id}`;
    return this.http.get<ITaplistSettings>(url);
  }

}
