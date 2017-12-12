import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { HogService }         from './hog.service';
import { AppRoutingModule }   from './hog-routing.module';
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopupComponent }     from './topup/topup.component';
import { PosComponent }       from './pos/pos.component';
import { StationComponent }   from './station/station.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TopupComponent,
    PosComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
