import AppPage from "../../AppPage";

class CoursesList extends AppPage{
    get h1(){
        return browser.$('//h1');
    }
    get topMenuCourses(){
        return browser.$('//div[@id="site-menu"]//a[@qa="courses-link"]');
    }
    get name1(){
        return browser.$('//ul[@class="list-group"]//h4/a');
    }

    get description1(){
        return browser.$('//ul[@class="list-group"]//div[(text()="JavaScript")]');
    }

    get progress1(){
        return browser.$('//ul[@class="list-group"]//div/a');
    }

    get name2(){
        return browser.$('//ul[@class="list-group"]//div[2]//h4/a');
    }

    get description2(){
        return browser.$('//ul[@class="list-group"]//div[2]//div[(text()="kjkjkljhjhjhjklhkj;vfg;fgl;fsgkf;lgsjfklsdmlds")]');
    }

    get progress2(){
        return browser.$('//ul[@class="list-group"]//div/a/following::div/a');
    }

    get name3(){
        return browser.$('//ul[@class="list-group"]//div[3]//h4/a');
    }

    get description3(){
        return browser.$('//ul[@class="list-group"]//div[3]//div[(text()="nhjh;hu;")]');
    }

    get progress3(){
        return browser.$('//ul[@class="list-group"]//div[3]/a')
    }
}

export default new CoursesList();