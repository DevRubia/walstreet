import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TradesComponent } from './components/trades/trades.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChartComponent } from './components/chart/chart.component';
import { StreetComponent } from './components/street/street.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'trades', component: TradesComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'charts', component: ChartComponent },
  { path: 'street', component: StreetComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
