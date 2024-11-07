package org.advertshandler.advert;

import lombok.Data;

@Data
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
