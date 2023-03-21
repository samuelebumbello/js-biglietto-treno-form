# Title

Scrivere un programma che chieda all’utente:

-   Il numero di chilometri da percorrere
-   Età del passeggero
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-   il prezzo del biglietto è definito in base ai km (0.21 € al km)
-   va applicato uno sconto del 20% per i minorenni
-   va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o _output_) sarà anch’essa da scrivere in console.

**MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Steps

-   Applicare una variabile per il prezzo del biglietto (0.21€)
-   Chiedere all'utente l'età e salvarla per poter applicare lo sconto. (se è under 18 sconto 20% se è over 65 sconto 40%)
-   Chiedere all'utente quanti km vuole percorrere
-   Calcolare i km che l'utente vuole fare e moltiplicarli per (0.21€)
-   Aggiungere prezzo del biglietto e lo sconto ( costo del biglietto - sconto )
-   Generare tramite il bottone "Genera il biglietto sotto il form con i dettagli dell'utente
-   Cancellare tramite il bottone "Annulla" la prenotazione dell'utente.
