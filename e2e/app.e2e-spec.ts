import { HogPage } from './app.po';

describe('hog App', function() {
  let page: HogPage;

  beforeEach(() => {
    page = new HogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
