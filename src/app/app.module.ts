import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule, IgxButtonModule, IgxComboModule, IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxTimePickerModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeGridComponent } from './le-grid/le-grid.component';
import { EnterLeComponent } from './enter-le/enter-le.component';
import { LeInputComponent } from './le-input/le-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeGridComponent,
    EnterLeComponent,
    LeInputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule.forRoot(),
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxButtonModule,
    IgxComboModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxMaskModule,
    IgxTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
