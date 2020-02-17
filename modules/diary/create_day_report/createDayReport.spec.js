import LoginPage from "../../_PageObjects/LoginPage"
import CreateDayReport from "./CreateDayReport";

describe('CREATE DAY REPORT', () => {

    before('Should login as User', () => {
        LoginPage.open();
        LoginPage.login();
    });

    it('should click top menu `Diary`', () => {
        CreateDayReport.diaryButton.click();
        //browser.pause(500)
    });

    it('should click button `Create day report`', () => {
        CreateDayReport.createDayReportButton.click();
        //browser.pause(500)
    });

    it('should have correct `Create day report` title', () => {
        CreateDayReport.h1.getText().eq(CreateDayReport.pageReportCreate.h1);
    });

    it('should choose Morale' , () => {
        browser.newWindow('https://stage.pasv.us/diary');
        const selectBox = $(CreateDayReport.moraleInput);
        selectBox.selectByVisibleText(CreateDayReport.pageReportCreate.morale);
        //browser.pause(500)

    });

    it('should fill out study hours', () => {
        const element = $(CreateDayReport.hoursStudiedInput);
        element.setValue(CreateDayReport.pageReportCreate.hours);
        //browser.pause(500);
    });

    it ('should fill out `How was your day` form', () => {
        const element = $(CreateDayReport.descriptionInput);
        element.setValue(CreateDayReport.pageReportCreate.description);
        //browser.pause(500);
    });

    it('should check `I need help` checkbox', () => {
        const element = $(CreateDayReport.iNeedHelpInput);
        element.click();
        //browser.pause(500);
    });

    it('should check `I understood everything` checkbox', () => {
        const element = $(CreateDayReport.iUnderstoodEverythingInput);
        element.click();
        //browser.pause(500);
    });

    it('should check `Helped classmates` checkbox', () => {
        const element = $(CreateDayReport.helpedClassmatesInput);
        element.click();
        //browser.pause(500);
    });


    it('should check `Watched lectures` checkbox', () => {
        const element = $(CreateDayReport.watchedLecturesInput);
        element.click();
        //browser.pause(500);
    });


    it('should check `Read documentation` checkbox', () => {
        const element = $(CreateDayReport.readDocumentationInput);
        element.click();
        //browser.pause(500);
    });


    it('should check `Code practice` checkbox', () => {
        const element = $(CreateDayReport.codePractice);
        element.click();
        //browser.pause(500);
    });


    it('should click `Quiz practice` checkbox', () => {
        const element = $(CreateDayReport.quizPracticeInput);
        element.click();
        //browser.pause(500);
    });

    it('should click `Interview preparation` checkbox', () => {
        const element = $(CreateDayReport.interviewPreparationInput);
        element.click();
        //browser.pause(500);
    });

    it('should click `Recruiter phone call` checkbox', () => {
        const element = $(CreateDayReport.recruiterPhoneCall);
        element.click();
        //browser.pause(500);
    });

    it('should click `Interview technical screen` checkbox', () => {
        const element = $(CreateDayReport.interviewTechnicalScreen);
        element.click();
        //browser.pause(500);
    });

    it('should click `Interview onsite` checkbox', () => {
        const element = $(CreateDayReport.interviewOnsite);
        element.click();
        //browser.pause(500);
    });

    it('should click `Got a job offer` checkbox', () => {
        const element = $(CreateDayReport.gotAJobOffer);
        element.click();
        //browser.pause(5000);
    });

    it('should click `Save` button', () => {
        const element = $(CreateDayReport.reportSaveButton);
        element.click();
        //browser.pause(3000);
    });

});
