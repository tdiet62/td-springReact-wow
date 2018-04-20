package com.capgemini.entities;

import com.contentful.java.cda.CDAEntry;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;


@JsonIgnoreProperties(value = { "entry" })
public class Article {

    @Getter
    @Setter
    private String title;
    @Getter
    @Setter
    private String shortDescription;
    @Getter
    @Setter
    private String longText;
    @Getter
    @Setter
    private Collection<Link> modules;

    public Article(CDAEntry article){
        setTitle(article.getField("title"));
        setShortDescription(article.getField("shortDescription"));
        setLongText(article.getField("textContent"));
        setLinks(article);
    }

    private void setLinks(CDAEntry article) {
        ArrayList<Link> links = new ArrayList<Link>();
        ArrayList<CDAEntry> articles = article.getField("articles");
        if(articles != null) {
            articles.forEach((module) -> {
                Link link = new Link(module);
                links.add(link);
            });
            setModules(links);
        }
    }

}
