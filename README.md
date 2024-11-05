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
