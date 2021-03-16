import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login-component.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import {Router} from '@angular/router';

class storeStub {
  select = () => Observable.create();
}

class routerStub {
  select = () => Observable.create();
}
describe('Login Component', () => {
  const appServiceStub = () => ({
    getLoginDetails: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }],
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub },
        {provide:Router, useClass: routerStub}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.company_title'));
    expect(ui).toBeDefined();
  }));


  it(`Train detail component should have container for the user to enter values`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.container-fluid'));
    expect(ui).toBeDefined();
  }));

  it(`Fake call to the service`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const response = fixture.debugElement.injector.get(AppService);
    const callBack = spyOn(response, 'getLoginDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));
});
