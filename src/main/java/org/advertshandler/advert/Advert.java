package org.advertshandler.advert;

import lombok.*;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;


@Data
@NoArgsConstructor
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
