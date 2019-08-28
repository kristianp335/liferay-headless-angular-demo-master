import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {LiferayService} from './services/liferay/liferay.service';
import {HttpClientModule} from '@angular/common/http';
import {RawDataCardComponent} from './ui/raw-data-card/raw-data-card.component';
import {RenderedDataCardComponent} from './ui/rendered-data-card/rendered-data-card.component';
import {LocalisedDataCardComponent} from './ui/localised-data-card/localised-data-card.component';
import {RawDataComponent} from './pages/raw-data/raw-data.component';
import {RenderedDataComponent} from './pages/rendered-data/rendered-data.component';
import {LocalisedDataComponent} from './pages/localised-data/localised-data.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {UiService} from './services/ui/ui.service';
import {SanitizeHtmlPipe} from './pages/sanitize/sanitize-html.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	RawDataCardComponent,
	RenderedDataCardComponent,
	LocalisedDataCardComponent,
	RawDataComponent,
	RenderedDataComponent,
	LocalisedDataComponent,	
    LoginComponent,
    SignupComponent,
	SanitizeHtmlPipe
  ],
  exports: [ SanitizeHtmlPipe ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	FontAwesomeModule
  ],
  providers: [
	LiferayService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
