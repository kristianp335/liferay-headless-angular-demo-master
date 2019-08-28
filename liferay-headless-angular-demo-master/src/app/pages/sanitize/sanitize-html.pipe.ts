import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'SanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer) {
  }

  transform(v:string):SafeHtml {
	//append localhost domain for documents & images
	v = v.replace('src="/documents/', 'src="http://localhost:8380/documents/');
    
	return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}