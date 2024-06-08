# Open-wikipedia

Sviluppo di un sito web locale che funzioni come clone di Wikipedia. Il sito permetterà agli utenti registrati di cercare articoli da Wikipedia, scaricarli localmente e visualizzarli. Gli utenti potranno anche modificare e cancellare le voci, ma solo nel database locale

## Descrizione del Progetto

### Backend

#### Struttura del Progetto

Il backend è implementato con Node.js e Express e fornisce le seguenti funzionalità principali:

1. **Autenticazione**

   - **Login** degli utenti, con generazione di token JWT per l'autenticazione.

2. **Gestione degli Articoli**

   - Salvataggio di articoli di Wikipedia.
   - Recupero della lista degli articoli salvati.
   - Modifica e cancellazione di articoli.

3. **Ricerca su Wikipedia**
   - Funzionalità per cercare articoli su Wikipedia.
   - Funzionalità per recuperare un articolo casuale da Wikipedia.

#### Rotte Principali

1. **Autenticazione**

   - `POST /login`: Autentica un utente e genera un token JWT.

2. **Articoli**

   - `POST /wikipedia/save-article`: Salva un articolo di Wikipedia.
   - `GET /articles`: Recupera la lista degli articoli salvati.
   - `GET /articles/:id`: Recupera i dettagli di un singolo articolo.
   - `PUT /articles/:id`: Modifica un articolo salvato.
   - `DELETE /articles/:id`: Elimina un articolo salvato.

3. **Ricerca**
   - `POST /search`: Cerca articoli su Wikipedia.
   - `GET /random-article`: Recupera un articolo casuale da Wikipedia.

### Frontend

#### Struttura del Progetto

Il frontend è implementato con Express e utilizza EJS come motore di template per rendere le pagine HTML.

#### Pagine Principali

1. **Index**

   - Percorso: `/index`
   - Descrizione: Mostra la pagina di ricerca di Wikipedia e la lista degli articoli salvati.

2. **Login**

   - Percorso: `/login`
   - Descrizione: Mostra la pagina di login.

3. **Modifica Articolo**
   - Percorso: `/articles/:id/edit`
   - Descrizione: Mostra la pagina per modificare un articolo salvato.

#### File Principali

1. **index.js**

   - Configura il server Express e definisce le rotte principali.

2. **views/pages/search.ejs**

   - Contiene il template per la pagina di ricerca e visualizzazione degli articoli salvati.

3. **views/pages/login.ejs**

   - Contiene il template per la pagina di login.

4. **views/pages/edit.ejs**

   - Contiene il template per la pagina di modifica di un articolo.

5. **public/scripts/search.js**

   - Gestisce la logica client-side per la ricerca di articoli e il salvataggio di articoli.

6. **public/scripts/login.js**

   - Gestisce la logica client-side per il login.

7. **public/scripts/edit.js**
   - Gestisce la logica client-side per la modifica degli articoli.

#### Descrizione del Flusso

1. **Ricerca e Salvataggio di Articoli**

   - L'utente ricerca articoli su Wikipedia utilizzando la barra di ricerca.
   - I risultati della ricerca vengono visualizzati e l'utente può scegliere di salvare un articolo.
   - Gli articoli salvati vengono visualizzati in una tabella.

2. **Gestione degli Articoli Salvati**

   - Gli articoli salvati possono essere modificati o eliminati.
   - La modifica avviene attraverso una pagina dedicata che utilizza un editor di testo.

3. **Autenticazione**
   - Gli utenti devono autenticarsi per accedere alle funzionalità di gestione degli articoli.
   - L'autenticazione viene gestita tramite token JWT memorizzati nel localStorage del browser.
