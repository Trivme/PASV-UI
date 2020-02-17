import AppPage from "../../AppPage";

class CoursesList extends AppPage{
    get h1(){
        return $('//h1');
    }
    get topMenuCards(){
        return $('//div[@id="site-menu"]//a[@qa="courses-link"]');
    }
    get name1(){
        return $('//ul[@class="list-group"]//h4/a');
    }

    get description1(){
        return $('//ul[@class="list-group"]//div[(text()="JavaScript")]');
    }

    get progress1(){
        return $('//ul[@class="list-group"]//div/a');
    }

    get name2(){
        return $('//ul[@class="list-group"]//div[2]//h4/a');
    }

    get description2(){
        return $('//ul[@class="list-group"]//div[2]//div[(text()="kjkjkljhjhjhjklhkj;vfg;fgl;fsgkf;lgsjfklsdmlds")]');
    }

    get progress2(){
        return $('//ul[@class="list-group"]//div/a/following::div/a');
    }

    get name3(){
        return $('//ul[@class="list-group"]//div[3]//h4/a');
    }

    get description3(){
        return $('//ul[@class="list-group"]//div[3]//div[(text()="nhjh;hu;")]');
    }

    get progress3(){
        return $('//ul[@class="list-group"]//div[3]/a')
    }
}

export default new CoursesList();
