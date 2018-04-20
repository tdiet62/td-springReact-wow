package com.capgemini.entities;

import com.contentful.java.cda.CDAEntry;
import lombok.Getter;
import lombok.Setter;

public class Link {

    @Getter
    @Setter
    private String title;
    @Getter
    @Setter
    private String id;

    public Link(CDAEntry linkedArticle) {
        setTitle(linkedArticle.getField("title"));
        setId(linkedArticle.id());
    }
}
