import AppPage from './../../AppPage';

class ProfilePage extends AppPage {
    get h1() {
        return $('//h1');
    }
}

export default new ProfilePage();

