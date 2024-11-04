package org.advertshandler.advert.event;

import lombok.Data;
import lombok.experimental.Accessors;
import org.advertshandler.advert.AdvertResource;

@Data
@Accessors(chain = true)
public class AdvertSaved implements Event {

    private AdvertResource advert;
}
