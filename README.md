![Banner](https://assets.angular.schule/header-intensivworkshop.png)

**Herzlich Willkommen – und schön, dass du dabei bist!**
In diesem Repository findest du während des Workshops den Quelltext unserer Beispielanwendung.

# 💬 Chat

Während des Workshops verwenden wir einen [Chat über den Dienst Gitter](https://gitter.im/angular-schule/2020-02-htwk-leipzig).
Hier können wir Codeschnipsel, Links und andere Sachen teilen. Folge einfach diesem Link:

[<img src="https://badges.gitter.im/angular-schule/2020-02-htwk-leipzig.svg" width="160">](https://gitter.im/angular-schule/2020-02-htwk-leipzig)

Um die Nachrichten lesen zu können, musst du nicht angemeldet sein.
Sofern du einen Account bei Gitlab, GitHub oder Twitter hast, kannst du dich über einen der Dienste einloggen und an der Diskussion beteiligen. 


# ✅ Vorbereitung

**Für das Seminar benötigst du einen eigenen Laptop.**
Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen. Die gesamte Installation wird rund 30 Minuten dauern. 

## Benötigte Software

1. **Node.js 12** oder höher: [https://nodejs.org](https://nodejs.org)
   + Mac-Benutzer bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   + [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)  (Visual Studio Code Extension)
5. optional: **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```
npm install -g @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.

```
node -v
> Erwartet: v12.x oder höher

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 9.0.x oder höher
```


## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "book-rating app is running!" erscheinen!
Wenn bei allen TeilnehmerInnen das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_new.png)


Solltest du Probleme haben, dann melde dich einfach per Mail unter [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.


### Wir freuen uns auf den Workshop! 🙂

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2020 https://angular.schule | Stand: 14.02.2020

