package org.advertshandler.advert;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-10-21T22:19:23+0200",
    comments = "version: 1.6.2, compiler: javac, environment: Java 17.0.11 (Oracle Corporation)"
)
@Component
public class AdvertMapperImpl implements AdvertMapper {

    @Override
    public AdvertResource toResource(Advert advert) {
        if ( advert == null ) {
            return null;
        }

        AdvertResource advertResource = new AdvertResource();

        return advertResource;
    }
}
