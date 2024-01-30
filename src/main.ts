import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// the bootstrap will lanch the project


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));//this is a singlepage



platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err) => console.error(err));
