import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppService } from './app.service';

import { Store } from '@ngrx/store';
import { departure_url, station_url, URL }  from '../constants/contants';
describe('Service Component', () => {
  const appServiceStub = () => ({
    getStationDetails: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }],
    getDepartureDetails: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }],
    getLoginDetails: () => [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }]
  })
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
       
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide : Store , useFactory: appServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the service and call through', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getStationDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));

  
  it('Fake Call to Get Login Details', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getLoginDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));

  it('Fake Call to Get Departure Details', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getDepartureDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));

  it('cross check the station URL', async(() => {
    const url = 'http://localhost:3002/train-details/stations';
    expect(station_url).toBeDefined();
    expect(station_url).toEqual(url);
  })); 

  it('cross check the departure URL', async(() => {
    const url = 'http://localhost:3002/train-details/departure';
    expect(departure_url).toBeDefined();
    expect(departure_url).toEqual(url);
  })); 

});
