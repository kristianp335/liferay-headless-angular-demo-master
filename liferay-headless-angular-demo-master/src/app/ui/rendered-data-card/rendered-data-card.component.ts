import {Component, OnInit} from '@angular/core';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-rendered-data-card',
  templateUrl: './rendered-data-card.component.html',
  styleUrls: ['./rendered-data-card.component.css']
})
export class RenderedDataCardComponent implements OnInit {

  darkMode: boolean;

  constructor(public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

}
