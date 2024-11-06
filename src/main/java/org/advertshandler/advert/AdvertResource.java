package org.advertshandler.advert;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class AdvertResource {

    private String id;

    private String description;

    private String owner;

    private String location;

    private String price;

    private String title;

    private String link;

    private String time;
}
