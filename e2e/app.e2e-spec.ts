import { MontoyaSuperTestUnosquarePage } from './app.po';

describe('montoya-super-test-unosquare App', () => {
  let page: MontoyaSuperTestUnosquarePage;

  beforeEach(() => {
    page = new MontoyaSuperTestUnosquarePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
