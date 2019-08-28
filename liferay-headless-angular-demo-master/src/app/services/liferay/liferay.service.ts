import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LiferayService {

  embedded : object [];
  
  constructor(public http: HttpClient) {
  }

  getHelloMessageFromJohn() {
	return "hello";
  }
  
  getRawData() {    
	let username = "test@liferay.com";
	let passwd = "test";
	let credentialsHash = this.encodeCredentials(username, passwd);

	let headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': credentialsHash
	});	
	
	const dataSub = new Subject<string>();
	this.http.get(
      "http://localhost:9090/o/headless-delivery/v1.0/sites/37378/structured-contents?filter=contains(title, 'F-TYPE thrills a plenty..')", {headers})
      .subscribe((data) => {
		dataSub.next(data['items'][0]['contentFields'][0].value.data);
      }, (err) => {
        console.log(err);
      });
    
	return dataSub;
  }
  
  getRenderedContentURL() {    
	let username = "test@liferay.com";
	let passwd = "test";
	let credentialsHash = this.encodeCredentials(username, passwd);

	let headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': credentialsHash
	});	
	
	const renderedContentURL = new Subject<string>();
	this.http.get(
      "http://localhost:9090/o/headless-delivery/v1.0/sites/37378/structured-contents?filter=contains(title, 'F-TYPE thrills a plenty..')", {headers})
      .subscribe((data) => {
		renderedContentURL.next(data['items'][0]['renderedContents'][0].renderedContentURL);
      }, (err) => {
        console.log(err);
      });
	
	return renderedContentURL;
  }   
  
  getRenderedContent(url: string) {    
		
	let username = "test@liferay.com";
	let passwd = "test";
	let credentialsHash = this.encodeCredentials(username, passwd);

	let headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': credentialsHash
	});	
	
	return this.http.get(url, {headers, responseType: 'text'});
  } 

  getLocalisedContent() {    
		
	let username = "test@liferay.com";
	let passwd = "test";
	let credentialsHash = this.encodeCredentials(username, passwd);

	let headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Accept-Language': 'es-ES',
		'Authorization': credentialsHash
	});	
	
	const dataSub = new Subject<string>();
	this.http.get(
      "http://localhost:9090/o/headless-delivery/v1.0/sites/37378/structured-contents?filter=contains(title, 'F-TYPE thrills a plenty..')", {headers})
      .subscribe((data) => {
		"Description:" + dataSub.next(data['items'][0]['contentFields'][0].value.data);
      }, (err) => {
        console.log(err);
      });
    
	return dataSub;
	
  }   
  
  getLiferayWebContent() {    
	let username = "test@liferay.com";
	let passwd = "test";
	let credentialsHash = this.encodeCredentials(username, passwd);

	let headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': credentialsHash
	});	
	
	const dataSub = new Subject<string>();
	this.http.get(
      "http://localhost:9090/o/headless-delivery/v1.0/sites/37378/structured-contents?filter=contains(title, 'F-TYPE thrills a plenty..')", {headers})
      .subscribe((data) => {
        console.log(data);
		//dataSub.next(data['items'].elements[0].contentFields.elements[0].value.data);
		dataSub.next(data['items'][0]['contentFields'][0].value.data);
		//let items = data['items'];
		//let content = items[0];
		//let contentFields = content['contentFields'];
		//let contentField = contentFields[0];
		//let contentRawData = contentField.value.data;
		//console.log(content);
		//console.log(contentRawData);
      }, (err) => {
        console.log(err);
      });
    
	return dataSub;
  }  
  
  encodeCredentials(username: string, passwd: string) {
    let token = username + ":" + passwd;
	return "Basic " + btoa(token);
  }

}
