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
<mark style="background-color: #808080">build/libs/adverdshandler-1.0.jar</mark> <br>
Diese JAR-Datei wird später im Docker-Container verwendet. <br>
2. Nun können wir die Docker-Container erstellen und starten:
    ```bash
   docker compose up
    ```
Es werden zwei Docker-Container gestartet:

- MySQL: NoSQL-Datenbank, um Daten wie Nachrichten und Anzeigen zu speichern.
- Spring Boot

### REST Schnittstellen Beispiel:
- Anmeldung:
POST localhost:8090/auth/signup
Request:
{
    "username":"Andrey",
    "password":"0987dfczcvb",
    "fullname":"Andrey Kletushkin"
}
Response:
{
    "username": "Andrey",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbmRyZXkiLCJyb2xlcyI6WyJGUkVFX1RJRVIiXSwiaWF0IjoxNzMwODEwNzE1LCJleHAiOjE3MzA4MTQzMTV9.umBBFlwN7Rb5wI629lk6nlHOz_lO4BSGuvdcPi9MItY"

- Login:
POST localhost:8090/auth/login
Request:
{
    "username":"Andrey",
    "password":"0987dfczcvb"

}
Response:
{
    "username": "Andrey",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbmRyZXkiLCJyb2xlcyI6WyJGUkVFX1RJRVIiXSwiaWF0IjoxNzMwODA2OTI4LCJleHAiOjE3MzA4MTA1Mjh9._Et1x0sii2YsVQo8bNYV8Ehnfmn45UBsK5F8a2hBkSA"
}

- User Ankunft
  GET localhost:8090/auth/user
  Header: Authorization. Bearear $token
  Response:
  """{
    "id": 1,
    "username": "Andrey",
    "fullname": "Andrey Kletushkin",
    "roles": [
        "FREE_TIER"
    ],
    "enabled": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "authorities": [
        {
            "authority": "FREE_TIER"
        }
    ]
}""" 
