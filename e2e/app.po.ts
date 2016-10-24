import { browser, element, by } from 'protractor';

export class RedditClonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('reddit-root h1')).getText();
  }
}
