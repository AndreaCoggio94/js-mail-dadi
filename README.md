# Mail e Gioco dei dadi

## Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Svolgimento

- creare lista utenti accettati con le loro mail
- prompt all'utente per inserire la propria mail
- controllo se la mail inserita esiste nella lista
  - **PER OGNI** elemento della lista controllo se la mail inserita è uguale
    - **SE** è diversa, nega l'accesso
    - **SE** è uguale, consente l'accesso
      - genera un numero casuale per l'utente
      - genera un numero casuale per il sito
      - confrontare i due numeri
      - indicare il vincitore
