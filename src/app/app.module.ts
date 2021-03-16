import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { addProductReducer } from './ngrx/product.reducer';
import { TrainDetailsComponent } from './components/train-details/train-details.component';
import { DepartureTableComponent } from './components/departure-table/departure-table.component';
import { AppService } from './service/app.service';
import { HttpModule } from '@angular/http';
import { localStorageSync } from 'ngrx-store-localstorage';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './common/pipes/truncate';
import { ChildComponent } from './components/child-components/child-components.component';
import {AlertComponent} from './common/alert-component/alert-component.component'

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['trainDetailsStore'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    TrainDetailsComponent,
    DepartureTableComponent,
    LoginComponent,
    TruncatePipe,
    ChildComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    StoreModule.forRoot({trainDetailsStore: addProductReducer}, {metaReducers})
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
