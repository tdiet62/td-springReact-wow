package com.capgemini.contentfulServices.impl;


import com.contentful.java.cda.CDAClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class ContentfulClient {


    @Value("${app.cdaSpaceKey}")
    private String cdaSpaceKey;

    @Value("${app.cdaAccessToken}")
    private String cdaAccessToken;




    public CDAClient getClient(){
        return CDAClient.builder().setSpace(this.cdaSpaceKey).setToken(this.cdaAccessToken).build();
    }
}
