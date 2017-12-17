import { Component, OnInit } from '@angular/core';
import {ITaplistItem} from './taplist';
import {TaplistService} from './taplist.service';
import {SettingsService} from './settings.service';
import {ITaplistSettings} from './taplist-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
}
