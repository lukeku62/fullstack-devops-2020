# Tech Talent Factory - DevOps Class 2020/2022

# Francesca Consorti e Luca Reverberi

## Visione del Prodotto
Creazione di un convertitore di spazio colore tra i seguenti formati: HEX, RGB, HSL e CMYK. Il prodotto può convertire
un colore fornito in uno qualsiasi dei formati gestiti a uno degli altri, in maniera circolare. Questo prodotto è raggiungibile tramite
Internet e utilizzato sia da pagine HTML che da applicazioni web.

## Specifiche
I microservizi sono
- HEXTORGB: converte una stringa in formato esadecimale senza # in un array numerico con i 3 valori per R, G e B 
```bash
$ curl http://localhost/microservice-hextorgb/?color=ffffff
```

- RGBTOCMYK: converte un oggetto {"r": , "g", "b"} in un array numerico con i 4 valori per C, M, Y, K
```bash
$ curl http://localhost/microservice-rgbtocmyk?color={"r":0,"g":255,"b":0}
```

- CMYKTOHSL: converte un oggetto {"c":, "m":, "y":, "k":} in un array numerico con i 3 valori per H, S, L
```bash
$ curl http://localhost/microservice-cmyktohsl?color={"c":0,"m":100,"y":0,"k":0}
```
- HSLTOHEX: converte un oggetto {"h":, "s":, "l":} in una stringa esadecimale numerica senza #
```bash
$ curl http://localhost/microservice-hsltohex?color={%22h%22:100,%22s%22:0,%22l%22:100}
```

### Specifiche non funzionali per il prodotto
- ogni funzionalità è stata rilasciata indipendentemente dalle altre e può essere chiamata da sola
- ogni funzionalità è stata testata sia nella parte di servizio che nella parte di controller

### Scelte dovute alle specifiche funzionali e non
Abbiamo scelto di implementare 4 microservizi perchè sono il minimo numero necessario per eseguire tutte le conversioni richieste. 
Nello spirito dei microservizi abbiamo pensato che fosse inutile ripetere passaggi di conversione intermedi quando usando il metodo circolare HEX->RGB->CMYK->HSL->HEX si possono convertire tutte le tipologie di colore tramite i corretti passaggi. 

### Specifiche funzionali per il singolo micro-servizio
- risponde alle chiamate HTTP:
  - metodo `GET`
  - url `/`
  - esempio: `http://<host>:<80/<microservizio>?color=<oggetto colore nello specifico formato>`
- colore da convertire:
  - ricevuto come query_param
- valore di input:
  - nel body
  - in formato JSON
- valore di ritorno:
  - nel body
  - in formato JSON
- formati JSON dei colori:
  - sono definiti all'interno di ciascun microservizio in HttpController.ts
  - test sono all'interno di ciascuna cartella service e controller

### Specifiche non funzionali per il singolo micro-servizio
- separazione della logica di dominio da quella di presentazione:
  - creato un `service` che effettua l'effettiva conversione
  - il `service` delega la conversione alla libreria color-converter
  - creato un `controller` che espone l'end-point HTTP


## Come iniziare
La struttura del progetto, solo file degni di nota:

.

+-- microservice-hextorgb
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- microservice-rgbtocmyk
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- microservice-cmyktohsl
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- microservice-hsltohex
|   +-- src
|   |   +-- controller
|   |   |   +-- HttpController.componentTest.ts     # test del micro-servizio attraverso chiamate HTTP
|   |   |   +-- HttpController.ts                   # logica relativa alla gestione delle chiamate HTTP
|   |   +-- service
|   |   |   +-- Service.test.ts                     # test servizio di conversione
|   |   |   +-- Service.ts                          # logica per la conversione dei colori
|   |   +-- HttpServer.ts                           # file principale del micro-servizio da eseguire con node.js
|   +-- .dockerignore
|   +-- Dockerfile
|   +-- package.json
+-- README.md
+-- docker-compose.yml                              # file di composizione dei microservizi su docker 
+-- STUDENTS.md



## License
This project is licensed under the GPL-v3 License - see the LICENSE.md file for details
