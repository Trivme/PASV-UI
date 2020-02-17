import AppPage from '../AppPage';

class CoursesPage extends AppPage {
    get h1() {
        return browser.$('//h1');
    }

    get title() {
        return browser.$('//div[@class="container"]//span[@id="site-name"]');
    }

    open() {
        super.open('https://stage.pasv.us/course')
    }
}

export default new CoursesPage();