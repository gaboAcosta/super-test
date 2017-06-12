import { SuperTestUnosquarePage } from './app.po';

describe('super-test-unosquare App', () => {
  let page: SuperTestUnosquarePage;

  beforeEach(() => {
    page = new SuperTestUnosquarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
