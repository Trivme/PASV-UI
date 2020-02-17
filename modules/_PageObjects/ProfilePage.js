import AppPage from '../AppPage';

class ProfilePage extends AppPage{
    get h1(){
        return $('//h1');
    }

    get createDayReportButton(){
        return $('//a[@class=\'btn btn-secondary\']');
    }

    get likeButton () {
        return $('//button[@class=\'btn btn-outline-primary btn-sm\']');
    }

    get likeNotification () {
        return $('//h4[@class=\'notification-title\']');
    }

    get updateListButton () {
        return $('//button[@class=\'btn btn-secondary\']');
    }

    get updateListNotification () {
        return $('//h4[@class=\'notification-title\']');
    }

    get codeWarsIcon () {
        return $('//a[3]//img[1]');
    }

    get codeWarsURL () {
        return ('https://www.codewars.com/users/ArtAm');
    }

    get facebookIcon () {
        return $('//a[1]//img[1]');
    }

    get facebookURL () {
        return ('https://www.facebook.com/arthur.aminov.562');
    }

    get linkedInIcon () {
        return $('//a[2]//img[1]');
    }

    get linkedInURL () {
        return ('https://www.linkedin.com/in/arthur-aminov-14081b18b/');
    }
}

export default new ProfilePage();

