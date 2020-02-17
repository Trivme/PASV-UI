import { expect } from 'chai';
import LoginPage from "../../_PageObjects/LoginPage";
import CoursesList from "./CoursesList";

describe('COURSE LIST', () => {
    before('Login', () => {
        LoginPage.login();
        browser.pause(500);
    });

    it('should click top menu Cards', () => {
        CoursesList.topMenuCards.click();
    });

    it('should have correct title', () => {
        expect(CoursesList.h1.getText()).eq('Courses');
    });


    it('should click first item in the course list', () => {
        CoursesList.name1.click();
        browser.pause(500);
        expect(CoursesList.h1.getText()).eq('JS');
        CoursesList.topMenuCards.click();
    });

    it('should have description about course', () => {
        CoursesList.description1.click();
    });

    it('should click Progress of first course', () => {
        CoursesList.progress1.click();
        browser.pause(2000);
        expect(CoursesList.h1.getText()).eq('Course Report');
        CoursesList.topMenuCards.click();
    });


    it('should click second item in the course list', () => {
        CoursesList.name2.click();
        browser.pause(500);
        expect(CoursesList.h1.getText()).eq('jgkjkh');
        CoursesList.topMenuCards.click();
    });

    it('should have description about course', () => {
        CoursesList.description2.click();
    });

    it('should click Progress of second course', () => {
        CoursesList.progress2.click();
        browser.pause(2000);
        expect(CoursesList.h1.getText()).eq('Course Report');
        CoursesList.topMenuCards.click();
    });


    it('should click third item in the course list', () => {
        CoursesList.name3.click();
        browser.pause(500);
        expect(CoursesList.h1.getText()).eq('jglghg');
        CoursesList.topMenuCards.click();
    });

    it('should have description about course', () => {
        CoursesList.description3.click();
    });

    it('should click Progress of third course', () => {
        CoursesList.progress3.click();
        browser.pause(2000);
        expect(CoursesList.h1.getText()).eq('Course Report');
        CoursesList.topMenuCards.click();
    });

});
