import { Angular2formsApproachesPage } from './app.po';

describe('angular2forms-approaches App', function() {
  let page: Angular2formsApproachesPage;

  beforeEach(() => {
    page = new Angular2formsApproachesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
