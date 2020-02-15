import { expect } from 'chai';
import LoginData from "./LoginData";
import ProfilePage from "./ProfilePage";

describe('PROFILE PAGE (Negative Test)', () => {
  it('should open the Profile_page', () => {
    LoginData.login();
    browser.pause(2000)
  });

  it('should have incorrect h1 title', function () {
    const actual= ProfilePage.h1.getText();
    const expected='Test estovich';
    expect(actual).eq(expected);
  });
});
