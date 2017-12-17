import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ITaplistItem, TaplistItem} from './taplist';
import {TAPLISTITEM} from './mock-taplist';
import {ITaplistSettings} from './taplist-settings';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TaplistService{

  private taplistUrl = 'api/taplist';  // URL to web api

  constructor(private http: HttpClient) { }

  get(id: string): Observable<ITaplistItem[]> {
    const url = `${this.taplistUrl}/${id}`;
    return this.http.get<ITaplistItem[]>(url);
  }
}
