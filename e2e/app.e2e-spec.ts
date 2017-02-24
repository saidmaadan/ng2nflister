import { Ng2nflisterPage } from './app.po';

describe('ng2nflister App', () => {
  let page: Ng2nflisterPage;

  beforeEach(() => {
    page = new Ng2nflisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
