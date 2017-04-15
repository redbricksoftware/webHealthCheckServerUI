import { WebHealthCheckServerUIPage } from './app.po';

describe('web-health-check-server-ui App', () => {
  let page: WebHealthCheckServerUIPage;

  beforeEach(() => {
    page = new WebHealthCheckServerUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
