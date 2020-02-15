import AppPage from "../../AppPage";

class LoginData extends AppPage {

    open (){
        super.open('https://stage.pasv.us/user/login');
    };

    get email () {
        return browser.$('//input[@name="email"]');
    };
    //когда мы будем запускать свойство email => запускайте return...

    get password () {
        return browser.$('//input[@name="password"]');
    };

    get submitButton () {
        return browser.$('//button[@type="submit"]');
    };

    /* 1. Put all methods in one method-container login()
    2. So far i used Olya's credentials
    */
    login () {
        this.open();
        this.email.setValue('olya6avg@gmail.com');
        this.password.setValue('11111');
        this.submitButton.click();
        browser.pause(2000);
    };
}

export default new LoginData();




