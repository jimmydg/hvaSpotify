import { HvaSpotifyPage } from './app.po';

describe('hva-spotify App', () => {
  let page: HvaSpotifyPage;

  beforeEach(() => {
    page = new HvaSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
