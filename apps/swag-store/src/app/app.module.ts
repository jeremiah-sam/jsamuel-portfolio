import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { RemoteEntryComponent } from './remote-entry/entry.component';
import { NxWelcomeComponent } from './remote-entry/nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports:[NxWelcomeComponent],
  providers: [],
  bootstrap: [RemoteEntryComponent],
})
export class AppModule {}
export { NxWelcomeComponent };

