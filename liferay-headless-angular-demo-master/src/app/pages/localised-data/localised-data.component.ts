import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiferayService} from '../../services/liferay/liferay.service';

@Component({
  selector: 'app-localised-data',
  templateUrl: './localised-data.component.html',
  styleUrls: ['./localised-data.component.css']
})
export class LocalisedDataComponent implements OnInit {

  greeting: string;
  localisedContent: string;
  
  constructor(public activeRouter: ActivatedRoute, public liferay: LiferayService) {
  }

  ngOnInit() {	  
	  this.liferay.getLocalisedContent().subscribe((localisedContent) => {
		this.localisedContent = localisedContent;
		console.log('localisedContent = ' + this.localisedContent);
	  });
  }
}
