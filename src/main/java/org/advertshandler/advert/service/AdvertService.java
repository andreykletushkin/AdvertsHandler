package org.advertshandler.advert.service;


import com.mongodb.client.model.changestream.OperationType;
import lombok.RequiredArgsConstructor;
import org.advertshandler.advert.AdvertMapper;
import org.advertshandler.advert.Advert;
import org.advertshandler.advert.event.Event;
import org.springframework.data.mongodb.core.ChangeStreamOptions;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

@Service
@RequiredArgsConstructor
public class AdvertService {

    private final ReactiveMongoTemplate reactiveMongoTemplate;
    private final AdvertMapper advertMapper;

    public Flux<Event> listenToEvents() {
        final ChangeStreamOptions changeStreamOptions = ChangeStreamOptions.builder()
                .returnFullDocumentOnUpdate()
                .filter(Aggregation.newAggregation(
                        Aggregation.match(Criteria.where("operationType")
                                .in(OperationType.INSERT.getValue(),
                                        OperationType.REPLACE.getValue(),
                                        OperationType.UPDATE.getValue(),
                                        OperationType.DELETE.getValue()))))
                .build();

        return reactiveMongoTemplate.changeStream("adverts", changeStreamOptions, Advert.class)
                .map(advertMapper::toEvent);
    }

}
