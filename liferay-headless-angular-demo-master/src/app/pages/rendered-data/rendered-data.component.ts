import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LiferayService} from '../../services/liferay/liferay.service';

@Component({
  selector: 'app-rendered-data',
  templateUrl: './rendered-data.component.html',
  styleUrls: ['./rendered-data.component.css']
})
export class RenderedDataComponent implements OnInit {

  greeting: string;
  renderedContentURL: string;
  renderedContent: string;
  
  constructor(public activeRouter: ActivatedRoute, public liferay: LiferayService) {
  }

  ngOnInit() {	  
	  this.liferay.getRenderedContentURL().subscribe((renderedContentURL) => {
		  this.renderedContentURL = renderedContentURL;
		  
		  this.liferay.getRenderedContent(this.renderedContentURL).subscribe((renderedContent) => {
			this.renderedContent = renderedContent;
		  })
	  });
  }
}
