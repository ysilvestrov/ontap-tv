import { Component, OnInit } from '@angular/core';
import {ITaplistItem} from '../taplist';
import {ITaplistSettings} from '../taplist-settings';
import {SettingsService} from '../settings.service';
import {TaplistService} from '../taplist.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-show-taplist',
  templateUrl: './show-taplist.component.html',
  styleUrls: ['./show-taplist.component.css']
})
export class ShowTaplistComponent implements OnInit {

  id: string;
  taplist: ITaplistItem[];
  settings: ITaplistSettings;
  objectKeys = Object.keys;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taplistService:TaplistService,
    private settingsService:SettingsService
  ) {
    this.id = route.snapshot.paramMap.get('id')
  }

  getTaplist(): void {
    this.taplistService.get(this.id).subscribe(taplist => this.taplist = taplist);
  }

  getSettings(): void {
    this.settingsService.get(this.id).subscribe(settings => {this.settings = settings; this.getTaplist()});
  }

  ngOnInit() {
    this.getSettings();
  }

}
