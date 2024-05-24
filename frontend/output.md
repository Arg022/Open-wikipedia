JavaScript  
[linguaggio di programmazione](/wiki/Linguaggio_di_programmazione "Linguaggio di programmazione")

[![](//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/180px-Unofficial_JavaScript_logo_2.svg.png)](/wiki/File:Unofficial_JavaScript_logo_2.svg)

Logo del linguaggio

Autore

[Brendan Eich](/wiki/Brendan_Eich "Brendan Eich")

Data di origine

[1995](/wiki/1995 "1995")

Ultima versione

1.8.5

[Paradigmi](/wiki/Paradigma_di_programmazione "Paradigma di programmazione")

Programmazione a eventi e a oggetti, funzionale

[Tipizzazione](/wiki/Sistema_dei_tipi "Sistema dei tipi")

debole

[Estensioni](/wiki/Estensione_\(file\) "Estensione (file)") comuni

.js

Influenzato da

[Scheme](/wiki/Scheme "Scheme"), [Self](/w/index.php?title=Self_\(linguaggio\)&action=edit&redlink=1 "Self (linguaggio) (la pagina non esiste)"), [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)"), [C](/wiki/C_\(linguaggio\) "C (linguaggio)"), [Python](/wiki/Python "Python"), [Awk](/wiki/Awk "Awk"), [HyperTalk](/wiki/HyperTalk "HyperTalk")

Ha influenzato

[ActionScript](/wiki/ActionScript "ActionScript"), [AtScript](/w/index.php?title=AtScript&action=edit&redlink=1 "AtScript (la pagina non esiste)"), [CoffeeScript](/wiki/CoffeeScript "CoffeeScript"), [Dart](/wiki/DART_\(linguaggio\) "DART (linguaggio)"), [JScript .NET](/w/index.php?title=JScript_.NET&action=edit&redlink=1 "JScript .NET (la pagina non esiste)"), [Objective-J](/w/index.php?title=Objective-J&action=edit&redlink=1 "Objective-J (la pagina non esiste)"), [QML](/wiki/QML_\(linguaggio_di_programmazione\) "QML (linguaggio di programmazione)"), [TypeScript](/wiki/TypeScript "TypeScript"), [LiveScript](/wiki/LiveScript "LiveScript")

[Implementazione di riferimento](/wiki/Implementazione_di_riferimento "Implementazione di riferimento")

Implementazione

[KJS](/wiki/KJS_\(JavaScript\) "KJS (JavaScript)"), [Rhino](/wiki/Rhino_\(interprete_JavaScript\) "Rhino (interprete JavaScript)"), [SpiderMonkey](/wiki/SpiderMonkey "SpiderMonkey"), [V8](/wiki/V8_\(motore_JavaScript\) "V8 (motore JavaScript)"), [Presto](/wiki/Presto_\(motore_di_rendering\) "Presto (motore di rendering)"), [Chakra](/wiki/Chakra_\(motore_JScript\) "Chakra (motore JScript)")

[Sito web](/wiki/Sito_web "Sito web")

[developer.mozilla.org/it/docs/Web/JavaScript](https://developer.mozilla.org/it/docs/Web/JavaScript)

[Modifica dati su Wikidata](https://www.wikidata.org/wiki/Q2005 "d:Q2005") **·** [Manuale](/wiki/Template:Linguaggio_di_programmazione/man "Template:Linguaggio di programmazione/man")

In [informatica](/wiki/Informatica "Informatica") **JavaScript** è un [linguaggio di programmazione](/wiki/Linguaggio_di_programmazione "Linguaggio di programmazione") multi paradigma [orientato](/wiki/Programmazione_orientata_agli_oggetti "Programmazione orientata agli oggetti") agli [eventi](/wiki/Programmazione_a_eventi "Programmazione a eventi"), utilizzato sia nella [programmazione](/wiki/Programmazione_Web "Programmazione Web") [lato client](/wiki/Lato_client "Lato client") web che [lato server](/wiki/Lato_server "Lato server") ([Node.js](/wiki/Node.js "Node.js")) per la creazione di RESTful API, applicazioni desktop e embedded, [siti web](/wiki/Sito_web "Sito web") e [applicazioni web](/wiki/Applicazione_web "Applicazione web"), di effetti dinamici [interattivi](/wiki/Interattivit%C3%A0 "Interattività") tramite [funzioni](/wiki/Funzione_\(informatica\) "Funzione (informatica)") di [script](/wiki/Script "Script") invocate da _eventi_ innescati a loro volta in vari modi dall'utente sulla [pagina web](/wiki/Pagina_web "Pagina web") in uso ([mouse](/wiki/Mouse "Mouse"), [tastiera](/wiki/Tastiera_\(informatica\) "Tastiera (informatica)"), caricamento della pagina ecc...).

Originariamente sviluppato da [Brendan Eich](/wiki/Brendan_Eich "Brendan Eich") della [Netscape Communications](/wiki/Netscape_Communications "Netscape Communications") con il nome di **Mocha** e successivamente di **LiveScript**, in seguito è stato rinominato "_JavaScript_" ed è stato formalizzato con una [sintassi](/wiki/Sintassi "Sintassi") più vicina a quella del linguaggio [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)") di [Sun Microsystems](/wiki/Sun_Microsystems "Sun Microsystems") (che nel 2010 è stata acquistata da [Oracle](/wiki/Oracle_Corporation "Oracle Corporation")). [Standardizzato](/wiki/Norma_tecnica "Norma tecnica") per la prima volta il 1997 dalla [ECMA](/wiki/European_Computer_Manufacturers_Association "European Computer Manufacturers Association") con il nome [ECMAScript](/wiki/ECMAScript "ECMAScript"), l'ultimo standard, di giugno 2022, è ECMA-262 Edition 13[\[1\]](#cite_note-1) ed è anche uno standard [ISO](/wiki/ISO "ISO") (ISO/IEC 16262).

Indice
------

*   [1 Descrizione](#Descrizione)
    *   [1.1 Java, JavaScript e JScript](#Java,_JavaScript_e_JScript)
    *   [1.2 Aspetti strutturali](#Aspetti_strutturali)
    *   [1.3 Incompatibilità](#Incompatibilità)
        *   [1.3.1 Contromisure](#Contromisure)
    *   [1.4 Uso](#Uso)
        *   [1.4.1 Utilizzo in HTML](#Utilizzo_in_HTML)
            *   [1.4.1.1 Tag _script_ (HTML)](#Tag_script_\(HTML\))
            *   [1.4.1.2 Esempio: Hello world!](#Esempio:_Hello_world!)
        *   [1.4.2 Usi frequenti nei web browser](#Usi_frequenti_nei_web_browser)
        *   [1.4.3 Filiazioni](#Filiazioni)
*   [2 Elementi del linguaggio](#Elementi_del_linguaggio)
    *   [2.1 Variabili](#Variabili)
    *   [2.2 Oggetti](#Oggetti)
        *   [2.2.1 Simulare l'ereditarietà](#Simulare_l'ereditarietà)
        *   [2.2.2 Oggetti predefiniti](#Oggetti_predefiniti)
    *   [2.3 Array](#Array)
    *   [2.4 Strutture di controllo e condizionali](#Strutture_di_controllo_e_condizionali)
        *   [2.4.1 if ... else](#if_..._else)
        *   [2.4.2 Ciclo while](#Ciclo_while)
        *   [2.4.3 Ciclo do ... while](#Ciclo_do_..._while)
        *   [2.4.4 Ciclo for](#Ciclo_for)
        *   [2.4.5 Ciclo for ... in](#Ciclo_for_..._in)
        *   [2.4.6 Ciclo for ... of](#Ciclo_for_..._of)
        *   [2.4.7 Istruzione switch](#Istruzione_switch)
    *   [2.5 Funzioni](#Funzioni)
    *   [2.6 Interazione con l'utente](#Interazione_con_l'utente)
        *   [2.6.1 Metodi di scrittura a video (Standard Output)](#Metodi_di_scrittura_a_video_\(Standard_Output\))
    *   [2.7 Eventi](#Eventi)
        *   [2.7.1 Eventi attivabili dai tasti del mouse](#Eventi_attivabili_dai_tasti_del_mouse)
            *   [2.7.1.1 Tag di applicazione](#Tag_di_applicazione)
        *   [2.7.2 Eventi attivabili dai movimenti del mouse](#Eventi_attivabili_dai_movimenti_del_mouse)
            *   [2.7.2.1 Tag di applicazione](#Tag_di_applicazione_2)
        *   [2.7.3 Eventi attivabili dal trascinamento del mouse (drag and drop)](#Eventi_attivabili_dal_trascinamento_del_mouse_\(drag_and_drop\))
            *   [2.7.3.1 Tag di applicazione](#Tag_di_applicazione_3)
        *   [2.7.4 Eventi attivabili dall'utente con la tastiera](#Eventi_attivabili_dall'utente_con_la_tastiera)
        *   [2.7.5 Eventi attivabili dalle modifiche dell'utente](#Eventi_attivabili_dalle_modifiche_dell'utente)
            *   [2.7.5.1 onChange](#onChange)
            *   [2.7.5.2 onCellChange](#onCellChange)
            *   [2.7.5.3 onPropertyChange](#onPropertyChange)
            *   [2.7.5.4 onReadyStateChange](#onReadyStateChange)
            *   [2.7.5.5 Tag di applicazione](#Tag_di_applicazione_4)
        *   [2.7.6 Eventi legati al "fuoco"](#Eventi_legati_al_"fuoco")
            *   [2.7.6.1 onFocus](#onFocus)
            *   [2.7.6.2 onBlur](#onBlur)
            *   [2.7.6.3 onSelect](#onSelect)
            *   [2.7.6.4 onSelectStart](#onSelectStart)
            *   [2.7.6.5 onbeforeEditFocus](#onbeforeEditFocus)
            *   [2.7.6.6 onLoseCapture](#onLoseCapture)
            *   [2.7.6.7 Tag di applicazione](#Tag_di_applicazione_5)
        *   [2.7.7 Eventi attivabili dal caricamento degli oggetti](#Eventi_attivabili_dal_caricamento_degli_oggetti)
            *   [2.7.7.1 onLoad](#onLoad)
            *   [2.7.7.2 onUnload](#onUnload)
            *   [2.7.7.3 onAbort](#onAbort)
            *   [2.7.7.4 onError](#onError)
            *   [2.7.7.5 onBeforeUnload](#onBeforeUnload)
            *   [2.7.7.6 onStop](#onStop)
            *   [2.7.7.7 Tag di applicazione](#Tag_di_applicazione_6)
        *   [2.7.8 Eventi attivabili dai movimenti delle finestre](#Eventi_attivabili_dai_movimenti_delle_finestre)
            *   [2.7.8.1 Tag di applicazione](#Tag_di_applicazione_7)
        *   [2.7.9 Eventi legati a particolari bottoni](#Eventi_legati_a_particolari_bottoni)
            *   [2.7.9.1 Tag di applicazione](#Tag_di_applicazione_8)
    *   [2.8 Gestione degli errori](#Gestione_degli_errori)
*   [3 Integrazione con HTML5](#Integrazione_con_HTML5)
    *   [3.1 Riconoscimento vocale](#Riconoscimento_vocale)
    *   [3.2 Notifiche di sistema](#Notifiche_di_sistema)
    *   [3.3 Contenuto editabile](#Contenuto_editabile)
    *   [3.4 Drag out](#Drag_out)
    *   [3.5 File System API](#File_System_API)
    *   [3.6 Geolocalizzazione](#Geolocalizzazione)
    *   [3.7 Device Orientation](#Device_Orientation)
    *   [3.8 Local Storage, Application Cache e Quota API](#Local_Storage,_Application_Cache_e_Quota_API)
    *   [3.9 Web SQL Database](#Web_SQL_Database)
    *   [3.10 Indexed DB](#Indexed_DB)
    *   [3.11 Web Workers](#Web_Workers)
    *   [3.12 Web Socket](#Web_Socket)
    *   [3.13 Pagine web a tutto schermo](#Pagine_web_a_tutto_schermo)
    *   [3.14 Nuovi selettori (API DOM)](#Nuovi_selettori_\(API_DOM\))
    *   [3.15 Attributi personalizzabili](#Attributi_personalizzabili)
    *   [3.16 Element.classList](#Element.classList)
    *   [3.17 History API](#History_API)
    *   [3.18 JS nel web 3D](#JS_nel_web_3D)
*   [4 Alternative](#Alternative)
*   [5 Esempi di UI JavaScript](#Esempi_di_UI_JavaScript)
*   [6 Note](#Note)
*   [7 Bibliografia](#Bibliografia)
*   [8 Voci correlate](#Voci_correlate)
*   [9 Altri progetti](#Altri_progetti)
*   [10 Collegamenti esterni](#Collegamenti_esterni)

Descrizione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=1 "Modifica la sezione Descrizione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=1 "Edit section's source code: Descrizione")\]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Le funzioni di script, utilizzati dunque nella _[logica di presentazione](/wiki/Front-end "Front-end")_, possono essere opportunamente inserite in [file](/wiki/File "File") [HTML](/wiki/HTML "HTML"), in pagine [JSP](/wiki/JavaServer_Pages "JavaServer Pages") o in appositi file separati con [estensione](/wiki/Estensione_\(file\) "Estensione (file)") _.js_ poi richiamati nella _[logica di business](/wiki/Logica_di_business "Logica di business")_. Ultimamente il suo campo di utilizzo è stato esteso alle cosiddette _Hybrid App_ (app ibride), con le quali è possibile creare [app](/wiki/App_\(smartphone\) "App (smartphone)") per più [sistemi operativi](/wiki/Sistema_operativo "Sistema operativo") utilizzando un unico [codice sorgente](/wiki/Codice_sorgente "Codice sorgente") basato appunto su JavaScript, [HTML](/wiki/HTML "HTML") e [CSS](/wiki/CSS "CSS").

### Java, JavaScript e JScript\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=2 "Modifica la sezione Java, JavaScript e JScript") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=2 "Edit section's source code: Java, JavaScript e JScript")\]

Il cambio di nome da LiveScript a JavaScript si ebbe più o meno nel periodo in cui Netscape stava includendo il supporto per la tecnologia Java nel suo browser [Netscape Navigator](/wiki/Netscape_Navigator "Netscape Navigator").[\[2\]](#cite_note-2) La scelta del nome si rivelò fonte di grande confusione. Non c'è una vera relazione tra Java e JavaScript; le loro somiglianze sono soprattutto nella sintassi (derivata in entrambi i casi dal [linguaggio C](/wiki/C_\(linguaggio\) "C (linguaggio)")); le loro semantiche sono piuttosto diverse, e in particolare i loro _[object model](/wiki/Object_model "Object model")_ non hanno relazione e sono notevolmente incompatibili.

Dato il successo di JavaScript come linguaggio per arricchire le [pagine web](/wiki/Pagina_web "Pagina web"), [Microsoft](/wiki/Microsoft "Microsoft") sviluppò un linguaggio compatibile, conosciuto come _JScript_. La necessità di specifiche comuni fu alla base dello standard ECMA 262 per [ECMAScript](/wiki/ECMAScript "ECMAScript"), di cui sono state pubblicate otto edizioni da quando il lavoro iniziò, nel novembre [1996](/wiki/1996 "1996")[\[3\]](#cite_note-ecma262-3).

### Aspetti strutturali\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=3 "Modifica la sezione Aspetti strutturali") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=3 "Edit section's source code: Aspetti strutturali")\]

Le caratteristiche principali di JavaScript sono:

*   essere un [linguaggio interpretato](/wiki/Linguaggio_interpretato "Linguaggio interpretato"): il codice non viene [compilato](/wiki/Compilazione "Compilazione"), ma [eseguito direttamente;](/wiki/Interprete_\(informatica\) "Interprete (informatica)") in JavaScript [lato client](/wiki/Lato_client "Lato client"), il codice viene eseguito dall'interprete contenuto nel browser dell'utente.
*   la [sintassi](/wiki/Sintassi_\(informatica\) "Sintassi (informatica)") è relativamente simile a quella dei linguaggi [C](/wiki/Linguaggio_C "Linguaggio C"), [C++](/wiki/C%2B%2B "C++") e [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)")[\[4\]](#cite_note-4).
*   definisce le funzionalità tipiche dei [linguaggi di programmazione ad alto livello](/wiki/Linguaggio_di_programmazione_ad_alto_livello "Linguaggio di programmazione ad alto livello") ([strutture di controllo](/wiki/Struttura_di_controllo "Struttura di controllo"), cicli, ecc.) e consente l'utilizzo del paradigma [object oriented](/wiki/Programmazione_orientata_agli_oggetti "Programmazione orientata agli oggetti").
*   è un [linguaggio debolmente tipizzato](/wiki/Linguaggio_tipizzato "Linguaggio tipizzato")[\[5\]](#cite_note-5).
*   è un [linguaggio debolmente orientato agli oggetti](/wiki/Linguaggio_orientato_agli_oggetti "Linguaggio orientato agli oggetti"). Ad esempio, il meccanismo dell'[ereditarietà](/wiki/Ereditariet%C3%A0_\(informatica\) "Ereditarietà (informatica)") è più simile a quello del Self e del [NewtonScript](/w/index.php?title=NewtonScript&action=edit&redlink=1 "NewtonScript (la pagina non esiste)") che a quello del [linguaggio Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)"), fortemente orientato agli oggetti. Gli oggetti stessi ricordano più gli [array associativi](/wiki/Array_associativo "Array associativo") del [linguaggio Perl](/wiki/Perl "Perl") che gli oggetti di Java o C++.[\[6\]](#cite_note-Flanagan-6)

Altri aspetti di interesse: in JavaScript lato client, il codice viene eseguito direttamente sul [client](/wiki/Client "Client") e non sul [server](/wiki/Server "Server"). Il vantaggio di questo approccio è che, anche con la presenza di [script](/wiki/Script "Script") particolarmente complessi, il [web server](/wiki/Web_server "Web server") non rischia sovraccarichi dato che il lavoro viene svolto dal client. Un rovescio della medaglia è che, nel caso di script particolarmente grandi, il tempo per il trasferimento dalla rete può diventare eccessivamente lungo. Inoltre ogni informazione che presuppone un accesso a dati memorizzati in una [base di dati](/wiki/Base_di_dati "Base di dati") remota deve essere rimandata a un linguaggio che effettui materialmente la [transazione](/wiki/Transazione_\(basi_di_dati\) "Transazione (basi di dati)"), per poi restituire i risultati ad una o più variabili JavaScript; operazioni del genere richiedono un nuovo caricamento della pagina stessa. Questi limiti sono però stati superati in buona parte con la nascita di [AJAX](/wiki/AJAX "AJAX").

Alcune altre caratteristiche di JavaScript degne di nota:

*   Può usare caratteri [Unicode](/wiki/Unicode "Unicode")
*   Può valutare le [espressioni regolari](/wiki/Espressione_regolare "Espressione regolare") (introdotte nella versione 1.2; supporto da parte dei browser: a partire da [Netscape Navigator](/wiki/Netscape_Navigator "Netscape Navigator") 4 e [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") 4)
*   Le espressioni JavaScript contenute in una stringa possono essere valutate usando la funzione `eval`.

### Incompatibilità\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=4 "Modifica la sezione Incompatibilità") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=4 "Edit section's source code: Incompatibilità")\]

Le varie implementazioni di JavaScript, come già accaduto per HTML, spesso non sono conformi agli standard, ma piuttosto sono costruite per funzionare con uno specifico browser web e con un insieme di versioni specifiche degli stessi. L'attuale standard [ECMAScript](/wiki/ECMAScript "ECMAScript") dovrebbe essere teoricamente la base di tutte le implementazioni JavaScript, ma in pratica i browser [Mozilla](/wiki/Mozilla "Mozilla") (e [Netscape](/wiki/Netscape_Navigator "Netscape Navigator")) usano _JavaScript_, [Microsoft Internet Explorer](/wiki/Microsoft_Internet_Explorer "Microsoft Internet Explorer") usa _JScript_, e altri browser come [Opera](/wiki/Opera_\(browser\) "Opera (browser)") e [Safari](/wiki/Safari_\(browser\) "Safari (browser)") usano altre implementazioni _ECMAScript_, spesso con ulteriori caratteristiche non standard per permettere la [compatibilità](/w/index.php?title=Compatibilit%C3%A0&action=edit&redlink=1 "Compatibilità (la pagina non esiste)") con JavaScript e JScript.

JavaScript e JScript contengono molte caratteristiche che non sono parte dello standard ufficiale ECMAScript, e possono anche essere privi di diverse caratteristiche. In tal modo, sono in parte incompatibili, il che porta gli autori di script a dovere sopperire a tali problemi durante la scrittura del [software](/wiki/Software "Software"). Tra i due, JavaScript è più conforme allo standard: ciò significa che uno script redatto secondo gli standard ECMA funzionerà con la maggior parte dei browser, soprattutto se in versioni recenti.

Un altro effetto è che ciascun browser potrebbe trattare lo stesso script in modo diverso, e ciò che funziona in un browser potrebbe non funzionare in un altro, o in una diversa versione dello stesso browser. Come con l'HTML, è quindi raccomandabile scrivere codice conforme agli standard. Naturalmente negli anni sono state realizzate varie librerie e framework che possono essere usate per semplificare la scrittura di codice JavaScript che funzioni correttamente indipendentemente dal browser usato. Una delle librerie più conosciute e diffuse per semplificare la scrittura di semplici script all'interno di pagine HTML o PHP è [jQuery](/wiki/JQuery "JQuery"), mentre esistono numerosi framework per scrivere applicativi in JavaScript anche estremamente sofisticati (lato client e/o lato server) ignorando del tutto la necessità di riconoscere quale browser utilizzerà l'utente finale.

#### Contromisure\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=5 "Modifica la sezione Contromisure") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=5 "Edit section's source code: Contromisure")\]

Esistono due tecniche principali per gestire le incompatibilità: _browser sniffing_ (letteralmente "annusare il browser") e _object detection_ ("rilevazione dell'oggetto"). Quando esistevano solo due browser che supportavano lo scripting, ovvero Netscape e Internet Explorer, il browser sniffing era la tecnica più diffusa. Controllando un certo numero di proprietà del client, che restituivano informazioni su piattaforma, browser e versione, era possibile per il codice discernere esattamente in quale browser veniva eseguito. in seguito le tecniche di _sniffing_ divennero più difficili da implementare, dato che Internet Explorer cominciò a dissimulare le proprie informazioni, per esempio fornendo informazioni sul browser sempre più inaccurate (i motivi per questo comportamento della Microsoft sono da tempo oggetto di disputa). Più tardi ancora, il browser sniffing divenne una sorta di complicata forma d'arte, quando cioè altri browser dotati di scripting entrarono nel mercato, ciascuno con proprie informazioni su piattaforma, client e versione.

L'object detection si basa sul controllo dell'esistenza della proprietà di un oggetto.

function set\_image\_source(imageName, imageURL)
{
  // Test per verificare se l'oggetto 'document' ha una proprietà 'images'
  if (document.images)
  {
    // eseguito solo se esiste un vettore 'images'
    document.images\[ imageName \].src \= imageURL;
  }
}

Un esempio più complesso si basa sull'uso di test [booleani](/wiki/Algebra_di_Boole "Algebra di Boole") collegati:

if (document.body && document.body.style)

In questo caso, l'espressione "document.body.style" normalmente causerebbe un errore in un browser che non ha la proprietà "document.body", ma l'uso dell'operatore "&&" assicura che "document.body.style" non venga mai chiamato se "document.body" non esiste. Il test sfrutta questa particolarità della valutazione di espressioni logiche, chiamata _[lazy evaluation](/wiki/Lazy_evaluation "Lazy evaluation")_ (lett. "valutazione pigra").

Oggi, una combinazione di browser sniffing, object detection, e conformità agli standard come le specifiche ECMAScript e i [CSS](/wiki/Foglio_di_stile "Foglio di stile") sono usati in varie misure per provare ad assicurare che un utente non incontri mai un errore JavaScript.

### Uso\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=6 "Modifica la sezione Uso") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=6 "Edit section's source code: Uso")\]

body:not(.skin-minerva) .mw-parser-output .vedi-anche{font-size:95%}.mw-parser-output .hatnote-content{align-items:center;display:flex}.mw-parser-output .hatnote-icon{flex-shrink:0}.mw-parser-output .hatnote-icon img{display:flex}.mw-parser-output .hatnote-text{font-style:italic}body:not(.skin-minerva) .mw-parser-output .hatnote{border:1px solid #CCC;display:flex;margin:.5em 0;padding:.2em .5em}body:not(.skin-minerva) .mw-parser-output .hatnote-text{padding-left:.5em}body.skin-minerva .mw-parser-output .hatnote-icon{padding-right:8px}body.skin-minerva .mw-parser-output .hatnote-icon img{height:auto;width:16px}body.skin--responsive .mw-parser-output .hatnote a.new{color:#d73333}body.skin--responsive .mw-parser-output .hatnote a.new:visited{color:#a55858}

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[Interprete JavaScript](/wiki/Interprete_JavaScript "Interprete JavaScript")**.

A differenza di altri linguaggi, quali il C o il C++, che permettono la scrittura di [programmi](/wiki/Programma_\(informatica\) "Programma (informatica)") completamente stand-alone, JavaScript viene utilizzato soprattutto come [linguaggio di scripting](/wiki/Linguaggio_di_scripting "Linguaggio di scripting"), integrato, ovvero all'interno di altro codice.

L'idea di base è che il _programma ospite_ (quello che ospita ed esegue lo script) fornisca allo script un'[API](/wiki/Application_Programming_Interface "Application Programming Interface") ben definita, che consente l'accesso ad operazioni specifiche, la cui implementazione è a carico del _programma ospite_ stesso. Lo script, quando eseguito, utilizza riferimenti a questa API per richiedere (al _programma ospite_) l'esecuzione di operazioni specifiche, non previste dai costrutti del linguaggio JavaScript in sé. Tale meccanismo viene adottato anche in linguaggi quale il [C](/wiki/Linguaggio_C "Linguaggio C") o [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)"), nel quale il programma si affida a delle [librerie](/wiki/Libreria_\(software\) "Libreria (software)"), non previste dal linguaggio in sé, che permettono di effettuare operazioni quali l'I/O o l'esecuzione di chiamate a funzioni di sistema.

L'esempio tipico (e, forse, il più noto e comune) di _programma ospite_ per uno script JavaScript è quello del [browser](/wiki/Browser "Browser"). Un browser moderno incorpora normalmente un [interprete JavaScript](/wiki/Interprete_JavaScript "Interprete JavaScript"). Quando viene visitata una [pagina web](/wiki/Pagina_web "Pagina web") che contiene codice JavaScript, quest'ultimo viene eseguito dall'interprete contenuto nel browser. Le interfacce che consentono a JavaScript di rapportarsi con un browser sono chiamate [DOM](/wiki/Document_Object_Model "Document Object Model") (_Document Object Model_ in italiano _Modello a Oggetti del Documento_). Molti siti web usano la tecnologia JavaScript lato client per creare potenti [applicazioni web](/wiki/Applicazione_web "Applicazione web") [dinamiche](/wiki/Web_dinamico "Web dinamico").

Un uso principale del JavaScript in ambito [Web](/wiki/Web "Web") è la scrittura di piccole funzioni integrate nelle pagine [HTML](/wiki/HTML "HTML") che interagiscono con il DOM del browser per compiere determinate azioni non possibili con il solo [HTML](/wiki/HTML "HTML") statico: controllare i valori nei campi di input, nascondere o visualizzare determinati elementi, ecc. Sfortunatamente, gli standard DOM imposti dal [W3C](/wiki/W3C "W3C") non sempre vengono rispettati in modo consistente ed omogeneo da tutti. Browser diversi, a seconda del loro [motore di rendering](/wiki/Motore_di_rendering "Motore di rendering"), espongono diversi oggetti o metodi allo script, perciò spesso è necessario implementare controlli aggiuntivi ad una funzione JavaScript, per garantirne la compatibilità con ciascun browser e persino in funzione delle varie versioni del medesimo browser.

Al di fuori del Web, interpreti JavaScript sono integrati in diverse applicazioni. [Adobe Acrobat](/wiki/Adobe_Acrobat "Adobe Acrobat") e [Adobe Reader](/wiki/Adobe_Reader "Adobe Reader") supportano JavaScript nei [file](/wiki/File "File") [PDF](/wiki/Portable_Document_Format "Portable Document Format"). La piattaforma [Mozilla](/wiki/Mozilla "Mozilla"), che è alla base di molti diffusi browser Web, usa JavaScript per implementare l'[interfaccia utente](/wiki/Interfaccia_utente "Interfaccia utente") e la logica di transazione dei suoi vari prodotti. Gli interpreti JavaScript sono integrati anche nelle applicazioni proprietarie prive di interfacce programmabili via script. Infine la tecnologia [Windows Script Host](/wiki/Windows_Script_Host "Windows Script Host") di [Microsoft](/wiki/Microsoft "Microsoft") supporta JavaScript (via JScript), un linguaggio di scripting per i [sistemi operativi](/wiki/Sistema_operativo "Sistema operativo").

Ciascuna di queste applicazioni fornisce il proprio modello a oggetti che dà accesso all'ambiente ospite, con il nucleo del linguaggio JavaScript che rimane per lo più invariato in ciascuna applicazione. Ci sono diverse implementazioni del nucleo del linguaggio JavaScript, tra le quali:

*   [KJS](/wiki/KJS_\(JavaScript\) "KJS (JavaScript)")
*   [Rhino](/wiki/Rhino_\(interprete_JavaScript\) "Rhino (interprete JavaScript)")
*   [SpiderMonkey](/wiki/SpiderMonkey "SpiderMonkey")
*   [Narcissus](/w/index.php?title=Mozilla_Narcissus_JavaScript_Engine&action=edit&redlink=1 "Mozilla Narcissus JavaScript Engine (la pagina non esiste)")
*   NJS
*   NGS
*   [Resin](/w/index.php?title=Resin_JavaScript_Engine&action=edit&redlink=1 "Resin JavaScript Engine (la pagina non esiste)")
*   [FESI](/w/index.php?title=Free_EcmaScript_Interpreter&action=edit&redlink=1 "Free EcmaScript Interpreter (la pagina non esiste)")
*   [SEE](/w/index.php?title=Simple_ECMAScript_Engine&action=edit&redlink=1 "Simple ECMAScript Engine (la pagina non esiste)")
*   [DMDScript](/w/index.php?title=DMDScript&action=edit&redlink=1 "DMDScript (la pagina non esiste)")
*   [V8](/wiki/V8_\(motore_JavaScript\) "V8 (motore JavaScript)")
*   [JägerMonkey](/w/index.php?title=J%C3%A4gerMonkey&action=edit&redlink=1 "JägerMonkey (la pagina non esiste)")
*   [Chakra](/wiki/Chakra_\(motore_JScript\) "Chakra (motore JScript)")

#### Utilizzo in HTML\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=7 "Modifica la sezione Utilizzo in HTML") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=7 "Edit section's source code: Utilizzo in HTML")\]

##### Tag _script_ (HTML)\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=8 "Modifica la sezione Tag script (HTML)") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=8 "Edit section's source code: Tag script (HTML)")\]

Per inserire uno script in una pagina HTML, è necessario l'utilizzo del tag _script_. Questo tag non è parte del linguaggio JavaScript in sé, serve solo come "contenitore" all'interno di una pagina HTML.

<script type\="text/javascript"\>
// <!\[CDATA\[
JavaScript statements...
// \]\]>
</script\>

Un documento può presentare in più parti la definizione del tag script. Tramite questo tag si può rappresentare la versione utilizzata e a seconda del browser si avrà l'interpretazione della parte di codice appropriata. Le definizioni possono essere le seguenti:

<script type\="text/javascript"\> ... </script\>

##### Esempio: Hello world!\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=9 "Modifica la sezione Esempio: Hello world!") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=9 "Edit section's source code: Esempio: Hello world!")\]

Il seguente esempio visualizza un messaggio di avviso con all'interno scritto "[Hello world](/wiki/Hello_world "Hello world")".

<script type\="text/javascript"\>
   alert('Hello world');
</script>

Per "scrivere" direttamente nella pagina HTML:

<script type\="text/javascript"\>
   document.write('Hello world');
</script>

Il [tipo MIME](/wiki/MIME "MIME") per il codice sorgente JavaScript source code è `application/javascript`, ma è più usato `text/javascript`, anche se non standard.

Per integrare del codice JavaScript in un documento HTML, bisogna farlo precedere da:

<script type\="text/javascript"\>

e seguire da:

</script\>

Browser più vecchi tipicamente richiedono che il codice inizi con:

  <script language\="JavaScript" type\="text/javascript"\>
  <!--

e finisca con:

  // -->
  </script\>

I segnalatori di commento `<!--` ... `-->` sono necessari per assicurare che il codice non venga visualizzato come testo da browser molto vecchi che non riconoscono il tag `<script>` nei documenti HTML, mentre LANGUAGE è un attributo HTML (il cui uso è ormai sconsigliato) che può essere richiesto da vecchi browser. Comunque, i tag <script> nei documenti [XHTML](/wiki/XHTML "XHTML")/[XML](/wiki/XML "XML") non funzionano se commentati, dato che i parser conformi agli standard XHTML/XML ignorano i commenti e possono anche incontrare problemi con i simboli `--`, `<` e `>` negli script (per esempio, confondendoli con gli operatori di decremento degli interi e di confronto). I documenti XHTML dovrebbero quindi includere gli script come sezioni [CDATA](/wiki/CDATA "CDATA") dell'XML, facendoli precedere da

  <script type\="text/javascript"\>
  //<!\[CDATA\[

e facendoli seguire da

  //\]\]>
  </script\>

(I simboli '//' all'inizio di una linea segnalano l'inizio di un commento JavaScript, per impedire che `<![CDATA[` e `]]>` vengano analizzati dallo script.)

Gli elementi HTML [\[1\]](https://www.w3.org/TR/html4/interact/scripts.html#h-18.2.3) possono contenere eventi intrinseci che possono essere associati a gestori specificati da uno script. Per scrivere del codice HTML 4.01 valido, il server web dovrebbe restituire un 'Content-Script-Type' con valore 'text/JavaScript'. Se il server web non può essere configurato a tale scopo, l'autore del sito web può inserire la seguente dichiarazione nella sezione di intestazione del documento

<meta http-equiv\="Content-Script-Type" content\="text/javascript" />

#### Usi frequenti nei web browser\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=10 "Modifica la sezione Usi frequenti nei web browser") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=10 "Edit section's source code: Usi frequenti nei web browser")\]

JavaScript può essere usato per ogni aspetto dello scripting lato _client_ di un [web browser](/wiki/Web_browser "Web browser"), ma alcuni usi si sono diffusi più di altri. Tra gli esempi ricorrenti vi sono la sostituzione di immagini, la creazione di finestre _pop-up e_ la convalida dei dati inseriti in _[form](/wiki/Form "Form")_. Nella maggior parte dei browser, il seguente frammento di codice [XHTML](/wiki/XHTML "XHTML") mostra un modo con cui un'immagine può essere sostituita con un'altra quando l'utente muove il [cursore](/wiki/Cursore "Cursore") su di essa. Tale effetto è chiamato spesso _rollover_ o _mouse over_. Comunque comportamenti simili possono essere ottenuti anche [usando solo i CSS](http://www.wellstyled.com/css-nopreload-rollovers.html).

 <img src \= "normal.png"
      onclick \= "window.location.href='http://en.wikipedia.org/'"
      onmouseover \= "this.src='rollover.png'"
      onmouseout  \= "this.src='normal.png'" />

#### Filiazioni\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=11 "Modifica la sezione Filiazioni") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=11 "Edit section's source code: Filiazioni")\]

Un nuovo esempio di uso di JavaScript sono i [Bookmarklet](/wiki/Bookmarklet "Bookmarklet"), piccole sezioni di codice all'interno dei _segnalibri_ o _Preferiti_ dei browser web. Il linguaggio di programmazione usato in [Macromedia Flash](/wiki/Macromedia_Flash "Macromedia Flash") (chiamato [ActionScript](/wiki/ActionScript "ActionScript")) ha una forte somiglianza con JavaScript, dovuta alla loro relazione condivisa con [ECMAScript](/wiki/ECMAScript "ECMAScript"). ActionScript ha quasi la stessa sintassi di JavaScript, ma il modello a oggetti[\[7\]](#cite_note-7) è decisamente diverso.

_JavaScript for OSA_ (JavaScript OSA, or JSOSA), è un linguaggio di scripting per [Macintosh](/wiki/Macintosh "Macintosh") basato sull'implementazione JavaScript 1.5 di [Mozilla](/wiki/Mozilla "Mozilla")[\[8\]](#cite_note-8). È un componente [freeware](/wiki/Freeware "Freeware") reso disponibile da [Late Night Software](http://www.latenightsw.com/). L'interazione con il sistema operativo e con le applicazioni di terze parti è gestita tramite un oggetto _MacOS_. A parte ciò, il linguaggio è virtualmente identico all'implementazione Mozilla. È stato proposto come alternativa al più usato linguaggio [AppleScript](/wiki/AppleScript "AppleScript").

Elementi del linguaggio\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=12 "Modifica la sezione Elementi del linguaggio") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=12 "Edit section's source code: Elementi del linguaggio")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Variabili\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=13 "Modifica la sezione Variabili") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=13 "Edit section's source code: Variabili")\]

Le [variabili](/wiki/Variabile_\(informatica\) "Variabile (informatica)") sono in genere tipizzate dinamicamente ovvero sono definite semplicemente assegnando loro un valore oppure usando il comando `let`; quelle dichiarate fuori da qualunque funzione sono in visibilità "globale" ovvero accessibili dall'intera [pagina web](/wiki/Pagina_web "Pagina web"); quelle dichiarate dentro una funzione sono invece locali ovvero interne per quella funzione. Per passare variabili da una pagina all'altra, uno sviluppatore può impostare un [cookie](/wiki/Cookie "Cookie") o usare un frame nascosto o una finestra in background per memorizzarli.

### Oggetti\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=14 "Modifica la sezione Oggetti") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=14 "Edit section's source code: Oggetti")\]

Ogni cosa in JavaScript è o un valore primitivo o un oggetto. Gli oggetti sono entità dotate di unicità (sono uguali solo a sé stessi) e che associano nomi di proprietà a valori. Ciò significa che un oggetto è un [vettore associativo](/wiki/Array "Array") simile agli hash in [Perl](/wiki/Perl "Perl") e [Ruby](/wiki/Ruby_\(linguaggio_di_programmazione\) "Ruby (linguaggio di programmazione)"), o ai dizionari in [Python](/wiki/Python "Python"), [PostScript](/wiki/PostScript "PostScript") e [Smalltalk](/wiki/Smalltalk "Smalltalk").

JavaScript ha diversi generi di oggetti predefiniti, in particolare _[Array](/wiki/Array "Array")_, _Boolean_ ([booleani](/wiki/Variabile_booleana "Variabile booleana")), _Date_ (oggetti contenenti una data e un'ora), _Function_ ([funzioni](/wiki/Funzione_\(informatica\) "Funzione (informatica)")), _Math_ (oggetto contenente funzioni di uso nel calcolo matematico), _Number_ (numeri), _Object_ ([oggetti](/wiki/Oggetto_\(informatica\) "Oggetto (informatica)")), _RegExp_ ([espressioni regolari](/wiki/Espressione_regolare "Espressione regolare")) e _String_ ([stringhe](/wiki/Stringa_\(informatica\) "Stringa (informatica)")). Altri oggetti sono gli "oggetti ospiti", definiti non dal linguaggio ma dall'ambiente di esecuzione. In un browser, i tipici oggetti ospite appartengono al [DOM](/wiki/Document_Object_Model "Document Object Model"): _window_ ([finestra](/wiki/Finestra_\(informatica\) "Finestra (informatica)")), _form_ (maschera), _link_ ([collegamento](/wiki/Collegamento_ipertestuale "Collegamento ipertestuale")) ecc.

[![](//upload.wikimedia.org/wikipedia/commons/0/0c/JSDOM.gif)](/wiki/File:JSDOM.gif)

Definendo un [costruttore](/wiki/Costruttore_\(informatica\) "Costruttore (informatica)"), è possibile definire oggetti. JavaScript è un linguaggio orientato a oggetti basato su prototipi. Ciò significa che l'eredità è fra oggetti, non fra [classi](/wiki/Classe_\(informatica\) "Classe (informatica)") (JavaScript non ha classi). Gli oggetti ereditano le proprietà dai loro prototipi.

Si possono aggiungere ulteriori proprietà o metodi ai singoli oggetti dopo che sono stati creati. Per far questo per tutte le istanze create da un singolo costruttore, si può usare la proprietà `prototype` del costruttore per accedere all'oggetto prototipo.

Esempio: Creazione di un oggetto

// costruttore
function MyObject(attributeA, attributeB)
{
  this.attributeA \= attributeA;
  this.attributeB \= attributeB;
}
 
// crea un Oggetto
obj \= new MyObject('red', 1000);
 
// accede ad un attributo di obj
alert(obj.attributeA);
 
// accede ad un attributo con la notazione del vettore associativo
alert(obj\["attributeA"\]);

#### Simulare l'ereditarietà\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=15 "Modifica la sezione Simulare l'ereditarietà") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=15 "Edit section's source code: Simulare l'ereditarietà")\]

La gerarchia degli oggetti in JavaScript può essere emulata. Per esempio:

function Base()
{
  this.Override \= \_Override;
  this.BaseFunction \= \_BaseFunction;
 
  function \_Override()
  {
    alert("Base::Override()");
  }

  function \_BaseFunction()
  {
    alert("Base::BaseFunction()");
  }
}
 
function Derive()
{
   this.Override \= \_Override;
   function \_Override()
   {
     alert("Derive::Override()");
   }
}

Derive.prototype \= new Base();
 
d \= new Derive();
d.Override();
d.BaseFunction();

risulterà nell'output:

Derive::Override()
Base::BaseFunction()

#### Oggetti predefiniti\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=16 "Modifica la sezione Oggetti predefiniti") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=16 "Edit section's source code: Oggetti predefiniti")\]

Oltre a permettere la definizione di oggetti, JavaScript mette a disposizione tutta una serie di oggetti che possono essere utilizzati per i propri script:

*   [Anchor](/wiki/Anchor "Anchor")
*   [Applet](/wiki/Applet "Applet")
*   [Area](/w/index.php?title=Area_\(XML_DOM\)&action=edit&redlink=1 "Area (XML DOM) (la pagina non esiste)")
*   [Array](/wiki/Array "Array")
*   Base
*   [Basefont](/w/index.php?title=Basefont&action=edit&redlink=1 "Basefont (la pagina non esiste)")
*   [Body](/wiki/Body_\(informatica\) "Body (informatica)")
*   [Button](/wiki/Button_\(informatica\) "Button (informatica)")
*   [Checkbox](/wiki/Checkbox "Checkbox")
*   [Date](/wiki/Tipo_di_dato "Tipo di dato")
*   [Document](/wiki/Document_\(oggetto_XML_DOM\) "Document (oggetto XML DOM)")
*   [Event](/w/index.php?title=Event&action=edit&redlink=1 "Event (la pagina non esiste)")
*   [File](/wiki/File "File")
*   [FileUpload](/wiki/FileUpload "FileUpload")
*   [Form](/wiki/Form "Form")
*   [Frame](/wiki/Elemento_HTML#Frame "Elemento HTML")
*   [Frameset](/wiki/Frameset "Frameset")
*   [Function](/wiki/Funzione_\(informatica\) "Funzione (informatica)")
*   [Hidden](/w/index.php?title=Hidden_\(informatica\)&action=edit&redlink=1 "Hidden (informatica) (la pagina non esiste)")
*   History
*   [Iframe](/wiki/Iframe "Iframe")
*   [Image](/wiki/Image_\(informatica\) "Image (informatica)")
*   Layer
*   [Link](/wiki/Collegamento_ipertestuale "Collegamento ipertestuale")
*   Location
*   [Math](/w/index.php?title=Math&action=edit&redlink=1 "Math (la pagina non esiste)")
*   [Meta](/wiki/Metadata "Metadata")
*   Navigator
*   [Number](/w/index.php?title=Number&action=edit&redlink=1 "Number (la pagina non esiste)")
*   [Object](/w/index.php?title=Object&action=edit&redlink=1 "Object (la pagina non esiste)")
*   [Option](/w/index.php?title=Option&action=edit&redlink=1 "Option (la pagina non esiste)")
*   [Password](/wiki/Password "Password")
*   Radio
*   [RegExp](/wiki/RegExp "RegExp")
*   Reset
*   Screen
*   Select
*   Style
*   String
*   Submit
*   Table
*   [TableData](/w/index.php?title=TableData&action=edit&redlink=1 "TableData (la pagina non esiste)")
*   [TableHeader](/w/index.php?title=TableHeader&action=edit&redlink=1 "TableHeader (la pagina non esiste)")
*   [TableRow](/w/index.php?title=TableRow&action=edit&redlink=1 "TableRow (la pagina non esiste)")
*   [Text](/w/index.php?title=Text&action=edit&redlink=1 "Text (la pagina non esiste)")
*   [Textarea](/w/index.php?title=Textarea&action=edit&redlink=1 "Textarea (la pagina non esiste)")
*   [Window](/wiki/Finestra_\(informatica\) "Finestra (informatica)")

### Array\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=17 "Modifica la sezione Array") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=17 "Edit section's source code: Array")\]

Un array è un'associazione tra interi e valori di tipo arbitrario. In JavaScript, tutti gli oggetti possono associare interi e valori, ma gli array sono un tipo speciale di oggetti che hanno dei comportamenti specifici e metodi specializzati per l'uso degli indici interi (per es., `join`, `slice`, e `push`).

Gli array hanno una proprietà `length` che è garantita essere sempre maggiore dell'indice più grande usato nel vettore. È automaticamente aggiornata se si crea una proprietà con un indice ancora maggiore. Scrivere un numero più piccolo nella proprietà `length` rimuove gli indici più grandi. Questa proprietà è l'unica caratteristica speciale dei vettori, che li distingue dagli altri oggetti.

Con gli elementi degli array si può utilizzare la normale notazione per accedere alle proprietà degli oggetti:

  `myArray[1]`
  `myArray["1"]`

Queste due notazioni sono equivalenti. Non è possibile usare la notazione a punto o le stringhe con una rappresentazione alternativa del numero:

  `myArray.1` (errore di sintassi)
  `myArray(1)` (sintassi errata, ammessa unicamente da Internet Explorer)
  `myArray["01"]` (non è lo stesso di `myArray[1]`)

La dichiarazione di un vettore può usare o una notazione esplicita o il costruttore `Array`:

 `myArray = [0,1,,,4,5];` (vettore di lunghezza 6 con 4 elementi)
 `myArray = new Array(0,1,2,3,4,5);` (vettore con lunghezza 6 e 6 elementi)
 `myArray = new Array(365);` (vettore vuoto con lunghezza 365)

Gli _Array_ sono implementati in modo che solo gli elementi definiti usino memoria; sono "vettori sparsi". Impostare `myArray[10] = 'qualcosa'` e `myArray[57] = 'qualcosaltro'` usa solo lo spazio per questi due elementi, come per ogni altro oggetto. La lunghezza dell'array verrà sempre riportata come 58.

### Strutture di controllo e condizionali\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=18 "Modifica la sezione Strutture di controllo e condizionali") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=18 "Edit section's source code: Strutture di controllo e condizionali")\]

#### if ... else\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=19 "Modifica la sezione if ... else") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=19 "Edit section's source code: if ... else")\]

La struttura di controllo IF corrisponde in italiano a SE

L'istruzione contenuta all'interno delle parentesi graffe verrà eseguita solo e soltanto se la condizione restituisce il valore true (vero),altrimenti verrà eseguita l'istruzione contenuta nell'ELSE.

  **if** (condizione)
  {
     istruzioni;
  }

  **if** (condizione)
  {
     istruzioni;
  }
  **else**
  {
     istruzioni;
  }

#### Ciclo while\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=20 "Modifica la sezione Ciclo while") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=20 "Edit section's source code: Ciclo while")\]

  **while** (condizione)
  {
     istruzioni;
  }

#### Ciclo do ... while\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=21 "Modifica la sezione Ciclo do ... while") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=21 "Edit section's source code: Ciclo do ... while")\]

  **do**
  {
     istruzioni;
  } **while** (condizione);

#### Ciclo for\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=22 "Modifica la sezione Ciclo for") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=22 "Edit section's source code: Ciclo for")\]

  **for** (\[espressione iniziale\]; \[condizione\]; \[espressione di incremento\])
  {
     istruzioni;
  }

#### Ciclo for ... in\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=23 "Modifica la sezione Ciclo for ... in") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=23 "Edit section's source code: Ciclo for ... in")\]

Questo ciclo percorre tutte le proprietà di un oggetto (o gli elementi di un vettore).

  **for** (variabile **in** oggetto)
  {
     istruzioni;
  }

#### Ciclo for ... of\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=24 "Modifica la sezione Ciclo for ... of") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=24 "Edit section's source code: Ciclo for ... of")\]

Questo ciclo percorre tutti i valori di un oggetto (o gli elementi di un vettore).

  **for** (variabile **of** oggetto)
  {
     istruzioni;
  }

#### Istruzione switch\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=25 "Modifica la sezione Istruzione switch") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=25 "Edit section's source code: Istruzione switch")\]

  **switch** (espressione)
  {
     **case** valore1:
        istruzioni;
        **break**;
     **case** valore2:
        istruzioni;
        **break**;
     **default** :
        istruzioni;
  }

### Funzioni\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=26 "Modifica la sezione Funzioni") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=26 "Edit section's source code: Funzioni")\]

Una [funzione](/wiki/Funzione_\(informatica\) "Funzione (informatica)") è un blocco di [istruzioni](/wiki/Istruzione_\(informatica\) "Istruzione (informatica)"), dotato di una lista di argomenti (eventualmente vuota) e che può avere un nome (anche se non è necessario). Una funzione può restituire un valore tramite l'istruzione **return**.

  **function**(può essere vuoto)
  {
     istruzioni;
     **return** espressione;
  }

Il numero degli argomenti passati quando si chiama una funzione non deve necessariamente essere uguale al numero degli argomenti della definizione della funzione (in altre parole, il numero di _**parametri formali**_ non deve necessariamente essere rispettato all'atto dell'invocazione della funzione cioè nella specifica dei _parametri attuali_). All'interno della funzione ci si può riferire alla lista degli argomenti anche tramite il vettore `arguments` (quest'ultimo possiede la proprietà `callee` rappresentante un puntatore alla funzione stessa).

Ogni funzione è un'istanza di _Function_, un tipo di oggetto base. Le funzioni possono essere create e assegnate come ogni altro oggetto:

   **var** myFunc1 = **new** Function("alert('Hello')");
   **var** myFunc2 = myFunc1;
   myFunc2();

produce come output:

   Hello

### Interazione con l'utente\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=27 "Modifica la sezione Interazione con l'utente") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=27 "Edit section's source code: Interazione con l'utente")\]

Tra le altre tecniche con le quali uno script JavaScript può interagire con l'utente all'interno di una pagina Web, ci sono le seguenti:

*   elementi _form_ HTML, modificabili accedendo al DOM HTML;
*   _[Alert dialog box](/w/index.php?title=Alert_dialog_box&action=edit&redlink=1 "Alert dialog box (la pagina non esiste)")_ (finestra di avviso)
*   _[Confirm dialog box](/w/index.php?title=Confirm_dialog_box&action=edit&redlink=1 "Confirm dialog box (la pagina non esiste)")_ (finestra di conferma)
*   _[Prompt dialog box](/w/index.php?title=Prompt_dialog_box&action=edit&redlink=1 "Prompt dialog box (la pagina non esiste)")_ (finestra di richiesta input)
*   [Barra di stato](/w/index.php?title=Barra_di_stato&action=edit&redlink=1 "Barra di stato (la pagina non esiste)") del browser
*   _[Standard output](/wiki/Standard_output "Standard output")_ ("console")

**Nota:** i dialog box non funzionano col browser Opera; non vi è nessun errore, semplicemente non vengono eseguite.

#### Metodi di scrittura a video (Standard Output)\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=28 "Modifica la sezione Metodi di scrittura a video (Standard Output)") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=28 "Edit section's source code: Metodi di scrittura a video (Standard Output)")\]

Per scrivere a video (cioè nella pagina in cui si trova lo script) è possibile utilizzare il metodo document.write(); le stringhe da visualizzare possono essere concatenate utilizzando l'operatore di concatenazione '+':

<html\>
<head\>
<script type\="text/javascript"\>
<!-- Nasconde lo script ai browser obsoleti

// Questa funzione genera una riga orizzontale della larghezza scelta.
function bar(widthPct)
{
  document.write("<hr align='left' width='" + widthPct + "%' />");
}

// Questa funzione genera del testo preceduto da un titolo di dato livello.
function output(headLevel, headText, text)
{
  document.write("<h" + headLevel + ">" + headText + "</h" + headLevel + "><p>" + text + "</p>");
}

// Fine del codice da nascondere -->
</script>
</head>
<body\>
<script type\="text/javascript"\>
<!-- Nasconde lo script ai browser obsoleti

bar(25)
output(2, "JavaScript Rules!", "Usare JavaScript è facile...")

// Fine del codice da nascondere -->
</script>

<p\>Questo è normale HTML, a differenza di quello generato dal codice sopra.</p>

</body>
</html>

### Eventi\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=29 "Modifica la sezione Eventi") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=29 "Edit section's source code: Eventi")\]

Gli elementi di testo possono essere la fonte di vari [eventi](/wiki/Evento_\(informatica\) "Evento (informatica)") che possono avviare un'azione se è stato registrato un [gestore di eventi](/w/index.php?title=Gestore_di_eventi&action=edit&redlink=1 "Gestore di eventi (la pagina non esiste)") ECMAScript. Nell'HTML, questi gestori di eventi sono spesso funzioni definite come anonime direttamente all'interno del tag HTML. La sintassi per richiamare un evento in uno script è la seguente:

Oggetto.evento \= handler;

Esistono varie categorie di eventi:

1.  Eventi attivabili dai tasti del mouse
2.  Eventi attivabili dai movimenti del mouse
3.  Eventi attivabili dal trascinamento del mouse (drag and drop)
4.  Eventi attivabili dall'utente con la tastiera
5.  Eventi attivabili dalle modifiche dell'utente
6.  Eventi legati al "fuoco"
7.  Eventi attivabili dal caricamento degli oggetti
8.  Eventi attivabili dai movimenti delle finestre
9.  Eventi legati a particolari bottoni
10.  Altri e nuovi tipi di eventi

#### Eventi attivabili dai tasti del mouse\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=30 "Modifica la sezione Eventi attivabili dai tasti del mouse") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=30 "Edit section's source code: Eventi attivabili dai tasti del mouse")\]

Lista eventi:

1.  _onClick_: attivato quando si clicca su un oggetto;
2.  _onDblClick_: attivato con un doppio click;
3.  _onMouseDown_: attivato quando si schiaccia il tasto sinistro del mouse;
4.  _onMouseUp_: attivato quando si alza il tasto sinistro del mouse precedentemente schiacciato;
5.  _onContextMenu_: attivato quando si clicca il tasto destro del mouse aprendo il ContextMenu.

Il doppio click è un evento che ingloba gli altri e, per la precisione, attiva in successione onmousedown, onmouseup, onclick.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=31 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=31 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, AREA, B, BDO, BIG, BLOCKQUOTE, BODY, BUTTON, CAPTION, CENTER, CITE, CODE, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FONT, FORM, HR, I, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, KBD, LABEL, LEGEND, LI, LISTING, MAP, MARQUEE, MENU, NEXTID, NOBR, OBJECT, OL, P, PLAINTEXT, PRE, RT, RUBY, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TR, TT, U, UL, VAR, XMP

#### Eventi attivabili dai movimenti del mouse\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=32 "Modifica la sezione Eventi attivabili dai movimenti del mouse") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=32 "Edit section's source code: Eventi attivabili dai movimenti del mouse")\]

Lista eventi:

1.  _onMouseOver_: attivato quando il mouse si muove su un oggetto;
2.  _onMouseOut_: attivato quando il mouse si sposta da un oggetto;
3.  _onMouseMove_: si muove il puntatore del mouse, ma poiché questo evento ricorre spesso (l'utilizzo del mouse è frequente), non è disponibile per default, ma solo abbinato con la cattura degli eventi, che si spiegherà in seguito.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=33 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=33 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, AREA, B, BDO, BIG, BLOCKQUOTE, BODY, BUTTON, CAPTION, CENTER, CITE, CODE, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FONT, FORM, HR, I, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, KBD, LABEL, LEGEND, LI, LISTING, MAP, MARQUEE, MENU, NEXTID, NOBR, OBJECT, OL, P, PLAINTEXT, PRE, RT, RUBY, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TR, TT, U, UL, VAR, XMP

#### Eventi attivabili dal trascinamento del mouse (drag and drop)\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=34 "Modifica la sezione Eventi attivabili dal trascinamento del mouse (drag and drop)") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=34 "Edit section's source code: Eventi attivabili dal trascinamento del mouse (drag and drop)")\]

Lista eventi:

1.  _onDragDrop_: evento attivato quando un utente trascina un oggetto sulla finestra del browser o quando rilascia un file sulla stessa;
2.  _onMove_: attivato quando un oggetto muove una finestra o un frame;
3.  _onDragStart_: evento attivato appena l'utente inizia a trascinare un oggetto;
4.  _onDrag_: attivato quando il mouse trascina un oggetto o una selezione di testo nella finestra dello stesso browser o anche di un altro o anche sul Desktop;
5.  _onDragEnter_: attivato appena l'utente trascina un oggetto su un obiettivo valido dello stesso o di un altro browser;
6.  _onDragOver_: attivato quando l'utente trascina un oggetto su un obiettivo valido ad ospitarlo, ed è simile all'evento precedente, ma viene attivato dopo quello;
7.  _onDragLeave_: attivato quando l'utente trascina un oggetto su un obiettivo adatto per ospitarlo, ma non vi viene rilasciato;
8.  _onDragEnd_: attivato quando l'utente rilascia l'oggetto al termine del trascinamento.
9.  _onDrop_: attivato quando il mouse si alza il tasto del mouse in seguito ad un'operazione di trascinamento;

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=35 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=35 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, AREA, B, BDO, BIG, BLOCKQUOTE, BODY, BUTTON, CAPTION, CENTER, CITE, CODE, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FONT, FORM, HR, I, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, KBD, LABEL, LEGEND, LI, LISTING, MAP, MARQUEE, MENU, NEXTID, NOBR, OBJECT, OL, P, PLAINTEXT, PRE, RT, RUBY, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TR, TT, U, UL, VAR, XMP

#### Eventi attivabili dall'utente con la tastiera\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=36 "Modifica la sezione Eventi attivabili dall'utente con la tastiera") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=36 "Edit section's source code: Eventi attivabili dall'utente con la tastiera")\]

Lista Eventi:

1.  _onKeyPress_: evento attivato quando un utente preme e rilascia un tasto o anche quando lo tiene premuto;
2.  _onKeyDown_: attivato quando viene premuto il tasto;
3.  _onKeyUp_: evento attivato quando un tasto, che era stato premuto, viene rilasciato;
4.  _onHelp_: attivato quando un utente preme il tasto F1;

#### Eventi attivabili dalle modifiche dell'utente\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=37 "Modifica la sezione Eventi attivabili dalle modifiche dell'utente") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=37 "Edit section's source code: Eventi attivabili dalle modifiche dell'utente")\]

##### onChange\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=38 "Modifica la sezione onChange") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=38 "Edit section's source code: onChange")\]

Attivato quando il contenuto di un campo di un form o modulo è modificato o non è più selezionato. Viene utilizzato anche con gli oggetti FileUpload, Select, Text, TextArea.

Esempio:

<input type\="text" value\="Enter email address" name\="userEmail" onChange\=validateInput(this.value) />
<script type\="text/javascript"\>
  this.myForm.userEmail.focus();
  this.myForm.userEmail.select();
 
  function validateInput()
  {
    userInput \= new String();
    userInput \= this.myForm.userEmail.value;
    if (userInput.match("@"))
      alert("Thanks for your interest.");
    else
      alert("Please check your email details are correct before submitting");
  }
</script>

##### onCellChange\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=39 "Modifica la sezione onCellChange") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=39 "Edit section's source code: onCellChange")\]

Attivato quando si modifica un elemento in una base di dati, per questa sua caratteristica ha un uso non propriamente legato a JavaScript;

##### onPropertyChange\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=40 "Modifica la sezione onPropertyChange") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=40 "Edit section's source code: onPropertyChange")\]

Evento attivato quando cambia la proprietà di un elemento;

##### onReadyStateChange\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=41 "Modifica la sezione onReadyStateChange") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=41 "Edit section's source code: onReadyStateChange")\]

Evento attivato quando lo stato del caricamento di un elemento cambia, l'evento è utile, ad esempio, per verificare che un elemento sia stato caricato.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=42 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=42 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, AREA, B, BDO, BIG, BLOCKQUOTE, BODY, BUTTON, CAPTION, CENTER, CITE, CODE, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FONT, FORM, HR, I, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, KBD, LABEL, LEGEND, LI, LISTING, MAP, MARQUEE, MENU, NEXTID, NOBR, OBJECT, OL, P, PLAINTEXT, PRE, RT, RUBY, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TR, TT, U, UL, VAR, XMP

#### Eventi legati al "fuoco"\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=43 "Modifica la sezione Eventi legati al \"fuoco\"") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=43 "Edit section's source code: Eventi legati al \"fuoco\"")\]

##### onFocus\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=44 "Modifica la sezione onFocus") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=44 "Edit section's source code: onFocus")\]

Questo handler è l'opposto di onBlur per cui si attiva quando l'utente entra in un campo;

##### onBlur\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=45 "Modifica la sezione onBlur") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=45 "Edit section's source code: onBlur")\]

Viene attivato quando il puntatore del mouse o il cursore esce dalla finestra corrente utilizzando il mouse o il carattere TAB. Applicato ai moduli, invece, tale handler si avvia se si esce dal campo il cui tag contiene il controllo;

Esempio

Enter email address <input type\="text" value\="" name\="userEmail" onBlur\=addCheck()\>
<script type\="text/javascript"\>
function addCheck()
{
  alert("Please check your email details are correct before submitting")
}
</script>

##### onSelect\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=46 "Modifica la sezione onSelect") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=46 "Edit section's source code: onSelect")\]

Attivabile quando si seleziona del testo all'interno di una casella di testo sia col mouse sia tenendo premuto SHIFT e selezionando con i tasti Freccia;

##### onSelectStart\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=47 "Modifica la sezione onSelectStart") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=47 "Edit section's source code: onSelectStart")\]

Si attiva quando si inizia a selezionare un evento;

##### onbeforeEditFocus\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=48 "Modifica la sezione onbeforeEditFocus") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=48 "Edit section's source code: onbeforeEditFocus")\]

Si attiva con un doppio click o con un click su un oggetto che ha già la selezione, quando questo è in DesignMode;

##### onLoseCapture\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=49 "Modifica la sezione onLoseCapture") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=49 "Edit section's source code: onLoseCapture")\]

Si attiva quando un oggetto perde la cattura del mouse.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=50 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=50 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, AREA, B, BDO, BIG, BLOCKQUOTE, BODY, BUTTON, CAPTION, CENTER, CITE, CODE, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FONT, FORM, HR, I, IMG, INPUT type=button, INPUT type=checkbox, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=radio, INPUT type=reset, INPUT type=submit, INPUT type=text, KBD, LABEL, LEGEND, LI, LISTING, MAP, MARQUEE, MENU, NEXTID, NOBR, OBJECT, OL, P, PLAINTEXT, PRE, RT, RUBY, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TR, TT, U, UL, VAR, XMP

#### Eventi attivabili dal caricamento degli oggetti\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=51 "Modifica la sezione Eventi attivabili dal caricamento degli oggetti") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=51 "Edit section's source code: Eventi attivabili dal caricamento degli oggetti")\]

##### onLoad\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=52 "Modifica la sezione onLoad") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=52 "Edit section's source code: onLoad")\]

Questo handler funziona nel caricamento di oggetti, per lo più finestre e immagini;

##### onUnload\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=53 "Modifica la sezione onUnload") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=53 "Edit section's source code: onUnload")\]

È l'opposto del precedente e funziona quando si lascia una finestra per caricarne un'altra o anche per ricaricare la stessa (col tasto refresh);

##### onAbort\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=54 "Modifica la sezione onAbort") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=54 "Edit section's source code: onAbort")\]

L'Handler dell'evento onAbort permette di specificare del codice nel caso in cui l'utente blocchi il caricamento di un oggetto, o che si blocchi il caricamento di un'immagine.

Questo handler usa le seguenti proprietà dell'evento.

Esempio

  <img name \= "myPic" SRC \= "images/myPic.gif" onAbort \= "alert('Loading of image aborted!')"\>

##### onError\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=55 "Modifica la sezione onError") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=55 "Edit section's source code: onError")\]

Si attiva quando il caricamento di un oggetto causa un errore, ma solo se questo è dovuto ad un errore di sintassi del codice e non del browser così funziona su un link errato di un'immagine della pagina, ma non su un link errato di caricamento di una pagina intera. Opera non gestisce questo evento, ormai obsoleto: per una corretta gestione degli errori si utilizza il costrutto try... catch;

##### onBeforeUnload\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=56 "Modifica la sezione onBeforeUnload") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=56 "Edit section's source code: onBeforeUnload")\]

Questo handler funziona allo stesso modo di onUnload ma si carica in un momento prima;

##### onStop\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=57 "Modifica la sezione onStop") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=57 "Edit section's source code: onStop")\]

Questo handler funziona quando si ferma il caricamento della pagina con il tasto stop del browser e dovrebbe funzionare anche allo stesso modo di onUnload caricandosi prima di questo ma dopo onBeforeUnload.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=58 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=58 "Edit section's source code: Tag di applicazione")\]

1.  onLoad Questo gestore è usato con i tag <BODY> e <FRAMESET> e da JavaScript 1.1anche con <IMG> mentre in Explorer occorre aggiungere anche i tag <SCRIPT>, <LINK>, <EMBED>, <APPLET>. In JavaScript 1.2 in Netscape si aggiunge anche il tag <LAYER>.
2.  onUnload Questo gestore è usato con i tag <BODY> e <FRAMESET> anche in Internet Explorer.
3.  onAbort Questo gestore è usato solo con il tag<IMG> anche in Internet Explorer.
4.  onError Questo gestore è usato solo con il tag<IMG> e con Window mentre in Internet Explorer anche con <OBJECT> e <STYLE>.
5.  onBeforeUnload Questo gestore è usato con i tag <BODY> anche in Internet Explorer.
6.  onStop Questo gestore è usato con i tag <BODY> anche in Internet Explorer.

#### Eventi attivabili dai movimenti delle finestre\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=59 "Modifica la sezione Eventi attivabili dai movimenti delle finestre") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=59 "Edit section's source code: Eventi attivabili dai movimenti delle finestre")\]

Lista Eventi:

1.  onResize: Questo handler si attiva quando l'utente rimpicciolisce o ingrandisce una finestra o un frame o, in caso particolare per Explorer, un oggetto a cui siano stati fissati l'altezza e la larghezza o anche la posizione, come ad esempio un layer;
2.  onScroll: attivato quando si effettua lo scrolling della pagina sia col mouse con i tasti PGUP e PGDOWN o anche con il metodo doScroll.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=60 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=60 "Edit section's source code: Tag di applicazione")\]

A, ADDRESS, APPLET, B, BIG, BLOCKQUOTE, BUTTON, CENTER, CITE, CODE, custom, DD, DFN, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FORM, FRAME, Hn, HR, I, IMG, INPUT type=button, INPUT type=file, INPUT type=image, INPUT type=password, INPUT type=reset, INPUT type=submit, INPUT type=text, ISINDEX, KBD, LABEL, LEGEND, LI, LISTING, MARQUEE, MENU, OBJECT, OL, P, PRE, S, SAMP, SELECT, SMALL, SPAN, STRIKE, STRONG, SUB, SUP, TABLE, TEXTAREA, TT, U, UL, VAR, window, XMP

#### Eventi legati a particolari bottoni\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=61 "Modifica la sezione Eventi legati a particolari bottoni") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=61 "Edit section's source code: Eventi legati a particolari bottoni")\]

1.  onSubmit: Questo handler è attivato dal click su tasto di Invio di un form;
2.  onReset: questo handler è attivato dal click su tasto di Annulla di un form.

##### Tag di applicazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=62 "Modifica la sezione Tag di applicazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=62 "Edit section's source code: Tag di applicazione")\]

Handler applicabile solamente all'oggetto Form.

### Gestione degli errori\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=63 "Modifica la sezione Gestione degli errori") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=63 "Edit section's source code: Gestione degli errori")\]

Le versioni più nuove di JavaScript (a partire da quelle usate in [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") 5 e [Netscape](/wiki/Netscape_Navigator "Netscape Navigator") 6) incorporano la possibilità di un costrutto `try... catch` per la [gestione degli errori](/w/index.php?title=Gestione_degli_errori&action=edit&redlink=1 "Gestione degli errori (la pagina non esiste)").

Il costrutto `try ... catch ... finally` intercetta le [eccezioni](/wiki/Eccezione_\(informatica\) "Eccezione (informatica)") generate da un errore o da un'istruzione `throw`. La sua sintassi è la seguente:

try {
   // Istruzioni in cui possono essere lanciate delle eccezioni
} catch (error) {
   // Istruzioni da eseguire in caso di eccezione
} finally {
   // Istruzioni da eseguire successivamente in entrambi i casi
}

Inizialmente, vengono eseguite le istruzioni all'interno del blocco `try`. Se viene lanciata un'eccezione, il flusso di controllo dello script viene passato immediatamente alle istruzioni del blocco catch, con l'eccezione che viene resa disponibile come argomento `error`. In caso contrario, il blocco `catch` viene saltato. Una volta che il blocco `catch` è concluso, o il blocco `try` viene eseguito fino alla fine senza che sia lanciata alcuna eccezione, vengono eseguite le istruzioni nel blocco `finally`.

Integrazione con HTML5\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=64 "Modifica la sezione Integrazione con HTML5") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=64 "Edit section's source code: Integrazione con HTML5")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Con la nascita di HTML5 JavaScript ha acquisito diverse novità[\[9\]](#cite_note-9):

### Riconoscimento vocale\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=65 "Modifica la sezione Riconoscimento vocale") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=65 "Edit section's source code: Riconoscimento vocale")\]

L'utente può parlare all'interno di un form anziché scrivere:

<input type\="text" x\-webkit\-speech />
var recognition \= new SpeechRecognition();
var speechRecognitionList \= new SpeechGrammarList();

### Notifiche di sistema\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=66 "Modifica la sezione Notifiche di sistema") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=66 "Edit section's source code: Notifiche di sistema")\]

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/de/Echo_notifications_maxed_out.png/220px-Echo_notifications_maxed_out.png)](/wiki/File:Echo_notifications_maxed_out.png)

La pagina web può contenere altri tipi di elementi grafici come questi. Non si tratta di notifiche di sistema.

Le notifiche di sistema sono progettate per richiedere l'attenzione dell'utente, mostrando un breve messaggio anche al di fuori della pagina corrente o anche se il browser non è al momento in primo piano. Data la loro potenziale invasività, è possibile utilizzarle solo se il sito ha già ottenuto dall'utente uno specifico consenso.[\[10\]](#cite_note-mozdev-notification-api-10)[\[11\]](#cite_note-mozdev-notification-permission-11)

Le notifiche di sistema, come suggerisce il nome, sono integrate coerentemente al dispositivo corrente (su desktop è spesso un [pop-up](/wiki/Pop-up "Pop-up"), su mobile è spesso nella barra di notifica, etc.).[\[10\]](#cite_note-mozdev-notification-api-10)[\[11\]](#cite_note-mozdev-notification-permission-11)

Segue un esempio minimale con due pulsanti, per richiedere i permessi per le notifiche di sistema e per visualizzarne una.

<button id\="btn-asking"\>Richiedi permessi</button\>
<button id\="btn-notify"\>Mostra notifica</button\>

<script\>
// ricerca pulsanti
var btnAsking \= document.getElementById( 'btn-asking' );
var btnNotify \= document.getElementById( 'btn-notify' );

// dopo il click lancia la richiesta di permessi
btnAsking.addEventListener( 'click', function() {
    Notification.requestPermission();
} );

// dopo il click mostro una notifica
btnNotify.addEventListener( 'click', function() {
    new Notification( "Nuova notifica!" );
} );
</script\>

L'approfondimento della documentazione ufficiale permette di effettuare ulteriori buone pratiche, fra le quali:

*   verifica del supporto (per esempio [Safari](/wiki/Safari "Safari") su [iOS](/wiki/IOS "IOS") è noto per non aver raggiunto un ottimo supporto)[\[11\]](#cite_note-mozdev-notification-permission-11)[\[12\]](#cite_note-12)
*   rispetto del consenso pregresso (evitare di richiedere molteplici richieste di consenso)
*   rispetto del dissenso (evitare di tentare l'apertura di notifiche se non c'è consenso)

Il lancio della richiesta di permessi dovrebbe avvenire solo a seguito di una interazione con l'utente (come il click di un pulsante). Molti browser moderni proibiscono persino l'apertura del pop-up della richiesta di consenso per le notifiche native se non c'è stata interazione.[\[11\]](#cite_note-mozdev-notification-permission-11)

### Contenuto editabile\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=67 "Modifica la sezione Contenuto editabile") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=67 "Edit section's source code: Contenuto editabile")\]

Possibilità per l'utente di modificare la pagina web come se si trovasse all'interno di un editor [WYSIWYG](/wiki/WYSIWYG "WYSIWYG"), anche se le modifiche non saranno salvate nella reale pagina web remota ma solo visibili nel browser dell'utente:

<div contenteditable\="true"\>
Questo testo è editabile dall'utente.
</div>
document.execCommand("defaultParagraphSeparator", false, "p");

### Drag out\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=68 "Modifica la sezione Drag out") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=68 "Edit section's source code: Drag out")\]

Trascinamento di file da una pagina web al computer o altro dispositivo:

<a href\="src/star.mp3" draggable\="true" class\="dragout"
   data\-downloadurl\="MIMETYPE:FILENAME:ABSOLUTE\_URI\_TO\_FILE"\>download</a>
var files \= document.querySelectorAll('.dragout');
for (var i \= 0, file; file \= files\[i\]; ++i) {
  file.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('DownloadURL', this.dataset.downloadurl);
  }, false);
}

### File System API\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=69 "Modifica la sezione File System API") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=69 "Edit section's source code: File System API")\]

Scrivere in modo asincrono un file in un file system in modalità sandbox utilizzando JavaScript:

window.requestFileSystem(window.TEMPORARY, 1024 \* 1024, function(fs) {
  fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

    fileEntry.createWriter(function(writer) { .

        writer.onwrite \= function(e) { ... };
        writer.onerror \= function(e) { ... };

        var bb \= new BlobBuilder();
        bb.append('Hello World!');

        writer.write(bb.getBlob('text/plain'));

    }, opt\_errorHandler);
  }
}, opt\_errorHandler);

### Geolocalizzazione\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=70 "Modifica la sezione Geolocalizzazione") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=70 "Edit section's source code: Geolocalizzazione")\]

Possibilità per l'utente di dichiarare a un'applicazione o una pagina web la propria posizione:

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latLng \= new google.maps.LatLng(
        position.coords.latitude, position.coords.longitude);
    var marker \= new google.maps.Marker({position: latLng, map: map});
    map.setCenter(latLng);
  }, errorHandler);
}

### Device Orientation\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=71 "Modifica la sezione Device Orientation") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=71 "Edit section's source code: Device Orientation")\]

Riportare dati che indicano cambiamenti all'orientamento del dispositivo in relazione all'attrazione di gravità. In particolare, i dispositivi portatili come i telefoni cellulari possono utilizzare queste informazioni per ruotare automaticamente il display in modo da rimanere in posizione verticale, presentando una vista a tutto schermo del contenuto web quando il dispositivo viene ruotato in modo che la sua larghezza sia maggiore della sua altezza.

window.addEventListener('deviceorientation', function(event) {
  var a \= event.alpha;
  var b \= event.beta;
  var g \= event.gamma;
}, false);

### Local Storage, Application Cache e Quota API\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=72 "Modifica la sezione Local Storage, Application Cache e Quota API") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=72 "Edit section's source code: Local Storage, Application Cache e Quota API")\]

Possibilità di navigare in pagine web visualizzate in precedenza anche senza connessione internet:

saveButton.addEventListener('click', function () {
  window.localStorage.setItem('value', area.value);
  window.localStorage.setItem('timestamp', (new Date()).getTime());
}, false);
textarea.value \= window.localStorage.getItem('value');

<html manifest\="cache.appcache"\>
window.applicationCache.addEventListener('updateready', function(e) {
  if (window.applicationCache.status \== window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    if (confirm('A new version of this site is available. Load it?')) {
      window.location.reload();
    }
  }
}, false);

### Web SQL Database\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=73 "Modifica la sezione Web SQL Database") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=73 "Edit section's source code: Web SQL Database")\]

Nuove funzioni integrate con [SQL:](/wiki/Structured_Query_Language "Structured Query Language")

var db \= window.openDatabase("DBName", "1.0", "description", 5\*1024\*1024); //5MB
db.transaction(function(tx) {
  tx.executeSql("SELECT \* FROM test", \[\], successCallback, errorCallback);
});

### Indexed DB\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=74 "Modifica la sezione Indexed DB") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=74 "Edit section's source code: Indexed DB")\]

Questa API utilizza gli indici per abilitare le ricerche ad alte prestazioni dei dati. Sebbene l'archiviazione web sia utile per archiviare quantità minori di dati, è meno utile per archiviare quantità maggiori di dati strutturati. IndexedDB fornisce una soluzione.

var idbRequest \= window.indexedDB.open('Database Name');
idbRequest.onsuccess \= function(event) {
  var db \= event.srcElement.result;
  var transaction \= db.transaction(\[\], IDBTransaction.READ\_ONLY);
  var curRequest \= transaction.objectStore('ObjectStore Name').openCursor();
  curRequest.onsuccess \= ...;
};

webkitStorageInfo.queryUsageAndQuota(webkitStorageInfo.TEMPORARY, function(used, remaining) {
    console.log("Used quota: " + used + ", remaining quota: " + remaining);
  }
);
webkitStorageInfo.requestQuota(webkitStorageInfo.PERSISTENT, 10 \* 1024 \* 1024, function(used) {
    console.log("Used quota: " + used + ", remaining quota: " + remaining);
  }
);

### Web Workers\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=75 "Modifica la sezione Web Workers") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=75 "Edit section's source code: Web Workers")\]

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[Web worker](/wiki/Web_worker "Web worker")**.

Aumentano le prestazioni della pagina web:

var worker \= new Worker('task.js');
worker.onmessage \= function(event) { alert(event.data); };
worker.postMessage('data');
task.js:
self.onmessage \= function(event) {
  // Do some work.
  self.postMessage("recv'd: " + event.data);
};

### Web Socket\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=76 "Modifica la sezione Web Socket") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=76 "Edit section's source code: Web Socket")\]

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[WebSocket](/wiki/WebSocket "WebSocket")**.

Comunicazione bidirezionale full-duplex sul Web: sia il server che il client possono inviare dati in qualsiasi momento o anche contemporaneamente. Vengono inviati solo i dati stessi, senza il sovraccarico delle intestazioni HTTP, riducendo drasticamente la larghezza di banda.

var socket \= new WebSocket('www.sito.it');
socket.onopen \= function(event) {
  socket.send('Ciao');
};
socket.onmessage \= function(event) { alert(event.data); }
socket.onclose \= function(event) { alert('chiuso'); }

### Pagine web a tutto schermo\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=77 "Modifica la sezione Pagine web a tutto schermo") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=77 "Edit section's source code: Pagine web a tutto schermo")\]

if (elem.webkitRequestFullScreen) {
  elem.webkitRequestFullScreen(Element.ALLOW\_KEYBOARD\_INPUT);
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.requestFullScreen){
  elem.requestFullScreen();
}
:full\-screen\-ancestor:root {
  overflow: hidden;
}
:full\-screen\-ancestor {
  z\-index: auto;
  transform: none;
  transition: none;
}
pre:full\-screen {
  background\-color: white;
}

### Nuovi selettori (API DOM)\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=78 "Modifica la sezione Nuovi selettori (API DOM)") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=78 "Edit section's source code: Nuovi selettori (API DOM)")\]

var el \= document.getElementById('section1');
el.focus();
var els \= document.getElementsByTagName('div');
els\[0\].focus();
var els \= document.getElementsByClassName('section');
els\[0\].focus();
var els \= document.querySelectorAll("ul li:nth-child(odd)");
var tds \= document.querySelectorAll("table.test > tr > td");
var el \= document.querySelector("table.test > tr > td");

### Attributi personalizzabili\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=79 "Modifica la sezione Attributi personalizzabili") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=79 "Edit section's source code: Attributi personalizzabili")\]

<div id\="out" data\-id\="good" data\-name\="joe" data\-screen\-name\="user1"\></div>
var el \= document.querySelector('#out');
el.setAttribute('data-foo', 'bar');
var html \= \[\];
for (var key in el.dataset) {
  html.push(key, ': ', el.dataset\[key\], '<br>');
}
el.innerHTML \= html.join('');
Output:
id: good
name: joe
screenName: user1
foo: bar

### Element.classList\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=80 "Modifica la sezione Element.classList") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=80 "Edit section's source code: Element.classList")\]

L'utilizzo `classList`è un'alternativa all'accesso all'elenco di classi di un elemento come stringa delimitata da spazi tramite `element.className`.

<div id\="main" class\="shadow rounded"\></div>
var el \= document.querySelector('#main').classList;
el.add('highlight');
el.remove('shadow');
el.toggle('highlight');

console.log(el.contains('highlight')); // false
console.log(el.contains('shadow')); // false
console.log(el.classList.toString() \== el.className);
//output:
<div id\="main" class\="rounded"\></div>

### History API\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=81 "Modifica la sezione History API") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=81 "Edit section's source code: History API")\]

Offre la possibilità di modificare l'[URL](/wiki/Uniform_Resource_Locator "Uniform Resource Locator") di un sito Web senza un aggiornamento completo della pagina. Ciò è utile per caricare parti di una pagina con JavaScript in modo tale che il contenuto sia notevolmente diverso e garantisca un nuovo URL.

link.addEventListener('click', function(event) {
  history.pushState('Contact Page Form', 'Contact Page', '/contact');
});
window.addEventListener('popstate', function(event) {
  document.querySelector('h1').innerHTML \= event.state;
});

webkitStorageInfo.queryUsageAndQuota(webkitStorageInfo.TEMPORARY, function(used, remaining) {
    console.log("Used quota: " + used + ", remaining quota: " + remaining);
  }
);
webkitStorageInfo.requestQuota(webkitStorageInfo.PERSISTENT, 10 \* 1024 \* 1024, function(used) {
    console.log("Used quota: " + used + ", remaining quota: " + remaining);
  }
);

### JS nel web 3D\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=82 "Modifica la sezione JS nel web 3D") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=82 "Edit section's source code: JS nel web 3D")\]

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[Web 3D](/wiki/Web_3D "Web 3D")** e **[WebGL](/wiki/WebGL "WebGL")**.

JavaScript comprende librerie e framework per creare interfacce 3D sul web[\[13\]](#cite_note-13).

[![Esempio di WebGL](//upload.wikimedia.org/wikipedia/commons/b/b6/Webgl_loader_ctm.png)](/wiki/File:Webgl_loader_ctm.png)

Esempio di WebGL

function main() {
  const canvas \= document.querySelector("#glCanvas");
  const gl \= canvas.getContext("webgl");
  if (gl \=== null) {
    alert("Aggiorna il tuo browser");
    return;
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR\_BUFFER\_BIT);
}
window.onload \= main;

Alternative\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=83 "Modifica la sezione Alternative") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=83 "Edit section's source code: Alternative")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[HTML5](/wiki/HTML5 "HTML5")** e **[CSS](/wiki/CSS "CSS")**.

Con la nascita di [HTML 5](/wiki/HTML5 "HTML5") e CSS 3 alcune possibilità come la creazione di[\[14\]](#cite_note-:0-14)[\[15\]](#cite_note-15)[\[16\]](#cite_note-16)[\[17\]](#cite_note-17)[\[18\]](#cite_note-18)[\[19\]](#cite_note-19)[\[20\]](#cite_note-20):

*   gallerie/slide di immagini e video
*   [tooltip](/wiki/Tooltip "Tooltip")
*   [menu](/wiki/Menu_\(informatica\) "Menu (informatica)") di navigazione a tendina, a tabulazione, _accordion_ e [toggle](/wiki/Toggle "Toggle")
*   effetti al passaggio del [mouse](/wiki/Mouse "Mouse") sul testo, sui [link](/wiki/Collegamento_ipertestuale "Collegamento ipertestuale") e sulle immagini
*   Navigazione "sticky" (si può permettere ad un elemento di rimanere fisso anche se la pagina scorre)
*   Scorrimento orizzontale dei contenuti senza le barre di scorrimento del browser
*   Barre di caricamento progressive
*   [Widget](/wiki/Widget_\(informatica\) "Widget (informatica)")
*   [drag and drop](/wiki/Drag_and_drop "Drag and drop")
*   [Calcolatrici](/wiki/Calcolatrice "Calcolatrice")

possono essere attuate senza l'utilizzo di JavaScript, cosa che con HTML 4 e CSS 2 era spesso impossibile fare[\[14\]](#cite_note-:0-14).

Esempi di UI JavaScript\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=84 "Modifica la sezione Esempi di UI JavaScript") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=84 "Edit section's source code: Esempi di UI JavaScript")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Magnifying_glass_icon_mgx2.svg/18px-Magnifying_glass_icon_mgx2.svg.png) Lo stesso argomento in dettaglio: **[jQuery](/wiki/JQuery "JQuery")**, **[jQuery UI](/wiki/JQuery_UI "JQuery UI")** e **[Tooltip](/wiki/Tooltip "Tooltip")**.

*   [![Menu JS a tendina](//upload.wikimedia.org/wikipedia/commons/thumb/4/44/Javascript-menu.png/120px-Javascript-menu.png)](/wiki/File:Javascript-menu.png "Menu JS a tendina")
    
    Menu JS a tendina
    
*   [![Galleria di immagini JS Drag and Drop stile Polaroid](//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Javascript-gallery-polaroid.png/120px-Javascript-gallery-polaroid.png)](/wiki/File:Javascript-gallery-polaroid.png "Galleria di immagini JS Drag and Drop stile Polaroid")
    
    Galleria di immagini JS [Drag and Drop](/wiki/Drag_and_drop "Drag and drop") stile [Polaroid](/wiki/Sistema_Polaroid "Sistema Polaroid")
    
*   [![Tooltip JS](//upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Javascript-tooltip.png/120px-Javascript-tooltip.png)](/wiki/File:Javascript-tooltip.png "Tooltip JS")
    
    [Tooltip](/wiki/Tooltip "Tooltip") JS
    

Note\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=85 "Modifica la sezione Note") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=85 "Edit section's source code: Note")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [**^**](#cite_ref-1) [ECMA-262 13th Edition](https://262.ecma-international.org/13.0/), su 262.ecma-international.org.
2.  [**^**](#cite_ref-2) (EN) [A Brief History of JavaScript](https://auth0.com/blog/a-brief-history-of-javascript/), su Auth0 - Blog. URL consultato il 28 febbraio 2020.
3.  [**^**](#cite_ref-ecma262_3-0) [Standard ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
4.  [**^**](#cite_ref-4) David Flanagan, JavaScript - La guida, Milano, Apogeo, 2000, p.1, [ISBN](/wiki/ISBN "ISBN") [88-7303-627-9](/wiki/Speciale:RicercaISBN/88-7303-627-9 "Speciale:RicercaISBN/88-7303-627-9").
5.  [**^**](#cite_ref-5) David Flanagan, JavaScript - La guida, Milano, Apogeo, 2000, p.53, [ISBN](/wiki/ISBN "ISBN") [88-7303-627-9](/wiki/Speciale:RicercaISBN/88-7303-627-9 "Speciale:RicercaISBN/88-7303-627-9").
6.  [**^**](#cite_ref-Flanagan_6-0) David Flanagan, JavaScript - La guida, Milano, Apogeo, 2000, [ISBN](/wiki/ISBN "ISBN") [88-7303-627-9](/wiki/Speciale:RicercaISBN/88-7303-627-9 "Speciale:RicercaISBN/88-7303-627-9").
7.  [**^**](#cite_ref-7) [Flex Quick Start - Defining data models | Adobe Developer Connection](https://www.adobe.com/devnet/flex/quickstarts/defining_data_models.html), su adobe.com. URL consultato il 28 febbraio 2020.
8.  [**^**](#cite_ref-8) (EN) Matt Neuburg, [AppleScript: The Definitive Guide: Scripting and Automating Your Mac](https://books.google.it/books?id=zQy4mgqIccsC&pg=PT67&lpg=PT67&dq=JavaScript+for+OSA&source=bl&ots=sffWwSTFP0&sig=ACfU3U0Tvju43QHP8fourQ0aoslUhrKSJA&hl=it&sa=X&ved=2ahUKEwjJpI2KiPPnAhUxuaQKHVZgDrQQ6AEwBXoECAkQAQ#v=onepage&q=JavaScript%20for%20OSA&f=false), "O'Reilly Media, Inc.", 4 gennaio 2006, [ISBN](/wiki/ISBN "ISBN") [978-1-4493-7915-5](/wiki/Speciale:RicercaISBN/978-1-4493-7915-5 "Speciale:RicercaISBN/978-1-4493-7915-5"). URL consultato il 28 febbraio 2020.
9.  [**^**](#cite_ref-9) [slide](https://github.com/html5rocks/slides.html5rocks.com), su github.com.
10.  **^** _[a](#cite_ref-mozdev-notification-api_10-0)_ _[b](#cite_ref-mozdev-notification-api_10-1)_ (EN) [Using the Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API), su developer.mozilla.org. URL consultato il 23 giugno 2022.
11.  **^** _[a](#cite_ref-mozdev-notification-permission_11-0)_ _[b](#cite_ref-mozdev-notification-permission_11-1)_ _[c](#cite_ref-mozdev-notification-permission_11-2)_ _[d](#cite_ref-mozdev-notification-permission_11-3)_ (EN) [Notification.permission](https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission), su developer.mozilla.org. URL consultato il 23 giugno 2022.
12.  [**^**](#cite_ref-12) (EN) [Notification API: requestPermission](https://caniuse.com/mdn-api_notification_requestpermission), su caniuse.com. URL consultato il 23 giugno 2022.
13.  [**^**](#cite_ref-13) (EN) [20 Interactive 3D JavaScript Libraries & Frameworks – Bashooka](https://bashooka.com/coding/3d-javascript-libraries/), su bashooka.com, 30 maggio 2019. URL consultato il 18 febbraio 2021.
14.  **^** _[a](#cite_ref-:0_14-0)_ _[b](#cite_ref-:0_14-1)_ (EN) [5 things you can do with CSS instead of JavaScript](https://blog.logrocket.com/5-things-you-can-do-with-css-instead-of-javascript/), su LogRocket Blog, 29 ottobre 2019. URL consultato il 9 febbraio 2021.
15.  [**^**](#cite_ref-15) (EN) [49 CSS Galleries](https://freefrontend.com/css-gallery/), su Free Frontend. URL consultato il 9 febbraio 2021.
16.  [**^**](#cite_ref-16) [LiveCode - HTML5 - Calculator App Demo](https://livecode.com/demo/html5/calculator/), su livecode.com. URL consultato il 9 febbraio 2021.
17.  [**^**](#cite_ref-17) Andrea Pacchiarotti, [Menù responsivo in HTML e CSS senza JavaScript e jQuery](https://www.andreapacchiarotti.it/archivio/menu-responsivo.html), su Andrea pacchiarotti. URL consultato il 9 febbraio 2021.
18.  [**^**](#cite_ref-18) [Come fare un magico, animato Tooltips con CSS](https://webdesign.tutsplus.com/it/tutorials/css-tooltip-magic--cms-28082), su Web Design Envato Tuts+. URL consultato il 9 febbraio 2021.
19.  [**^**](#cite_ref-19) (EN) [Using the HTML5 Drag and Drop API](https://web.dev/drag-and-drop/), su web.dev. URL consultato il 9 febbraio 2021.
20.  [**^**](#cite_ref-20) [How To Create a File Upload Button](https://www.w3schools.com/howto/howto_html_file_upload_button.asp), su w3schools.com. URL consultato il 9 febbraio 2021.

Bibliografia\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=86 "Modifica la sezione Bibliografia") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=86 "Edit section's source code: Bibliografia")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   Michel Dreyfus: _JavaScript_ (Addison Wesley Longman Italia - 2002)
*   David Flanagan: _JavaScript versione 1.5_ (Apogeo - 2002)
*   Emily A. Vander Veer: _JavaScript (con CD-ROM)_ (Apogeo - 2001)
*   Roberto Abbate: _Imparare JavaScript_ (Edizioni Master - 2006)
*   Shelley Powers: _Programmare in JavaScript_ (Tecniche Nuove - 2007)
*   Douglas Crockford: _JavaScript - Le tecniche per scrivere il codice migliore_ (Tecniche Nuove - 2009)

Voci correlate\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=87 "Modifica la sezione Voci correlate") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=87 "Edit section's source code: Voci correlate")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [AJAX](/wiki/Asynchronous_JavaScript_and_XML "Asynchronous JavaScript and XML")
*   [DHTML](/wiki/DHTML "DHTML")
*   [jQuery](/wiki/JQuery "JQuery")
*   [JSON](/wiki/JSON "JSON")
*   [Linguaggio di scripting](/wiki/Linguaggio_di_scripting "Linguaggio di scripting")
*   [Prototype JavaScript Framework](/wiki/Prototype_JavaScript_Framework "Prototype JavaScript Framework")
*   [TypeScript](/wiki/TypeScript "TypeScript")
*   [JavaScriptCore](/wiki/JavaScriptCore "JavaScriptCore")

Altri progetti\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=88 "Modifica la sezione Altri progetti") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=88 "Edit section's source code: Altri progetti")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Altri progetti

*   [Wikibooks](https://it.wikibooks.org/wiki/JavaScript "b:JavaScript")
*   [Wikiversità](https://it.wikiversity.org/wiki/JavaScript "v:JavaScript")
*   [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:JavaScript?uselang=it)

*   [![Collabora a Wikibooks](//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikibooks-logo.svg/18px-Wikibooks-logo.svg.png)](https://it.wikibooks.org/wiki/ "Collabora a Wikibooks") [Wikibooks](https://it.wikibooks.org/wiki/ "b:") contiene una guida al **[linguaggio JavaScript](https://it.wikibooks.org/wiki/JavaScript "b:JavaScript")**
*   [![Collabora a Wikiversità](//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wikiversity_logo_2017.svg/18px-Wikiversity_logo_2017.svg.png)](https://it.wikiversity.org/wiki/ "Collabora a Wikiversità") [Wikiversità](https://it.wikiversity.org/wiki/ "v:") contiene risorse su **[JavaScript](https://it.wikiversity.org/wiki/JavaScript "v:JavaScript")**
*   [![Collabora a Wikimedia Commons](//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/18px-Commons-logo.svg.png)](https://commons.wikimedia.org/wiki/?uselang=it "Collabora a Wikimedia Commons") [Wikimedia Commons](https://commons.wikimedia.org/wiki/?uselang=it) contiene immagini o altri file su **[JavaScript](https://commons.wikimedia.org/wiki/Category:JavaScript?uselang=it)**

Collegamenti esterni\[[modifica](/w/index.php?title=JavaScript&veaction=edit&section=89 "Modifica la sezione Collegamenti esterni") | [modifica wikitesto](/w/index.php?title=JavaScript&action=edit&section=89 "Edit section's source code: Collegamenti esterni")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   (EN) [Sito ufficiale](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/), su ecma-international.org. [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P856 "Modifica su Wikidata")
*   [JavaScript](https://www.sapere.it/enciclopedia/JavaScript.html), su sapere.it, [De Agostini](/wiki/De_Agostini "De Agostini"). [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P6706 "Modifica su Wikidata")
*   [Javascript](https://www.treccani.it/enciclopedia/javascript_\(Lessico-del-XXI-Secolo\)/), in Lessico del XXI secolo, [Istituto dell'Enciclopedia Italiana](/wiki/Istituto_dell%27Enciclopedia_Italiana "Istituto dell'Enciclopedia Italiana"), 2012-2013. [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P9775 "Modifica su Wikidata")
*   [Javascript](https://www.treccani.it/enciclopedia/javascript_\(Enciclopedia-della-Matematica\)/), in Enciclopedia della Matematica, [Istituto dell'Enciclopedia Italiana](/wiki/Istituto_dell%27Enciclopedia_Italiana "Istituto dell'Enciclopedia Italiana"), 2013. [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P9621 "Modifica su Wikidata")
*   (EN) André Munro, [JavaScript](https://www.britannica.com/technology/JavaScript), su [Enciclopedia Britannica](/wiki/Enciclopedia_Britannica "Enciclopedia Britannica"), Encyclopædia Britannica, Inc. [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P1417 "Modifica su Wikidata")
*   (EN) [Opere riguardanti JavaScript](https://openlibrary.org/subjects/javascript_\(computer_program_language\)), su [Open Library](/wiki/Open_Library "Open Library"), [Internet Archive](/wiki/Internet_Archive "Internet Archive"). [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2005#P3847 "Modifica su Wikidata")
*   (EN) [JavaScript](https://foldoc.org/JavaScript "foldoc:JavaScript"), in [Free On-line Dictionary of Computing](/wiki/Free_On-line_Dictionary_of_Computing "Free On-line Dictionary of Computing"), Denis Howe. Disponibile con licenza [GFDL](/wiki/GNU_Free_Documentation_License "GNU Free Documentation License")

Specifiche

*   (EN) [ECMA 262 ECMAScript Language Specification](https://www.ecma-international.org/publications/standards/Ecma-262.htm), su ecma-international.org.
*   (EN) [Proposal for JavaScript 2.0](https://mozilla.org/js/language/js20/), su mozilla.org.
*   (EN) [Guide for JavaScript 1.1 as used by Navigator 3.x](https://web.archive.org/web/20041106050312/http://wp.netscape.com/eng/mozilla/3.0/handbook/javascript/index.html), su wp.netscape.com. URL consultato il 7 dicembre 2004 (archiviato dall'url originale il 6 novembre 2004).

Storia

*   (EN) [Innovators of the Net: Brendan Eich and JavaScript](https://web.archive.org/web/20080208124612/http://wp.netscape.com/comprod/columns/techvision/innovators_be.html) ([Marc Andreesen](/w/index.php?title=Marc_Andreesen&action=edit&redlink=1 "Marc Andreesen (la pagina non esiste)"), Netscape TechVision, 24 Jun 1998)
*   (EN) [Brendan Eich and JavaScript](http://inventors.about.com/library/inventors/bl_javascript.htm) [Archiviato](https://archive.today/20121208142259/http://inventors.about.com/od/jstartinventions/a/JavaScript.htm) l'8 dicembre 2012 in [Archive.is](/wiki/Archive.is "Archive.is"). (about.com)

Apprendimento

*   [Grashopper: Learn to code](https://www.aranzulla.it/siti-per-programmare-1391660.html#chapter4) (in italiano)
*   [Tutorial JavaScript su w3schools.com](https://www.w3schools.com/js/default.asp) (in italiano)
*   [Guide, articoli, faq, raccolte script su JavaScript](https://www.html.it/javascript/) di HTML.it
*   [Guida completa a JavaScript](https://www.html.it/guide/guida-javascript-di-base/) di HTML.it
*   [Una dettagliata JavaScript Object Reference](https://www.w3schools.com/jsref/), su w3schools.com.
*   [Learn & Practice Frontend Development for free](https://javascript.info)

*   (EN) [PHP](https://pear.php.net/package-info.php?pacid=93), su pear.php.net.
*   (EN) [TCL](http://tcllib.sourceforge.net/doc/javascript.html), su tcllib.sourceforge.net.
*   (EN) [Perl](https://search.cpan.org/~jpierce/Data-JavaScript-1.08/JavaScript.pm), su search.cpan.org.

Strumenti

*   [Un tool di formattazione (scritto in Java) per il linguaggio JavaScript](https://web.archive.org/web/20090123191802/http://www.skenz.it/traduttori/tesine/index.php?title=Formattazione_javascript), su skenz.it. URL consultato il 22 aprile 2008 (archiviato dall'url originale il 23 gennaio 2009).
*   [Guida pratica per abilitare JavaScript nei vari browser e sistemi operativi](http://demo.opencrx.org/opencrx-core-CRX/helpJsCookie_it_IT.html)

.mw-parser-output .navbox{border:1px solid #aaa;clear:both;margin:auto;padding:2px;width:100%}.mw-parser-output .navbox th{padding-left:1em;padding-right:1em;text-align:center}.mw-parser-output .navbox>tbody>tr:first-child>th{background:#ccf;font-size:90%;width:100%}.mw-parser-output .navbox\_navbar{float:left;margin:0;padding:0 10px 0 0;text-align:left;width:6em}.mw-parser-output .navbox\_title{font-size:110%}.mw-parser-output .navbox\_abovebelow{background:#ddf;font-size:90%;font-weight:normal}.mw-parser-output .navbox\_group{background:#ddf;font-size:90%;padding:0 10px;white-space:nowrap}.mw-parser-output .navbox\_list{font-size:90%;width:100%}.mw-parser-output .navbox\_list a{white-space:nowrap}html:not(.vector-feature-night-mode-enabled) .mw-parser-output .navbox\_odd{background:#fdfdfd}html:not(.vector-feature-night-mode-enabled) .mw-parser-output .navbox\_even{background:#f7f7f7}.mw-parser-output .navbox\_center{text-align:center}.mw-parser-output .navbox .navbox\_image{padding-left:7px;vertical-align:middle;width:0}.mw-parser-output .navbox+.navbox{margin-top:-1px}.mw-parser-output .navbox .mw-collapsible-toggle{font-weight:normal;text-align:right;width:7em}.mw-parser-output .subnavbox{margin:-3px;width:100%}.mw-parser-output .subnavbox\_group{background:#ddf;padding:0 10px}

[V](/wiki/Template:Browser_Internet "Template:Browser Internet") · [D](/wiki/Discussioni_template:Browser_Internet "Discussioni template:Browser Internet") · [M](https://it.wikipedia.org/w/index.php?title=Template:Browser_Internet&action=edit)

[Browser Internet](/wiki/Browser "Browser")

Caratteristiche  **·** standard  **·** protocolli

Caratteristiche

[Segnalibri](/wiki/Segnalibro_\(World_Wide_Web\) "Segnalibro (World Wide Web)") **·** [Estensioni](/wiki/Estensione_del_browser "Estensione del browser") **·** [Navigazione privata](/wiki/Navigazione_privata "Navigazione privata") **·** [Sincronizzazione](/w/index.php?title=Sincronizzazione_del_browser&action=edit&redlink=1 "Sincronizzazione del browser (la pagina non esiste)")

Standard

[HTML](/wiki/HTML "HTML") ([v5](/wiki/HTML5 "HTML5")) **·** [CSS](/wiki/CSS "CSS") **·** [DOM](/wiki/Document_Object_Model "Document Object Model") **·** JavaScript ([IndexedDB](/w/index.php?title=Indexed_Database_API&action=edit&redlink=1 "Indexed Database API (la pagina non esiste)") **·** [Web storage](/w/index.php?title=Web_storage&action=edit&redlink=1 "Web storage (la pagina non esiste)") **·** [WebAssembly](/wiki/WebAssembly "WebAssembly") **·** [WebGL](/wiki/WebGL "WebGL"))

Protocolli

[HTTP](/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") ([v2](/wiki/HTTP/2 "HTTP/2") **·** [v3](/wiki/HTTP/3 "HTTP/3") **·** [Cookies](/wiki/Cookie "Cookie") **·** [Crittografia](/wiki/HTTPS "HTTPS")) **·** [OCSP](/wiki/Online_Certificate_Status_Protocol "Online Certificate Status Protocol") **·** [WebRTC](/wiki/WebRTC "WebRTC") **·** [WebSocket](/wiki/WebSocket "WebSocket")

Attivi

Basati su [Blink](/wiki/Blink_\(motore_di_rendering\) "Blink (motore di rendering)")

[Avast Secure Browser](/w/index.php?title=Avast_Secure_Browser&action=edit&redlink=1 "Avast Secure Browser (la pagina non esiste)") **·** [Beaker](/w/index.php?title=Beaker_\(web_browser\)&action=edit&redlink=1 "Beaker (web browser) (la pagina non esiste)") **·** [Blisk](/w/index.php?title=Blisk_\(browser\)&action=edit&redlink=1 "Blisk (browser) (la pagina non esiste)") **·** [Brave](/wiki/Brave_\(browser\) "Brave (browser)") **·** [Chrome](/wiki/Google_Chrome "Google Chrome") **·** [Chromium](/wiki/Chromium "Chromium") **·** [Cốc Cốc](/w/index.php?title=C%E1%BB%91c_C%E1%BB%91c&action=edit&redlink=1 "Cốc Cốc (la pagina non esiste)") **·** [Dragon](/w/index.php?title=Comodo_Dragon&action=edit&redlink=1 "Comodo Dragon (la pagina non esiste)") **·** [Edge](/wiki/Microsoft_Edge "Microsoft Edge") **·** [Epic](/w/index.php?title=Epic_\(browser\)&action=edit&redlink=1 "Epic (browser) (la pagina non esiste)") **·** [Falkon](/wiki/Falkon "Falkon") **·** [Kinza](/w/index.php?title=Kinza_browser&action=edit&redlink=1 "Kinza browser (la pagina non esiste)") **·** [Maxthon](/wiki/Maxthon "Maxthon") **·** [Opera](/wiki/Opera_\(browser\) "Opera (browser)") **·** [Otter](/w/index.php?title=Otter_Browser&action=edit&redlink=1 "Otter Browser (la pagina non esiste)") **·** [Puffin](/w/index.php?title=Puffin_Browser&action=edit&redlink=1 "Puffin Browser (la pagina non esiste)") **·** [SalamWeb](/w/index.php?title=SalamWeb&action=edit&redlink=1 "SalamWeb (la pagina non esiste)") **·** [Samsung Internet](/wiki/Samsung_Internet_Browser "Samsung Internet Browser") **·** [Silk](/wiki/Silk_browser "Silk browser") **·** [Sleipnir](/w/index.php?title=Sleipnir_\(web_browser\)&action=edit&redlink=1 "Sleipnir (web browser) (la pagina non esiste)") **·** [Sputnik](/w/index.php?title=Sputnik_\(search_engine\)&action=edit&redlink=1 "Sputnik (search engine) (la pagina non esiste)") **·** [SRWare](/wiki/SRWare_Iron "SRWare Iron") **·** [Torch](/w/index.php?title=Torch_\(browser\)&action=edit&redlink=1 "Torch (browser) (la pagina non esiste)") **·** [UC](/wiki/UC_Browser "UC Browser") **·** [Vivaldi](/wiki/Vivaldi_\(browser\) "Vivaldi (browser)") **·** [Whale](/w/index.php?title=Naver_Whale&action=edit&redlink=1 "Naver Whale (la pagina non esiste)") **·** [Yandex](/wiki/Yandex.Browser "Yandex.Browser")

Basati su [Gecko](/wiki/Gecko "Gecko")

[Firefox](/wiki/Mozilla_Firefox "Mozilla Firefox") ([per Android](/wiki/Firefox_per_Android "Firefox per Android")) **·** [GNU IceCat](/wiki/GNU_IceCat "GNU IceCat") **·** [IceDragon](/w/index.php?title=Comodo_IceDragon&action=edit&redlink=1 "Comodo IceDragon (la pagina non esiste)") **·** [K-Meleon](/wiki/K-Meleon "K-Meleon") **·** [PirateBrowser](/wiki/PirateBrowser "PirateBrowser") **·** [SeaMonkey](/wiki/SeaMonkey "SeaMonkey") **·** [SlimBrowser](/w/index.php?title=SlimBrowser&action=edit&redlink=1 "SlimBrowser (la pagina non esiste)") **·** [TenFourFox](/w/index.php?title=TenFourFox&action=edit&redlink=1 "TenFourFox (la pagina non esiste)") **·** [Tor](/wiki/Tor_Browser "Tor Browser") **·** [Waterfox](/wiki/Waterfox "Waterfox")

Basati su [WebKit](/wiki/WebKit "WebKit")

[Dolphin](/wiki/Dolphin_Browser "Dolphin Browser") **·** [Dooble](/wiki/Dooble "Dooble") **·** [Firefox per iOS](/wiki/Firefox_per_iOS "Firefox per iOS") **·** [GNOME Web](/wiki/GNOME_Web "GNOME Web") **·** [iCab](/wiki/ICab "ICab") **·** [Konqueror](/wiki/Konqueror "Konqueror") **·** [Midori](/wiki/Midori_\(browser\) "Midori (browser)") **·** [Safari](/wiki/Safari_\(browser\) "Safari (browser)") **·** [surf](/wiki/Surf_\(browser\) "Surf (browser)") **·** [WebPositive](/wiki/WebPositive "WebPositive")

Altro

[360](/w/index.php?title=360_Secure_Browser&action=edit&redlink=1 "360 Secure Browser (la pagina non esiste)") **·** [Avant](/wiki/Avant_Browser "Avant Browser") **·** [Basilisk](/wiki/Basilisk_\(browser\) "Basilisk (browser)") **·** [Cake Browser](/w/index.php?title=Cake_Browser&action=edit&redlink=1 "Cake Browser (la pagina non esiste)") **·** [CM Browser](/w/index.php?title=CM_Browser&action=edit&redlink=1 "CM Browser (la pagina non esiste)") **·** [eww](/w/index.php?title=Eww_\(web_browser\)&action=edit&redlink=1 "Eww (web browser) (la pagina non esiste)") **·** [Links](/wiki/Links "Links") **·** [Lunascape](/w/index.php?title=Lunascape&action=edit&redlink=1 "Lunascape (la pagina non esiste)") **·** [Lynx](/wiki/Lynx_\(software\) "Lynx (software)") **·** [NetFront](/w/index.php?title=NetFront&action=edit&redlink=1 "NetFront (la pagina non esiste)") **·** [NetSurf](/wiki/NetSurf "NetSurf") **·** [Pale Moon](/wiki/Pale_Moon_\(browser\) "Pale Moon (browser)") **·** [QQ browser](/w/index.php?title=QQ_browser&action=edit&redlink=1 "QQ browser (la pagina non esiste)") **·** [qutebrowser](/wiki/Qutebrowser "Qutebrowser") **·** [w3m](/wiki/W3m "W3m") **·** [WebbIE](/w/index.php?title=WebbIE&action=edit&redlink=1 "WebbIE (la pagina non esiste)")

Inattivi

Basati su [Gecko](/wiki/Gecko "Gecko")

[Beonex Communicator](/w/index.php?title=Beonex_Communicator&action=edit&redlink=1 "Beonex Communicator (la pagina non esiste)") **·** [Camino](/wiki/Camino_\(browser\) "Camino (browser)") **·** [Classilla](/w/index.php?title=Classilla&action=edit&redlink=1 "Classilla (la pagina non esiste)") **·** [Conkeror](/wiki/Conkeror "Conkeror") **·** [Galeon](/wiki/Galeon "Galeon") **·** [Ghostzilla](/w/index.php?title=Ghostzilla&action=edit&redlink=1 "Ghostzilla (la pagina non esiste)") **·** [Kazehakase](/wiki/Kazehakase "Kazehakase") **·** [Kylo](/w/index.php?title=Kylo_\(browser\)&action=edit&redlink=1 "Kylo (browser) (la pagina non esiste)") **·** [Lotus](/wiki/Lotus_Symphony "Lotus Symphony") **·** [MicroB](/w/index.php?title=MicroB&action=edit&redlink=1 "MicroB (la pagina non esiste)") **·** [Minimo](/wiki/Minimo_\(browser\) "Minimo (browser)") **·** [Mozilla suite](/wiki/Mozilla_Application_Suite "Mozilla Application Suite") **·** [Pogo](/w/index.php?title=AT%26T_Pogo&action=edit&redlink=1 "AT&T Pogo (la pagina non esiste)") **·** [Strata](/w/index.php?title=Kirix_Strata&action=edit&redlink=1 "Kirix Strata (la pagina non esiste)") **·** [Swiftfox](/wiki/Swiftfox "Swiftfox") **·** [Swiftweasel](/wiki/Swiftweasel "Swiftweasel") **·** [Timberwolf](/w/index.php?title=Timberwolf_\(web_browser\)&action=edit&redlink=1 "Timberwolf (web browser) (la pagina non esiste)") **·** [xB](/w/index.php?title=XB_Browser&action=edit&redlink=1 "XB Browser (la pagina non esiste)")

Basati su [Trident](/wiki/Trident_\(motore_di_rendering\) "Trident (motore di rendering)")

[AOL](/wiki/AOL_Explorer "AOL Explorer") **·** [Deepnet](/w/index.php?title=Deepnet_Explorer&action=edit&redlink=1 "Deepnet Explorer (la pagina non esiste)") **·** [GreenBrowser](/wiki/GreenBrowser "GreenBrowser") **·** [MediaBrowser](/w/index.php?title=MediaBrowser&action=edit&redlink=1 "MediaBrowser (la pagina non esiste)") **·** [MenuBox](/w/index.php?title=MenuBox&action=edit&redlink=1 "MenuBox (la pagina non esiste)") **·** [NeoPlanet](/w/index.php?title=NeoPlanet&action=edit&redlink=1 "NeoPlanet (la pagina non esiste)") **·** [NetCaptor](/wiki/NetCaptor "NetCaptor") **·** [SpaceTime](/wiki/SpaceTime_3D "SpaceTime 3D") **·** [UltraBrowser](/w/index.php?title=UltraBrowser&action=edit&redlink=1 "UltraBrowser (la pagina non esiste)") **·** [ZAC](/w/index.php?title=ZAC_Browser&action=edit&redlink=1 "ZAC Browser (la pagina non esiste)")

Basati su [WebKit](/wiki/WebKit "WebKit")

[Arora](/wiki/Arora "Arora") **·** [BOLT](/wiki/Bolt_\(browser\) "Bolt (browser)") **·** [Opera Coast](/w/index.php?title=Opera_Coast&action=edit&redlink=1 "Opera Coast (la pagina non esiste)") **·** [Flock](/wiki/Flock "Flock") **·** [Fluid](/w/index.php?title=Fluid_\(browser\)&action=edit&redlink=1 "Fluid (browser) (la pagina non esiste)") **·** [Google TV](/wiki/Google_TV_\(sistema_operativo\) "Google TV (sistema operativo)") **·** [Iris](/w/index.php?title=Iris_Browser&action=edit&redlink=1 "Iris Browser (la pagina non esiste)") **·** [Mercury](/w/index.php?title=Mercury_Browser&action=edit&redlink=1 "Mercury Browser (la pagina non esiste)") **·** [OmniWeb](/wiki/OmniWeb "OmniWeb") **·** [Origyn](/w/index.php?title=Origyn_Web_Browser&action=edit&redlink=1 "Origyn Web Browser (la pagina non esiste)") **·** [QtWeb](/wiki/QtWeb "QtWeb") **·** [rekonq](/wiki/Rekonq "Rekonq") **·** [RockMelt](/wiki/RockMelt "RockMelt") **·** [Shiira](/wiki/Shiira "Shiira") **·** [Steel](/w/index.php?title=Steel_\(browser\)&action=edit&redlink=1 "Steel (browser) (la pagina non esiste)") **·** [Browser for Symbian](/w/index.php?title=Nokia_Browser_for_Symbian&action=edit&redlink=1 "Nokia Browser for Symbian (la pagina non esiste)") **·** [Uzbl](/w/index.php?title=Uzbl&action=edit&redlink=1 "Uzbl (la pagina non esiste)") **·** [xombrero](/w/index.php?title=Xombrero&action=edit&redlink=1 "Xombrero (la pagina non esiste)")

Altro

[abaco](/w/index.php?title=Abaco_\(browser\)&action=edit&redlink=1 "Abaco (browser) (la pagina non esiste)") **·** [Amaya](/wiki/Amaya_\(browser\) "Amaya (browser)") **·** [Arachne](/wiki/Arachne "Arachne") **·** [Arena](/w/index.php?title=Arena_\(browser\)&action=edit&redlink=1 "Arena (browser) (la pagina non esiste)") **·** [Blazer](/w/index.php?title=Blazer_\(browser\)&action=edit&redlink=1 "Blazer (browser) (la pagina non esiste)") **·** [Charon](/w/index.php?title=Charon_\(browser\)&action=edit&redlink=1 "Charon (browser) (la pagina non esiste)") **·** [Deepfish](/w/index.php?title=Microsoft_Live_Labs_Deepfish&action=edit&redlink=1 "Microsoft Live Labs Deepfish (la pagina non esiste)") **·** [Dillo](/wiki/Dillo "Dillo") **·** [ELinks](/wiki/ELinks "ELinks") **·** [Gazelle](/w/index.php?title=Gazelle_\(browser\)&action=edit&redlink=1 "Gazelle (browser) (la pagina non esiste)") **·** [HotJava](/w/index.php?title=HotJava&action=edit&redlink=1 "HotJava (la pagina non esiste)") **·** [IBM Home Page Reader](/w/index.php?title=IBM_Home_Page_Reader&action=edit&redlink=1 "IBM Home Page Reader (la pagina non esiste)") **·** [IBM WebExplorer](/w/index.php?title=IBM_WebExplorer&action=edit&redlink=1 "IBM WebExplorer (la pagina non esiste)") **·** [IBrowse](/w/index.php?title=IBrowse&action=edit&redlink=1 "IBrowse (la pagina non esiste)") **·** [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") **·** [KidZui](/w/index.php?title=KidZui&action=edit&redlink=1 "KidZui (la pagina non esiste)") **·** [Line Mode](/w/index.php?title=Line_Mode_Browser&action=edit&redlink=1 "Line Mode Browser (la pagina non esiste)") **·** [Mosaic](/wiki/Mosaic "Mosaic") **·** [MSN TV](/wiki/MSN_TV "MSN TV") **·** [NetPositive](/w/index.php?title=NetPositive&action=edit&redlink=1 "NetPositive (la pagina non esiste)") **·** [Netscape](/wiki/Netscape_Navigator "Netscape Navigator") **·** [Skweezer](/w/index.php?title=Skweezer&action=edit&redlink=1 "Skweezer (la pagina non esiste)") **·** [Skyfire](/wiki/Skyfire_\(software\) "Skyfire (software)") **·** [Teashark](/w/index.php?title=Teashark&action=edit&redlink=1 "Teashark (la pagina non esiste)") **·** [ThunderHawk](/w/index.php?title=ThunderHawk&action=edit&redlink=1 "ThunderHawk (la pagina non esiste)") **·** [Vision](/w/index.php?title=Vision_Mobile_Browser&action=edit&redlink=1 "Vision Mobile Browser (la pagina non esiste)") **·** [WinWAP](/w/index.php?title=WinWAP&action=edit&redlink=1 "WinWAP (la pagina non esiste)") **·** [WorldWideWeb](/wiki/WorldWideWeb "WorldWideWeb")

[Categoria](/wiki/Categoria:Browser "Categoria:Browser")  **·** [Diffusione](/wiki/Browser#Diffusione "Browser")

[V](/wiki/Template:Principali_linguaggi_di_programmazione "Template:Principali linguaggi di programmazione") · [D](/wiki/Discussioni_template:Principali_linguaggi_di_programmazione "Discussioni template:Principali linguaggi di programmazione") · [M](https://it.wikipedia.org/w/index.php?title=Template:Principali_linguaggi_di_programmazione&action=edit)

Principali [linguaggi di programmazione](/wiki/Linguaggio_di_programmazione "Linguaggio di programmazione") ([tutti](/wiki/Lista_dei_linguaggi_di_programmazione "Lista dei linguaggi di programmazione"))

[ABAP](/wiki/ABAP "ABAP") **·** [Ada](/wiki/Ada_\(linguaggio_di_programmazione\) "Ada (linguaggio di programmazione)") **·** [ALGOL](/wiki/ALGOL "ALGOL") **·** [APL](/wiki/APL "APL") **·** [Assembly](/wiki/Linguaggio_assembly "Linguaggio assembly") **·** [Awk](/wiki/Awk "Awk") **·** [BASIC](/wiki/BASIC "BASIC") **·** [C](/wiki/C_\(linguaggio_di_programmazione\) "C (linguaggio di programmazione)") **·** [C++](/wiki/C%2B%2B "C++") **·** [C#](/wiki/C_sharp "C sharp") **·** [COBOL](/wiki/COBOL "COBOL") **·** [Delphi](/wiki/Embarcadero_Delphi "Embarcadero Delphi") **·** [Eiffel](/wiki/Eiffel_\(linguaggio_di_programmazione\) "Eiffel (linguaggio di programmazione)") **·** [Fortran](/wiki/Fortran "Fortran") **·** [F#](/wiki/F_Sharp "F Sharp") **·** [Haskell](/wiki/Haskell_\(linguaggio_di_programmazione\) "Haskell (linguaggio di programmazione)") **·** [IDL](/wiki/Interactive_Data_Language "Interactive Data Language") **·** [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)") **·** JavaScript **·** [J#](/wiki/J_sharp "J sharp") **·** [Lisp](/wiki/Lisp "Lisp") **·** [LOGO](/wiki/Logo_\(informatica\) "Logo (informatica)") **·** [Lua](/wiki/Lua "Lua") **·** [ML](/wiki/ML_\(linguaggio_di_programmazione\) "ML (linguaggio di programmazione)") **·** [Objective-C](/wiki/Objective-C "Objective-C") **·** [OCaml](/wiki/OCaml "OCaml") **·** [Pascal](/wiki/Pascal_\(linguaggio_di_programmazione\) "Pascal (linguaggio di programmazione)") **·** [Perl](/wiki/Perl "Perl") **·** [PHP](/wiki/PHP "PHP") **·** [PL/I](/wiki/PL/I "PL/I") **·** [PLaSM](/wiki/PLaSM "PLaSM") **·** [Prolog](/wiki/Prolog "Prolog") **·** [Python](/wiki/Python "Python") **·** [Ruby](/wiki/Ruby_\(linguaggio_di_programmazione\) "Ruby (linguaggio di programmazione)") **·** [Rust](/wiki/Rust_\(linguaggio_di_programmazione\) "Rust (linguaggio di programmazione)") **·** [SAS](/wiki/SAS_\(software\) "SAS (software)") **·** [Scheme](/wiki/Scheme "Scheme") **·** [sh](/wiki/Bourne_shell "Bourne shell") **·** [Simula](/wiki/Simula "Simula") **·** [Smalltalk](/wiki/Smalltalk "Smalltalk") **·** [SQL](/wiki/Structured_Query_Language "Structured Query Language") **·** [Swift](/wiki/Swift_\(linguaggio_di_programmazione\) "Swift (linguaggio di programmazione)") **·** [Visual Basic](/wiki/Visual_Basic "Visual Basic")

[V](/wiki/Template:Framework_per_applicazioni_web "Template:Framework per applicazioni web") · [D](/wiki/Discussioni_template:Framework_per_applicazioni_web "Discussioni template:Framework per applicazioni web") · [M](https://it.wikipedia.org/w/index.php?title=Template:Framework_per_applicazioni_web&action=edit)

[Framework per applicazioni web](/wiki/Framework_per_applicazioni_web "Framework per applicazioni web")

[C++](/wiki/C%2B%2B "C++")

[CppCMS](/w/index.php?title=CppCMS&action=edit&redlink=1 "CppCMS (la pagina non esiste)") **·** [Wt](/wiki/Wt_\(Web_Toolkit\) "Wt (Web Toolkit)")

[CLI](/wiki/Common_Language_Infrastructure "Common Language Infrastructure")

[ASP.NET](/wiki/ASP.NET "ASP.NET") ([Core](/w/index.php?title=ASP.NET_Core&action=edit&redlink=1 "ASP.NET Core (la pagina non esiste)") **·** [AJAX](/w/index.php?title=ASP.NET_AJAX&action=edit&redlink=1 "ASP.NET AJAX (la pagina non esiste)") **·** [Dynamic Data](/w/index.php?title=ASP.NET_Dynamic_Data&action=edit&redlink=1 "ASP.NET Dynamic Data (la pagina non esiste)") **·** [MVC](/wiki/ASP.NET_MVC_Framework "ASP.NET MVC Framework") **·** [Razor](/wiki/ASP.NET_Razor "ASP.NET Razor") **·** [Web Forms](/w/index.php?title=ASP.NET_Web_Forms&action=edit&redlink=1 "ASP.NET Web Forms (la pagina non esiste)")) **·** [Blazor](/w/index.php?title=Blazor&action=edit&redlink=1 "Blazor (la pagina non esiste)") **·** [DNN](/wiki/DotNetNuke "DotNetNuke") **·** [BFC](/w/index.php?title=Base_One_Foundation_Component_Library&action=edit&redlink=1 "Base One Foundation Component Library (la pagina non esiste)") **·** [MonoRail](/w/index.php?title=MonoRail_\(software\)&action=edit&redlink=1 "MonoRail (software) (la pagina non esiste)") **·** [OpenRasta](/w/index.php?title=OpenRasta&action=edit&redlink=1 "OpenRasta (la pagina non esiste)") **·** [Umbraco](/wiki/Umbraco "Umbraco") **·** [WebSharper](/w/index.php?title=WebSharper&action=edit&redlink=1 "WebSharper (la pagina non esiste)")

[ColdFusion](/wiki/Adobe_ColdFusion "Adobe ColdFusion")

[CFWheels](/w/index.php?title=ColdFusion_on_Wheels&action=edit&redlink=1 "ColdFusion on Wheels (la pagina non esiste)") **·** [ColdBox Platform](/w/index.php?title=ColdBox_Platform&action=edit&redlink=1 "ColdBox Platform (la pagina non esiste)") **·** [ColdSpring](/w/index.php?title=ColdSpring_Framework&action=edit&redlink=1 "ColdSpring Framework (la pagina non esiste)") **·** [Fusebox](/w/index.php?title=Fusebox_\(web_framework\)&action=edit&redlink=1 "Fusebox (web framework) (la pagina non esiste)") **·** [Model-Glue](/w/index.php?title=Model-Glue&action=edit&redlink=1 "Model-Glue (la pagina non esiste)")

[Common LISP](/wiki/Common_LISP "Common LISP")

[Caveman2](/w/index.php?title=Caveman2&action=edit&redlink=1 "Caveman2 (la pagina non esiste)") **·** [CL-HTTP](/w/index.php?title=CL-HTTP&action=edit&redlink=1 "CL-HTTP (la pagina non esiste)") **·** [Weblocks](/w/index.php?title=Weblocks&action=edit&redlink=1 "Weblocks (la pagina non esiste)")

[Haskell](/wiki/Haskell_\(linguaggio_di_programmazione\) "Haskell (linguaggio di programmazione)")

[Yesod](/w/index.php?title=Yesod_\(web_framework\)&action=edit&redlink=1 "Yesod (web framework) (la pagina non esiste)") **·** [Snap](/w/index.php?title=Snap_\(web_framework\)&action=edit&redlink=1 "Snap (web framework) (la pagina non esiste)")

[Java](/wiki/Piattaforma_Java "Piattaforma Java")

[AppFuse](/w/index.php?title=AppFuse&action=edit&redlink=1 "AppFuse (la pagina non esiste)") **·** [Flexive](/w/index.php?title=Flexive&action=edit&redlink=1 "Flexive (la pagina non esiste)") **·** [Grails](/wiki/Grails "Grails") **·** [GWT](/wiki/Google_Web_Toolkit "Google Web Toolkit") **·** [ICEfaces](/wiki/ICEfaces "ICEfaces") **·** [ItsNat](/w/index.php?title=ItsNat&action=edit&redlink=1 "ItsNat (la pagina non esiste)") **·** [JavaServer Faces](/wiki/JavaServer_Faces "JavaServer Faces") **·** [JHipster](/w/index.php?title=JHipster&action=edit&redlink=1 "JHipster (la pagina non esiste)") **·** [Jspx](/w/index.php?title=Jspx-bay&action=edit&redlink=1 "Jspx-bay (la pagina non esiste)") **·** [JWt](/w/index.php?title=JWt_\(Java_web_toolkit\)&action=edit&redlink=1 "JWt (Java web toolkit) (la pagina non esiste)") **·** [OpenXava](/w/index.php?title=OpenXava&action=edit&redlink=1 "OpenXava (la pagina non esiste)") **·** [Play](/wiki/Play_Framework "Play Framework") **·** [Remote Application Platform](/w/index.php?title=Remote_Application_Platform&action=edit&redlink=1 "Remote Application Platform (la pagina non esiste)") **·** [RIFE](/w/index.php?title=RIFE&action=edit&redlink=1 "RIFE (la pagina non esiste)") **·** [Seam](/w/index.php?title=JBoss_Seam&action=edit&redlink=1 "JBoss Seam (la pagina non esiste)") **·** [Sling](/w/index.php?title=Apache_Sling&action=edit&redlink=1 "Apache Sling (la pagina non esiste)") **·** [Spring](/wiki/Spring_Framework#Model-view-controller_framework "Spring Framework") **·** [Stripes](/w/index.php?title=Stripes_\(framework\)&action=edit&redlink=1 "Stripes (framework) (la pagina non esiste)") **·** [Struts](/wiki/Apache_Struts "Apache Struts") **·** [Tapestry](/w/index.php?title=Apache_Tapestry&action=edit&redlink=1 "Apache Tapestry (la pagina non esiste)") **·** [Vaadin](/wiki/Vaadin "Vaadin") **·** [Vert.x](/w/index.php?title=Vert.x&action=edit&redlink=1 "Vert.x (la pagina non esiste)") **·** [WebWork](/w/index.php?title=WebWork&action=edit&redlink=1 "WebWork (la pagina non esiste)") **·** [Wicket](/w/index.php?title=Apache_Wicket&action=edit&redlink=1 "Apache Wicket (la pagina non esiste)") **·** [WaveMaker](/w/index.php?title=WaveMaker&action=edit&redlink=1 "WaveMaker (la pagina non esiste)") **·** [ZK](/w/index.php?title=ZK_\(framework\)&action=edit&redlink=1 "ZK (framework) (la pagina non esiste)")

JavaScript

[Angular](/wiki/Angular "Angular")/[AngularJS](/wiki/AngularJS "AngularJS") **·** [Backbone.js](/w/index.php?title=Backbone.js&action=edit&redlink=1 "Backbone.js (la pagina non esiste)") **·** [Chaplin.js](/w/index.php?title=Chaplin.js&action=edit&redlink=1 "Chaplin.js (la pagina non esiste)") **·** [Closure](/w/index.php?title=Google_Closure_Tools&action=edit&redlink=1 "Google Closure Tools (la pagina non esiste)") **·** [Dojo Toolkit](/w/index.php?title=Dojo_Toolkit&action=edit&redlink=1 "Dojo Toolkit (la pagina non esiste)") **·** [Ember.js](/w/index.php?title=Ember.js&action=edit&redlink=1 "Ember.js (la pagina non esiste)") **·** [Express.js](/wiki/Express.js "Express.js") **·** [Ext JS](/wiki/Ext_JS "Ext JS") **·** [jQuery](/wiki/JQuery "JQuery") **·** [Knockout](/wiki/Knockout_\(web_framework\) "Knockout (web framework)") **·** [Meteor](/w/index.php?title=Meteor_\(web_framework\)&action=edit&redlink=1 "Meteor (web framework) (la pagina non esiste)") **·** [MooTools](/w/index.php?title=MooTools&action=edit&redlink=1 "MooTools (la pagina non esiste)") **·** [Next.js](/wiki/Next.js "Next.js") **·** [Node.js](/wiki/Node.js "Node.js") **·** [OpenUI5](/w/index.php?title=OpenUI5&action=edit&redlink=1 "OpenUI5 (la pagina non esiste)") **·** [Prototype](/wiki/Prototype_JavaScript_Framework "Prototype JavaScript Framework") **·** [React](/wiki/React_\(web_framework\) "React (web framework)") **·** [Rico](/w/index.php?title=Rico_\(Ajax\)&action=edit&redlink=1 "Rico (Ajax) (la pagina non esiste)") **·** [script.aculo.us](/wiki/Script.aculo.us "Script.aculo.us") **·** [Sencha Touch](/w/index.php?title=Sencha_Touch&action=edit&redlink=1 "Sencha Touch (la pagina non esiste)") **·** [SproutCore](/w/index.php?title=SproutCore&action=edit&redlink=1 "SproutCore (la pagina non esiste)") **·** [Svelte](/w/index.php?title=Svelte&action=edit&redlink=1 "Svelte (la pagina non esiste)") **·** [Vue.js](/wiki/Vue.js "Vue.js") **·** [Wakanda](/w/index.php?title=Wakanda_\(software\)&action=edit&redlink=1 "Wakanda (software) (la pagina non esiste)")

[Perl](/wiki/Perl "Perl")

[Catalyst](/wiki/Catalyst_\(software\) "Catalyst (software)") **·** [Dancer](/w/index.php?title=Dancer_\(software\)&action=edit&redlink=1 "Dancer (software) (la pagina non esiste)") **·** [Mason](/w/index.php?title=Mason_\(Perl\)&action=edit&redlink=1 "Mason (Perl) (la pagina non esiste)") **·** [Maypole](/w/index.php?title=Maypole&action=edit&redlink=1 "Maypole (la pagina non esiste)") **·** [Mojolicious](/w/index.php?title=Mojolicious&action=edit&redlink=1 "Mojolicious (la pagina non esiste)") **·** [WebGUI](/w/index.php?title=WebGUI&action=edit&redlink=1 "WebGUI (la pagina non esiste)")

[PHP](/wiki/PHP "PHP")

[CakePHP](/wiki/CakePHP "CakePHP") **·** [CodeIgniter](/wiki/CodeIgniter "CodeIgniter") **·** [Drupal](/wiki/Drupal "Drupal") **·** [Fat-Free](/w/index.php?title=Fat-Free_Framework&action=edit&redlink=1 "Fat-Free Framework (la pagina non esiste)") **·** [FuelPHP](/w/index.php?title=FuelPHP&action=edit&redlink=1 "FuelPHP (la pagina non esiste)") **·** [Flow](/w/index.php?title=Neos_Flow&action=edit&redlink=1 "Neos Flow (la pagina non esiste)") **·** [Grav](/w/index.php?title=Grav_\(CMS\)&action=edit&redlink=1 "Grav (CMS) (la pagina non esiste)") **·** [Gyroscope](/w/index.php?title=Gyroscope_\(software\)&action=edit&redlink=1 "Gyroscope (software) (la pagina non esiste)") **·** [Horde](/wiki/Horde "Horde") **·** [Joomla!](/wiki/Joomla! "Joomla!") **·** [Kohana](/w/index.php?title=Kohana_\(framework\)&action=edit&redlink=1 "Kohana (framework) (la pagina non esiste)") **·** [Laravel](/wiki/Laravel "Laravel") **·** [Li3](/w/index.php?title=Li3_\(software\)&action=edit&redlink=1 "Li3 (software) (la pagina non esiste)") **·** [Midgard](/w/index.php?title=Midgard_\(software\)&action=edit&redlink=1 "Midgard (software) (la pagina non esiste)") **·** [MODX](/w/index.php?title=MODX&action=edit&redlink=1 "MODX (la pagina non esiste)") **·** [Nette](/wiki/Nette_Framework "Nette Framework") **·** [Phalcon](/w/index.php?title=Phalcon_\(framework\)&action=edit&redlink=1 "Phalcon (framework) (la pagina non esiste)") **·** [PHP-Fusion](/wiki/PHP-Fusion "PHP-Fusion") **·** [Pop PHP](/w/index.php?title=Pop_PHP_Framework&action=edit&redlink=1 "Pop PHP Framework (la pagina non esiste)") **·** [PRADO](/w/index.php?title=PRADO_\(framework\)&action=edit&redlink=1 "PRADO (framework) (la pagina non esiste)") **·** [ProcessWire](/w/index.php?title=ProcessWire&action=edit&redlink=1 "ProcessWire (la pagina non esiste)") **·** [Qcodo](/wiki/Qcodo "Qcodo") **·** [Silex](/w/index.php?title=Silex_\(web_framework\)&action=edit&redlink=1 "Silex (web framework) (la pagina non esiste)") **·** [SilverStripe](/w/index.php?title=SilverStripe&action=edit&redlink=1 "SilverStripe (la pagina non esiste)") **·** [Symfony](/wiki/Symfony "Symfony") **·** [TYPO3](/wiki/TYPO3 "TYPO3") **·** [WordPress](/wiki/WordPress "WordPress") **·** [XOOPS](/wiki/XOOPS "XOOPS") **·** [Yii](/wiki/Yii_framework "Yii framework") **·** [Zend Framework](/wiki/Zend_Framework "Zend Framework")

[Python](/wiki/Python "Python")

[BlueBream](/wiki/Zope_3 "Zope 3") **·** [CherryPy](/w/index.php?title=CherryPy&action=edit&redlink=1 "CherryPy (la pagina non esiste)") **·** [Django](/wiki/Django_\(informatica\) "Django (informatica)") **·** [Flask](/wiki/Flask_\(informatica\) "Flask (informatica)") **·** [Grok](/w/index.php?title=Grok_\(web_framework\)&action=edit&redlink=1 "Grok (web framework) (la pagina non esiste)") **·** [Nevow](/w/index.php?title=Nevow&action=edit&redlink=1 "Nevow (la pagina non esiste)") **·** [Pyjs](/w/index.php?title=Pyjs&action=edit&redlink=1 "Pyjs (la pagina non esiste)") **·** [Pylons](/wiki/Pylons "Pylons") **·** [Pyramid](/wiki/Pylons#Pyramid "Pylons") **·** [Quixote](/w/index.php?title=Quixote_\(web_framework\)&action=edit&redlink=1 "Quixote (web framework) (la pagina non esiste)") **·** [TACTIC](/w/index.php?title=TACTIC_\(web_framework\)&action=edit&redlink=1 "TACTIC (web framework) (la pagina non esiste)") **·** [Tornado](/w/index.php?title=Tornado_\(web_server\)&action=edit&redlink=1 "Tornado (web server) (la pagina non esiste)") **·** [TurboGears](/wiki/TurboGears "TurboGears") **·** [web2py](/wiki/Web2py "Web2py") **·** [Webware](/w/index.php?title=Webware_for_Python&action=edit&redlink=1 "Webware for Python (la pagina non esiste)") **·** [Zope 2](/wiki/Zope#Zope_2 "Zope")

[Ruby](/wiki/Ruby_\(linguaggio_di_programmazione\) "Ruby (linguaggio di programmazione)")

[Camping](/w/index.php?title=Camping_\(microframework\)&action=edit&redlink=1 "Camping (microframework) (la pagina non esiste)") **·** [Merb](/w/index.php?title=Merb&action=edit&redlink=1 "Merb (la pagina non esiste)") **·** [Padrino](/w/index.php?title=Padrino_\(web_framework\)&action=edit&redlink=1 "Padrino (web framework) (la pagina non esiste)") **·** [Ruby on Rails](/wiki/Ruby_on_Rails "Ruby on Rails") **·** [Sinatra](/w/index.php?title=Sinatra_\(software\)&action=edit&redlink=1 "Sinatra (software) (la pagina non esiste)")

[Scala](/wiki/Scala_\(linguaggio_di_programmazione\) "Scala (linguaggio di programmazione)")

[Lift](/w/index.php?title=Lift_\(web_framework\)&action=edit&redlink=1 "Lift (web framework) (la pagina non esiste)") **·** [Play](/wiki/Play_Framework "Play Framework") **·** [Scalatra](/w/index.php?title=Scalatra&action=edit&redlink=1 "Scalatra (la pagina non esiste)")

[Smalltalk](/wiki/Smalltalk "Smalltalk")

[AIDA/Web](/w/index.php?title=AIDA/Web&action=edit&redlink=1 "AIDA/Web (la pagina non esiste)") **·** [Seaside](/w/index.php?title=Seaside_\(software\)&action=edit&redlink=1 "Seaside (software) (la pagina non esiste)")

Altri

[Vibe.d](/w/index.php?title=Vibe.d&action=edit&redlink=1 "Vibe.d (la pagina non esiste)") ([D](/wiki/D_\(linguaggio_di_programmazione\) "D (linguaggio di programmazione)")) **·** [Application Express](/wiki/Oracle_Application_Express "Oracle Application Express") ([PL/SQL](/wiki/PL/SQL "PL/SQL")) **·** [Grails](/wiki/Grails "Grails") ([Groovy](/wiki/Groovy "Groovy")) **·** [Kepler](/w/index.php?title=Kepler_\(software\)&action=edit&redlink=1 "Kepler (software) (la pagina non esiste)") ([Lua](/wiki/Lua "Lua")) **·** [OpenACS](/w/index.php?title=OpenACS&action=edit&redlink=1 "OpenACS (la pagina non esiste)") ([Tcl](/wiki/Tcl "Tcl")) **·** [Phoenix](/wiki/Phoenix_framework "Phoenix framework") ([Elixir](/wiki/Elixir_\(linguaggio_di_programmazione\) "Elixir (linguaggio di programmazione)")) **·** [Ash](/w/index.php?title=Ash_framework&action=edit&redlink=1 "Ash framework (la pagina non esiste)") ([Elixir](/wiki/Elixir_\(linguaggio_di_programmazione\) "Elixir (linguaggio di programmazione)")) **·** [SproutCore](/w/index.php?title=SproutCore&action=edit&redlink=1 "SproutCore (la pagina non esiste)") (JavaScript\-[Ruby](/wiki/Ruby_\(linguaggio_di_programmazione\) "Ruby (linguaggio di programmazione)")) **·** [Yaws](/w/index.php?title=Yaws_\(web_server\)&action=edit&redlink=1 "Yaws (web server) (la pagina non esiste)") ([Erlang](/wiki/Erlang_\(linguaggio_di_programmazione\) "Erlang (linguaggio di programmazione)"))

.mw-parser-output .CdA{border:1px solid #aaa;width:100%;margin:auto;font-size:90%;padding:2px}.mw-parser-output .CdA th{background-color:#f2f2f2;font-weight:bold;width:20%}html.skin-theme-clientpref-night .mw-parser-output .CdA{border-color:#54595D}html.skin-theme-clientpref-night .mw-parser-output .CdA th{background-color:#202122}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .CdA{border-color:#54595D}html.skin-theme-clientpref-os .mw-parser-output .CdA th{background-color:#202122}}

[Controllo di autorità](/wiki/Aiuto:Controllo_di_autorit%C3%A0 "Aiuto:Controllo di autorità")

[LCCN](/wiki/Library_of_Congress_Control_Number "Library of Congress Control Number") (EN) [sh96004880](http://id.loc.gov/authorities/subjects/sh96004880) · [GND](/wiki/Gemeinsame_Normdatei "Gemeinsame Normdatei") (DE) [4420180-1](https://d-nb.info/gnd/4420180-1) · [BNE](/wiki/Biblioteca_nazionale_di_Spagna "Biblioteca nazionale di Spagna") (ES) [XX542465](http://catalogo.bne.es/uhtbin/authoritybrowse.cgi?action=display&authority_id=XX542465) [(data)](http://datos.bne.es/resource/XX542465) · [BNF](/wiki/Biblioteca_nazionale_di_Francia "Biblioteca nazionale di Francia") (FR) [cb12549978q](https://catalogue.bnf.fr/ark:/12148/cb12549978q) [(data)](https://data.bnf.fr/ark:/12148/cb12549978q) · [J9U](/wiki/Biblioteca_nazionale_di_Israele "Biblioteca nazionale di Israele") (EN, HE) [987007551493605171](http://olduli.nli.org.il/F/?func=find-b&local_base=NLX10&find_code=UID&request=987007551493605171)

.mw-parser-output .itwiki-template-occhiello{width:100%;line-height:25px;border:1px solid #CCF;background-color:#F0EEFF;box-sizing:border-box}.mw-parser-output .itwiki-template-occhiello-progetto{background-color:#FAFAFA}html.skin-theme-clientpref-night .mw-parser-output .itwiki-template-occhiello{background-color:#202122;border-color:#54595D}html.skin-theme-clientpref-night .mw-parser-output .itwiki-template-occhiello-progetto{background-color:#282929}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .itwiki-template-occhiello{background-color:#202122;border-color:#54595D}html.skin-theme-clientpref-os .mw-parser-output .itwiki-template-occhiello-progetto{background-color:#282929}}

[![ ](//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Computer_n_screen.svg/24px-Computer_n_screen.svg.png)](/wiki/File:Computer_n_screen.svg "Informatica") **[Portale Informatica](/wiki/Portale:Informatica "Portale:Informatica")**

[![ ](//upload.wikimedia.org/wikipedia/commons/thumb/4/46/Crystal_128_displayphone.png/24px-Crystal_128_displayphone.png)](/wiki/File:Crystal_128_displayphone.png "Telematica") **[Portale Telematica](/wiki/Portale:Telematica "Portale:Telematica")**