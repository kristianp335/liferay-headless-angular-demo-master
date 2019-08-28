import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiferayService} from '../../services/liferay/liferay.service';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.css']
})
export class RawDataComponent implements OnInit {

  greeting: string;
  rawContent: string;
  
  constructor(public activeRouter: ActivatedRoute, public liferay: LiferayService) {
  }

  ngOnInit() {
	  this.liferay.getRawData().subscribe((rawContent) => { 
		this.rawContent = rawContent;
	  });
	  
  }

}
