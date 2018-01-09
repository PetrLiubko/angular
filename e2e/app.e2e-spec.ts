import { FieldPage } from './app.po';

describe('field App', function() {
  let page: FieldPage;

  beforeEach(() => {
    page = new FieldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
