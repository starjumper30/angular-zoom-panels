import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';
import { ZoomPanelModule } from './zoom-panel/zoom-panel.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ZoomPanelModule ],
  declarations: [ AppComponent, LayoutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
