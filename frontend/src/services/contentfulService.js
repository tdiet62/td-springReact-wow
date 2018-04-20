import rp from 'request-promise'

class ContentfulService {


    getArticle(articleID){
        const port = 8080
        const origin = window.location.protocol+"//"+window.location.hostname + ":" + port;

        const options ={
            json:true
        }
        if(articleID){
            options.qs={articleID};
            options.uri= origin+"/api/getArticle"
        }else{
            options.uri= origin+"/api/getIntro"
        }
        return rp(options);
    }
}

export default ContentfulService;