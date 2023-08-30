# ICT Modul 294: Einführung in REST-Services

## REST - ein kurzer Überblick

REST (**Representational State Transfer**)

Es handelt sich um einen Architekturstil für verteilte Systeme und ist oft im Zusammenhang mit Webdiensten zu hören.

**Stateless**: <br/> Kein Sitzungsstatus auf dem Server. Jede Anfrage enthält alle benötigten Informationen. <br/>
**Client-Server**: <br/> Klare Trennung von Benutzeroberfläche (Client) und Datenverarbeitung (Server). <br />
**Cacheable**: <br/>Antworten können gecached werden, um Effizienz zu steigern. <br />
**Layered System**: <br/> Mögliche Schichten von Servern zwischen Client und End-Server. <br />
**Uniform Interface**: <br/> Vereinfachte, einheitliche Schnittstelle zwischen Client und Server. <br />

## URLs und Endpunkte

URLs (**Uniform Resource Locators**) dienen im Internet als Adressen für Ressourcen. Sie sind der Schlüssel für den Zugriff auf Daten über das Web.

In RESTful APIs werden URLs verwendet, um spezifische Ressourcen zu identifizieren. Diese Ressourcen können dann durch verschiedene HTTP-Methoden manipuliert werden. Ein Endpunkt ist eine spezielle URL, die einen bestimmten Aspekt einer Ressource oder eine Gruppe von Ressourcen repräsentiert.

### Beispiele für REST-Endpunkte:

**GET** `/books`: Liste aller Bücher abrufen<br />
**POST** `/books`: Neues Buch hinzufügen<br />
**GET** `/books/1`: Einzelnes Buch mit ID 1 abrufen<br />
**PUT** `/books/1`: Buch mit ID 1 aktualisieren<br />
**DELETE** `/books/1`: Buch mit ID 1 löschen<br />

## HTTP-Verben in REST

HTTP-Methoden in RESTful APIs fungieren als standardisierte Verben für die Interaktion mit Web-Ressourcen. Sie vereinfachen die Entwicklung, da sie intuitive Operationen wie Abrufen, Hinzufügen und Löschen ermöglichen. Die Server-Implementierung bestimmt die spezifische Behandlung jeder Methode.

- GET: **Daten abrufen**
- POST: **Daten hinzufügen**
- PUT/PATCH: **Daten aktualisieren**
- DELETE: **Daten löschen**

## HTTP-Statuscodes

HTTP-Statuscodes sind dreistellige Codes, die vom Server zurückgegeben werden, um den Status einer HTTP-Anfrage anzuzeigen. Sie informieren den Client darüber, ob die Anfrage erfolgreich war, ob weitere Aktionen erforderlich sind oder ob ein Fehler aufgetreten ist. Sie sind in verschiedene Bereiche unterteilt, um die Art der Antwort zu kennzeichnen.

### HTTP-Statuscode-Bereiche

| Bereich | Beschreibung                                                                                  |
| ------- | --------------------------------------------------------------------------------------------- |
| 1xx     | Informational - Anfrage wurde empfangen und verarbeitet                                       |
| 2xx     | Erfolgreich - Anfrage wurde erfolgreich empfangen, verstanden und akzeptiert                  |
| 3xx     | Umleitung - Weiterleitung erforderlich, um die Anfrage abzuschließen                          |
| 4xx     | Client-Fehler - Anfrage enthält einen ungültigen Parameter oder kann nicht verarbeitet werden |
| 5xx     | Server-Fehler - Server konnte die Anfrage nicht verarbeiten                                   |



### Häufige HTTP-Statuscodes

| Nummer | Beschreibung          |
| ------ | --------------------- |
| 200    | OK                    |
| 201    | Created               |
| 204    | No Content            |
| 400    | Bad Request           |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Not Found             |
| 500    | Internal Server Error |
| 502    | Bad Gateway           |
| 503    | Service Unavailable   |

Für eine vollständige Liste der HTTP-Statuscodes, siehe [Wikipedia: HTTP-Statuscode](https://de.wikipedia.org/wiki/HTTP-Statuscode).


## Code Beispiel und Demo

*für die ausführung wird eine standard mongodb installation erwartet*

```bash
npx create-nodejs-express-app restful
```