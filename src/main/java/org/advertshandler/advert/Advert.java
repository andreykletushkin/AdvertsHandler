package org.advertshandler.advert;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Advert {

    @Id
    private String id;

    private String description;

    private String owner;

    private String location;

    private String price;

    private String title;

    private String link;

    private String time;


}
