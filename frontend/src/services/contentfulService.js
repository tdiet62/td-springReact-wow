import rp from 'request-promise'

class ContentfulService {


    getArticle(articleID){
        let port = window.location.port;
        let origin;
        if(port){
            origin = window.location.protocol+"//"+window.location.hostname + ":" + port;
        }else {
            origin = window.location.protocol + "//" + window.location.hostname + ":" + port;
        }

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