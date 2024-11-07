# Microservice-Anwendung zur Bereitstellung und Übermittlung von Anzeigen an eine Web-App
Unterstützt einen ereignisbasierten SSE-Reader, der Änderungen in MongoDB erkennt.
Eine neue Anzeige aktiviert den Flux-Subscriber und sendet das Ereignis über den REST-Controller als Server-Sent Event (SSE). 
Dieses Ereignis wird in der Webanwendung von der Event-JS-Klasse genutzt.

## Anforderungen an Software und Hardware

| Komponente         | Version/Details                          |
|--------------------|------------------------------------------|
| **Java**           | v17.0                                    |
| **Spring Boot**    | v2.7.18                                  |
| **Kontainer**      | Docker                                   |
| **Gradle**         | v3.8                                     |

## Anwendung erstellen und starten

Die Anwendung kann als Docker-Container bereitgestellt werden, was der empfohlene Weg zur Ausführung ist. Um den Docker-Container zu erstellen, sind folgende Schritte erforderlich:

1. Im Verzeichnis AdvertisementsHandler den folgenden Befehl ausführen:
    ```bash
   .\gradlew clean build
    ```
   Als Ergebnis wird eine JAR-Datei erstellt: <br>
`build/libs/adverdshandler-1.0.jar` <br>
Diese JAR-Datei wird später im Docker-Container verwendet. <br>
2. Nun können wir die Docker-Container erstellen und starten:
    ```bash
   docker compose up
    ```
Es werden zwei Docker-Container gestartet:

- MySQL: NoSQL-Datenbank, um Daten wie Nachrichten und Anzeigen zu speichern.
- Spring Boot

## REST-Schnittstellen-Beispiele

### Anmeldung

**Methode:** `POST`  
**URL:** `localhost:8090/auth/signup`

**Request Body:**
```json
{
  "username": "Andrey",
  "password": "0987dfczcvb",
  "fullname": "Andrey Kletushkin"
}
```
**Response:**
```json
{
  "username": "Andrey",
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbmRyZXkiLCJyb2xlcyI6WyJGUkVFX1RJRVIiXSwiaWF0IjoxNzMwODEwNzE1LCJleHAiOjE3MzA4MTQzMTV9.umBBFlwN7Rb5wI629lk6nlHOz_lO4BSGuvdcPi9MItY"
}
```

### Login

**Methode:** `POST`  
**URL:** `localhost:8090/auth/login`

**Request Body:**
```json
{
  "username": "Andrey",
  "password": "0987dfczcvb"
}

```
**Response:**
```json
{
  "username": "Andrey",
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbmRyZXkiLCJyb2xlcyI6WyJGUkVFX1RJRVIiXSwiaWF0IjoxNzMwODEwNzE1LCJleHAiOjE3MzA4MTQzMTV9.umBBFlwN7Rb5wI629lk6nlHOz_lO4BSGuvdcPi9MItY"
}
```


### Benutzer-Details abrufen

**Methode:** `GET`  
**URL:** `localhost:8090/auth/user`

**Header:**
`Authorization: Bearer $token`

**Response:**
```json
  {
  "id": 1,
  "username": "Andrey",
  "fullname": "Andrey Kletushkin",
  "roles": ["FREE_TIER"],
  "enabled": true,
  "accountNonExpired": true,
  "credentialsNonExpired": true,
  "accountNonLocked": true,
  "authorities": [
    {
      "authority": "FREE_TIER"
    }
  ]
}
```

### Wechsel das Konto auf Premium

**Methode:** `PUT`  
**URL:** `localhost:8090/auth/premium`

**Header:**  
`Authorization: Bearer $token`

**Response:**
```json
{
    "id": 1,
    "username": "Andrey",
    "fullname": "Andrey Kletushkin",
    "roles": [
        "FREE_TIER",
        "COMMERCIAL_USE"
    ],
    "enabled": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "authorities": [
        {
            "authority": "FREE_TIER"
        },
        {
            "authority": "COMMERCIAL_USE"
        }
    ]
}

### Ereignisse von Anzeigen empfangen

**Methode:** `GET`  
**URL:** `localhost:8090/adverts/events`

**Header:**
`Authorization: Bearer $token`

**Response:**
 Stream von Anzeigen (z.B. von eBay Kleinanzeigen)
{
    "advert": {
        "id": "672d2305346459723ea48ccf",
        "description": "Hübsche 2-Raum-Wohnung zur Vermietung - auch komplett möbliert!Diese charmante 2-Raum-Wohnung im 1. Obergeschoss eines gepflegten Mehrfamilienhauses bietet auf 48 m² einen idealen Rückzugsort und eine hohe Lebensqualität. Sie ist ab sofort zu vermieten und eignet sich perfekt für Singles oder Paare.Details zur Wohnung:Wohnfläche: 48 m², gut geschnitten und lichtdurchflutetZimmer: 2 großzügige Räume – ein helles Wohnzimmer mit offener Küche und ein komfortables SchlafzimmerBad: Voll gefliest mit Badewanne und für angenehmes LüftenvielZugang: Direkt über eine Treppe innerhalb der Wohnung erreichbar, mit zusätzlicher Abstellfläche unter der Treppe – perfekt für Stauraum!Die Wohnung liegt nur wenige Minuten vom Bahnhof entfernt. Trotz der Nähe zum Bahnhof sind die Züge kaum hörbar, sodass Sie keine Lärmbelästigung zu befürchten haben. Ein geschlossener Innenhof steht Ihnen zur Verfügung, der bei schönem Wetter auch zum Grillen genutzt werden kann.Miete:Kaltmiete: 474,37 €Nebenkosten: 125 € (inklusive Heizung, Wasser etc.)Optional: Möblierung inklusive! Die Wohnung kann auf Wunsch komplett möbliert übernommen werden – mit allen Möbeln, Elektrogeräten und Lampen, sodass Sie sofort einziehen können, ohne zusätzliche Anschaffungen tätigen zu müssen. Alles für gesamt 850 € – perfekt für einen unkomplizierten Start in Ihr neues Zuhause!Kontakt: Für weitere Informationen oder einen Besichtigungstermin stehe ich gerne zur Verfügung.Vermieter Saaletalimmobilien",
        "owner": "NH",
        "location": "07745 Thüringen - Jena",
        "price": "475 €",
        "title": "Nachmieter für hübsche Zweiraumwohung gesucht",
        "link": "https://www.kleinanzeigen.de/s-anzeige/nachmieter-fuer-huebsche-zweiraumwohung-gesucht/2915686471-203-3771",
        "time": "Heute, 21:27"
    }
}





