package org.advertshandler.advert;

import org.advertshandler.advert.event.AdvertSaved;
import org.advertshandler.advert.event.Event;
import org.mapstruct.Mapper;
import org.springframework.data.mongodb.core.ChangeStreamEvent;

@Mapper(componentModel = "spring")
public interface AdvertMapper {

    AdvertResource toResource(Advert advert);


    default Event toEvent(final ChangeStreamEvent<Advert> changeStreamEvent) {

        final Event event;

        switch (changeStreamEvent.getOperationType()) {
            case INSERT:
                AdvertResource advertResource = toResource(changeStreamEvent.getBody());
                event = new AdvertSaved().setAdvert(toResource(changeStreamEvent.getBody()));
                break;
            default:
                throw new UnsupportedOperationException(
                        String.format("The Mongo operation type [%s] is not supported", changeStreamEvent.getOperationType()));
        }

        return event;
    }




}
