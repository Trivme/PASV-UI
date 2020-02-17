import AppPage from './../../AppPage';

class CreateDayReport extends AppPage{

    open() {
        super.open('https://stage.pasv.us/diary/create');
    }

    get h1 () {
        return browser.$('//h1');
    }

    get diaryButton (){
        return browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]')
    }

    get createDayReportButton (){
        return browser.$('//a[@class="btn btn-secondary"]')
    }

    get moraleInput (){
        return browser.$('form select[name="morale"]')
    }

    get hoursStudiedInput (){
        return browser.$('form input[name="hours"]')
    }

    get descriptionInput (){
        return browser.$('form textarea[name="description"]')
    }

    get iNeedHelpInput () {
        return browser.$('form input[label="I need help"]')
    }

    get iUnderstoodEverythingInput () {
        return browser.$('form input[label="I understood everything"]')
    }

    get helpedClassmatesInput () {
        return browser.$('form input[label="Helped classmates"]')
    }

    get  watchedLecturesInput () {
        return browser.$('form input[label = "Watched lectures"]')
    }

    get readDocumentationInput () {
        return  browser.$('form input[label = "Read documentation"]')
    }

    get codePractice () {
        return browser.$('form input[label = "Code practice"]')
    }

    get quizPracticeInput () {
        return browser.$('form input[label = "Quiz practice"]')
    }

    get interviewPreparationInput () {
        return browser.$('form input[label = "Interview preparation"]')
    }

    get  recruiterPhoneCall () {
        return browser.$('form input[label = "Recruiter phone call"]')
    }

    get  interviewTechnicalScreen () {
        return browser.$('form input[label = "Interview technical screen"]')
    }

    get interviewOnsite () {
        return browser.$('form input[label = "Interview onsite"]')
    }

    get gotAJobOffer () {
        return browser.$('form input[label = "Got a job offer"]')
    }

    get reportSaveButton () {
        return browser.$('form button[type="submit"]')
    }

  }

const pageReportCreate = {
    h1: 'Create day report',
    title: 'Progress Monitor',
    buttonText: 'Save',
    morale: '8',
    hours: '5',
    description: 'My description.',
};


export default new CreateDayReport();
module.exports = {pageReportCreate, CreateDayReport};

