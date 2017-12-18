import { Component, OnInit } from '@angular/core';
import {ITaplistItem} from '../taplist';
import {ITaplistSettings} from '../taplist-settings';
import {SettingsService} from '../settings.service';
import {TaplistService} from '../taplist.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-show-taplist',
  templateUrl: './show-taplist.component.html',
  styleUrls: ['./show-taplist.component.css']
})
export class ShowTaplistComponent implements OnInit {

  id: string;
  originalTaplist: ITaplistItem[];
  taplist: ITaplistItem[];
  settings: ITaplistSettings;
  objectKeys = Object.keys;
  startPosition: number = 0;
  timer: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taplistService:TaplistService,
    private settingsService:SettingsService
  ) {
    this.id = route.snapshot.paramMap.get('id')
  }

  getTaplist(): void {
    this.taplistService.get(this.id).subscribe(taplist => {
      this.originalTaplist = taplist;
      this.timer = Observable.timer(3000, 10000);
      this.timer.subscribe(_ => this.processTaplist());
      return taplist;
    });
  }

  getSettings(): void {
    this.settingsService.get(this.id).subscribe(settings => {this.settings = settings; this.getTaplist()});
  }

  processTaplist(){
    let start: number = 0;
    let end: number = this.originalTaplist.length;
    if (end > 16 ) {
      start = this.startPosition;
      end = start + 16;
      this.startPosition = end;
      if (end > this.originalTaplist.length) {
        end = this.originalTaplist.length;
        start = end - 16;
        this.startPosition = 0;
      }
    }
    this.taplist = this.originalTaplist.slice(start, end);
  }

  ngOnInit() {
    this.getSettings();
  }

}
