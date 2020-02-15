import { expect } from 'chai';
import ProfilePage from './ProfilePage';
import LoginData from "./LoginData";

describe('PROFILE PAGE (Positive Test)', () => {
    it('should open the Profile_page', () => {
        LoginData.login();
        browser.pause(200)
    });

    it('should have correct h1 title', function () {
       const actual= ProfilePage.h1.getText();
       const expected='Test Testovich';
       expect(actual).eq(expected);
    });
});
