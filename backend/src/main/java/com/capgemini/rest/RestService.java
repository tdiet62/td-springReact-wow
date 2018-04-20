package com.capgemini.rest;


import com.capgemini.client.ContentfulServiceClient;
import com.capgemini.entities.Article;
import com.contentful.java.cda.CDAEntry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RestService {
    private static Logger logger = LoggerFactory.getLogger(RestService.class);

    @Autowired
    private ContentfulServiceClient service;

    @RequestMapping(
            path = ("/getIntro"),
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public ResponseEntity<Article> getIntroduction() {
        CDAEntry intro = this.service.getIntro();
        return new ResponseEntity<>(new Article(intro), HttpStatus.OK);
    }
    @RequestMapping(
            path = ("/getArticle"),
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public ResponseEntity<Article> getArticle(@RequestParam("articleID") String articleID) {
        logger.info(articleID);
        CDAEntry article = this.service.getArticle(articleID);
        return new ResponseEntity<>(new Article(article), HttpStatus.OK);
    }

}
