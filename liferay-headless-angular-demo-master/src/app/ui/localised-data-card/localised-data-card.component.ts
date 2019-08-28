import {Component, OnInit} from '@angular/core';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-localised-data-card',
  templateUrl: './localised-data-card.component.html',
  styleUrls: ['./localised-data-card.component.css']
})
export class LocalisedDataCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
