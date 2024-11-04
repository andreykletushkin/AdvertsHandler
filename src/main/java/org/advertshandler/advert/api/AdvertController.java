package org.advertshandler.advert.api;

import lombok.RequiredArgsConstructor;
import org.advertshandler.advert.event.Event;
import org.advertshandler.advert.event.HeartBeat;
import org.advertshandler.advert.service.AdvertService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;


@RestController
@RequestMapping("/adverts")
@RequiredArgsConstructor
public class AdvertController {

    Logger logger = LoggerFactory.getLogger(AdvertController.class);

    private final AdvertService advertService;

    @GetMapping("/events")
    public Flux<ServerSentEvent<Event>> getEventAdvertsStream(@AuthenticationPrincipal UserDetails userDetails) {

        final Flux<Event> beats = Flux.interval(Duration.ofSeconds(25))
                .map(sequence -> new HeartBeat());

        return Flux.merge(beats, advertService.listenToEvents())
                .map(event -> ServerSentEvent.<Event>builder()
                .retry(Duration.ofSeconds(5))
                .event(event.getClass().getSimpleName())
                .data(event).build());
    }

}
