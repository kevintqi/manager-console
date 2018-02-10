import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private _showLanguage: boolean;
  private _settings: Settings;

  ngOnInit() {
    this._showLanguage = true;
    this._settings = new Settings('en');
  }

  get showLanguage() {
    return this._showLanguage;
  }
  set showLanguage(value: boolean) {
    this._showLanguage = value;
  }
  get settings(): Settings {
    return this._settings;
  }

  onSubmit() {
    // TODO - send settings
    console.log(JSON.stringify(this._settings));
  }
}
