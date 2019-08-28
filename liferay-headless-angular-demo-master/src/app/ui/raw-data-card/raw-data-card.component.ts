import {Component, OnInit} from '@angular/core';
import {UiService} from '../../services/ui/ui.service';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-raw-data-card',
  templateUrl: './raw-data-card.component.html',
  styleUrls: ['./raw-data-card.component.css']
})
export class RawDataCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
