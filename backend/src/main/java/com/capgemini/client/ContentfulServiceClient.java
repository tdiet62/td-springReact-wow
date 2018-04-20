package com.capgemini.client;


import com.capgemini.contentfulServices.ContentfulService;
import com.capgemini.contentfulServices.impl.ContentfulClient;
import com.contentful.java.cda.CDAArray;
import com.contentful.java.cda.CDAClient;
import com.contentful.java.cda.CDAEntry;
import com.contentful.java.cda.CDASpace;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentfulServiceClient implements ContentfulService {


    @Autowired
    ContentfulClient clientService;

    CDAClient client;

    @Override
    public CDASpace getSpace() {
        return this.getClient().fetchSpace();
    }


    public CDAEntry getIntro() {
        CDAArray entries = getClient().fetch(CDAEntry.class).withContentType("introduction").all();
        CDAEntry intro = (CDAEntry) entries.entries().values().toArray()[0];
        return intro;
    }

    public CDAEntry getArticle(String articleID) {
        return getClient().fetch(CDAEntry.class).one(articleID);
    }

    private CDAClient getClient() {
        if (this.client == null) {
            this.client = this.clientService.getClient();
        }
        return this.client;
    }
}
