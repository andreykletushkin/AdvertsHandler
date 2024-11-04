# Microservice-Anwendung zur Bereitstellung und Übermittlung von Anzeigen an eine Web-App
Unterstützt einen ereignisbasierten SSE-Reader, der Änderungen in MongoDB erkennt.
Eine neue Anzeige aktiviert den Flux-Subscriber und sendet das Ereignis über den REST-Controller als Server-Sent Event (SSE). 
Dieses Ereignis wird in der Webanwendung von der Event-JS-Klasse genutzt.

