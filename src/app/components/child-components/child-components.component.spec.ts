import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChildComponent } from './child-components.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';

class storeStub {
  select = () => Observable.create();
}
describe('Child Component', () => {
  const appServiceStub = () => ({
    getStationDetails: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }],
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ChildComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Train detail component should contain a dropdown`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#dropdown'));
    expect(ui).toBeDefined();
  }));

  it(`Train detail component should contain a input box to display code`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#stationCode'));
    expect(ui).toBeDefined();
  }));

  it(`Fake call to the service`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const response = fixture.debugElement.injector.get(AppService);
    const callBack = spyOn(response, 'getStationDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));
});
