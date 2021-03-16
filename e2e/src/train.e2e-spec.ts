import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Train-details App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should contain ID in login component', async () => {
    expect(element(by.id('username'))).toBeDefined();
  });

  it('should be contain image in train detail component', async () => {
    expect(element(by.id('profile-img'))).toBeDefined();
  });

  it('Should contain station code in train detail component', async () => {
    element(by.id('stationCode')).click();
  });

  it('Expect Table to be present', async () => {
    element(by.css('.table-striped')).click();
    expect( element(by.css('.table-striped'))).toBeDefined();
  });
  it('Expect Company Info to be defined', async () => {

    expect( element(by.css('.company__info'))).toBeDefined();
  });

  it('Submit button to find departure details should be present', async () => {
    expect( element(by.css('.btn-signin'))).toBeDefined();
  });
});
