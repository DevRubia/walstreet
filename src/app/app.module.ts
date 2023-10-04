import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StreetComponent } from './components/street/street.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChartComponent } from './components/chart/chart.component';
import { TradesComponent } from './components/trades/trades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StreetComponent,
    ChatsComponent,
    CalendarComponent,
    ChartComponent,
    TradesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    LeafletModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
