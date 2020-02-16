import AppPage from './../../AppPage';

class HomePage extends AppPage{
    get h1(){
        return browser.$('//h1');
    }
    get title() {
        return $('//div[@class="container"]//span[@id="site-name"]');
    }

    open(){
        super.open('https://stage.pasv.us/')
    }
}

export default new HomePage();

