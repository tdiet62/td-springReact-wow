package com.capgemini;

import com.capgemini.client.ContentfulServiceClient;
import com.contentful.java.cda.CDAArray;
import com.contentful.java.cda.CDAEntry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class SpringRunner implements CommandLineRunner {

    private static Logger logger = LoggerFactory.getLogger(SpringRunner.class);

    @Autowired
    ContentfulServiceClient client;

    @Override
    public void run(String... strings) throws Exception {
        logger.info("Runner running");
        logger.info(client.getSpace().toString());

        CDAEntry arr=client.getIntro();
        logger.info(arr.toString());
    }
}
