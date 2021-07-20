import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout/layout.module';
import { ControlDirective } from './core/controls/control.directive';
@NgModule({
  declarations: [AppComponent, ControlDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
