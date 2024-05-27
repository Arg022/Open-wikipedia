body:not(.skin-minerva) .mw-parser-output .hatnote.nota-disambigua{clear:both;margin-top:0;padding:.05em .5em} .mw-parser-output .hatnote-content{align-items:center;display:flex}.mw-parser-output .hatnote-icon{flex-shrink:0}.mw-parser-output .hatnote-icon img{display:flex}.mw-parser-output .hatnote-text{font-style:italic}body:not(.skin-minerva) .mw-parser-output .hatnote{border:1px solid #CCC;display:flex;margin:.5em 0;padding:.2em .5em}body:not(.skin-minerva) .mw-parser-output .hatnote-text{padding-left:.5em}body.skin-minerva .mw-parser-output .hatnote-icon{padding-right:8px}body.skin-minerva .mw-parser-output .hatnote-icon img{height:auto;width:16px}body.skin--responsive .mw-parser-output .hatnote a.new{color:#d73333}body.skin--responsive .mw-parser-output .hatnote a.new:visited{color:#a55858}

![](//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nota_disambigua.svg/18px-Nota_disambigua.svg.png) [Disambiguazione](/wiki/Aiuto:Disambiguazione "Aiuto:Disambiguazione") – "Json" rimanda qui. Se stai cercando altri significati, vedi **[J Son](/wiki/J_Son "J Son")**.

JavaScript Object Notation

[![](//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/100px-JSON_vector_logo.svg.png)](/wiki/File:JSON_vector_logo.svg)

[![](//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Combox_respuesta_JSON.jpg/260px-Combox_respuesta_JSON.jpg)](/wiki/File:Combox_respuesta_JSON.jpg)

[Estensione](/wiki/Estensione_\(file\) "Estensione (file)")

`.json`

[Tipo MIME](/wiki/Tipo_MIME "Tipo MIME")

`application/json`

[Uniform Type Identifier (UTI)](/wiki/Uniform_Type_Identifier "Uniform Type Identifier")

`public.json`

[Type code](/w/index.php?title=Type_code&action=edit&redlink=1 "Type code (la pagina non esiste)") ([Mac OS](/wiki/Mac_OS "Mac OS"))

`TEXT`

Tipo

[Electronic Data Interchange](/wiki/Electronic_Data_Interchange "Electronic Data Interchange")

Estensione di

[JavaScript](/wiki/JavaScript "JavaScript")

Standard

STD 90 ([RFC 8259](https://tools.ietf.org/html/rfc8259)), ECMA-404, ISO/IEC 21778:2017

[Formato aperto](/wiki/Formato_aperto "Formato aperto")?

Sì

[Sito web](/wiki/Sito_web "Sito web")

[json.org](http://json.org)

[Modifica dati su Wikidata](https://www.wikidata.org/wiki/Q2063 "d:Q2063") **·** [Manuale](/wiki/Template:Formato_file/man "Template:Formato file/man")

**JavaScript Object Notation** (**JSON** [ˈdʒeɪ·sən](/wiki/Aiuto:IPA "Aiuto:IPA")[\[1\]](#cite_note-ecma-404-1)) è un formato per lo scambio dati basato sul [linguaggio di programmazione](/wiki/Linguaggio_di_programmazione "Linguaggio di programmazione") [JavaScript](/wiki/JavaScript "JavaScript") (ECMA-262).[\[2\]](#cite_note-json-it-2)

È utilizzato in [programmazione web](/wiki/Programmazione_web "Programmazione web") come alternativa al formato [XML](/wiki/XML "XML").[\[3\]](#cite_note-3)

Originariamente descritto nella [RFC](/wiki/Request_for_Comments "Request for Comments") 4627[\[4\]](#cite_note-4), è diventato uno [standard](/wiki/Norma_tecnica "Norma tecnica") [ECMA](/wiki/ECMA "ECMA") nel 2013 come ECMA-404[\[5\]](#cite_note-5).[\[6\]](#cite_note-6) Nel 2017 è stata pubblicata una seconda edizione del formato che costituisce la base dello standard [ISO](/wiki/ISO "ISO")/[IEC](/wiki/International_Electrotechnical_Commission "International Electrotechnical Commission") 21778.[\[7\]](#cite_note-7)[\[8\]](#cite_note-8)

Indice
------

*   [1 Caratteristiche](#Caratteristiche)
    *   [1.1 Relazione con altri linguaggi di markup](#Relazione_con_altri_linguaggi_di_markup)
    *   [1.2 Formato](#Formato)
*   [2 Utilizzi](#Utilizzi)
    *   [2.1 In JavaScript](#In_JavaScript)
*   [3 Supporto](#Supporto)
    *   [3.1 In JavaScript](#In_JavaScript_2)
        *   [3.1.1 Altre metodologie di supporto](#Altre_metodologie_di_supporto)
*   [4 Note](#Note)
*   [5 Bibliografia](#Bibliografia)
*   [6 Voci correlate](#Voci_correlate)
*   [7 Altri progetti](#Altri_progetti)
*   [8 Collegamenti esterni](#Collegamenti_esterni)

Caratteristiche\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=1 "Modifica la sezione Caratteristiche") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=1 "Edit section's source code: Caratteristiche")\]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

La semplicità di JSON ne ha decretato un rapido utilizzo specialmente nella [programmazione](/wiki/Programmazione_\(informatica\) "Programmazione (informatica)") in [AJAX](/wiki/AJAX "AJAX"). Il suo uso tramite JavaScript è particolarmente semplice, infatti l'[interprete](/wiki/Interprete_\(informatica\) "Interprete (informatica)") è in grado di eseguire il [parsing](/wiki/Parsing "Parsing") di una stringa che ne rappresenti un valido contenuto tramite la funzione `JSON.parse()`.[\[9\]](#cite_note-eval-9) Questo lo ha reso velocemente molto popolare a causa della diffusione della programmazione in JavaScript nel mondo del [Web](/wiki/World_Wide_Web "World Wide Web").

I [tipi di dati](/wiki/Tipo_di_dato "Tipo di dato") supportati da questo formato sono:

*   [booleani](/wiki/Algebra_di_Boole "Algebra di Boole") (`true` e `false`);
*   interi, [numeri in virgola mobile](/wiki/Numero_in_virgola_mobile "Numero in virgola mobile");
*   stringhe racchiuse da doppi apici (`"`);
*   [array](/wiki/Array "Array") (sequenze ordinate di valori, separati da virgole e racchiusi in parentesi quadre `[]`);
*   [array associativi](/wiki/Array_associativo "Array associativo") (sequenze coppie chiave-valore separate da virgole racchiuse in parentesi graffe);
*   `null`.

La maggior parte dei [linguaggi di programmazione](/wiki/Linguaggio_di_programmazione "Linguaggio di programmazione") possiede un [typesystem](/wiki/Tipo_di_dato "Tipo di dato") molto simile a quello definito da JSON per cui sono nati molti progetti che permettono l'utilizzo di JSON con altri linguaggi quali, per esempio: [ActionScript](/wiki/ActionScript "ActionScript"), [C](/wiki/C_\(linguaggio\) "C (linguaggio)"), [C#](/wiki/C_sharp "C sharp"), [Adobe ColdFusion](/wiki/Adobe_ColdFusion "Adobe ColdFusion"), [Common LISP](/wiki/Common_LISP "Common LISP"), [Delphi](/wiki/Embarcadero_Delphi "Embarcadero Delphi"), [E](/w/index.php?title=E_\(linguaggio\)&action=edit&redlink=1 "E (linguaggio) (la pagina non esiste)"), [Erlang](/wiki/Erlang_\(linguaggio_di_programmazione\) "Erlang (linguaggio di programmazione)"), [Java](/wiki/Java_\(linguaggio_di_programmazione\) "Java (linguaggio di programmazione)"), [JavaScript](/wiki/JavaScript "JavaScript"), [Lua](/wiki/Lua "Lua"), [ML](/wiki/ML_\(linguaggio_di_programmazione\) "ML (linguaggio di programmazione)"), [Objective Caml](/wiki/Objective_Caml "Objective Caml"), [Perl](/wiki/Perl "Perl"), [PHP](/wiki/PHP "PHP"), [Python](/wiki/Python "Python"), [REBOL](/wiki/REBOL "REBOL"), [Ruby](/wiki/Ruby_\(linguaggio_di_programmazione\) "Ruby (linguaggio di programmazione)") e [Rust](/wiki/Rust_\(linguaggio_di_programmazione\) "Rust (linguaggio di programmazione)").

Uno [stream](/wiki/Stream_\(informatica\) "Stream (informatica)") JSON dovrebbe avere un'intestazione HTTP `Content-Type: application/json`.[\[10\]](#cite_note-10)

Fra i primi utilizzatori di JSON si trova [Yahoo!](/wiki/Yahoo! "Yahoo!"), dal 2005.[\[11\]](#cite_note-11)

### Relazione con altri linguaggi di markup\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=2 "Modifica la sezione Relazione con altri linguaggi di markup") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=2 "Edit section's source code: Relazione con altri linguaggi di markup")\]

Il JSON è un formato di interscambio di dati, ed è spesso comparato con l'[XML](/wiki/XML "XML") che però è un [linguaggio di markup](/wiki/Linguaggio_di_markup "Linguaggio di markup"). Entrambi non hanno un sistema di rappresentazione dei dati [binari](/wiki/Binary_large_object "Binary large object")[\[12\]](#cite_note-12), per cui è compito del [programmatore](/wiki/Programmatore "Programmatore") adottare convenzioni appropriate (es. [Base64](/wiki/Base64 "Base64")) per convertire i dati binari in forma testuale.

Alcune delle limitazioni di JSON sono coperte da [YAML](/wiki/YAML "YAML")..mw-parser-output .chiarimento{background:#ffeaea;color:#444444}.mw-parser-output .chiarimento-apice{color:#EE0700}html.skin-theme-clientpref-night .mw-parser-output .chiarimento{background:rgba(179,36,36,0.21);color:inherit}html.skin-theme-clientpref-night .mw-parser-output .chiarimento-apice{color:#b32424}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .chiarimento{background:rgba(179,36,36,0.21);color:inherit}html.skin-theme-clientpref-os .mw-parser-output .chiarimento-apice{color:#b32424}}\[_[senza fonte](/wiki/Wikipedia:Uso_delle_fonti "Wikipedia:Uso delle fonti")_\]

### Formato\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=3 "Modifica la sezione Formato") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=3 "Edit section's source code: Formato")\]

Il seguente esempio rappresenta i dati di un'ipotetica persona in formato JSON:

{
	"name": "Mario",
	"surname": "Rossi",
	"active": true,
	"favouriteNumber": 54,
	"birthday": {
		"day": 1,
		"month": 1,
		"year": 2000
	},
	"languages": \[ "it", "en" \]
}

Utilizzi\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=4 "Modifica la sezione Utilizzi") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=4 "Edit section's source code: Utilizzi")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### In JavaScript\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=5 "Modifica la sezione In JavaScript") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=5 "Edit section's source code: In JavaScript")\]

Segue un semplice esempio di richiesta [AJAX](/wiki/AJAX "AJAX") in JavaScript, ad un [URL](/wiki/URL "URL") che risponda con dati JSON.[\[13\]](#cite_note-13)

var httpRequest \= new XMLHttpRequest();

// callback
httpRequest.addEventListener( 'load', function () {
	// parsificazione della risposta (si presume sia in formato JSON)
	var data \= JSON.parse( this.responseText );

	// fare qualcosa con i dati
	console.log( data );
} );

// inizializzazione ed invio
httpRequest.open( 'GET', 'https://it.wikipedia.org/w/api.php?action=query&prop=info&titles=Pagina+principale&format=json' );
httpRequest.send();

**Applicazioni Mobili**

Per far comunicare il [back-end](/wiki/Back-end "Back-end") all'[applicazione mobile](/wiki/Applicazione_mobile "Applicazione mobile") è possibile inviare i dati attraverso il [protocollo](/wiki/Protocollo_di_rete "Protocollo di rete") [HTTP](/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") in formato JSON[\[14\]](#cite_note-14).

Supporto\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=6 "Modifica la sezione Supporto") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=6 "Edit section's source code: Supporto")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### In JavaScript\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=7 "Modifica la sezione In JavaScript") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=7 "Edit section's source code: In JavaScript")\]

Tra i browser senza il supporto a `JSON.parse()` si citano alcune versioni, principalmente precedenti al [2009](/wiki/2009 "2009"), in ordine alfabetico:[\[15\]](#cite_note-15)

*   [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") precedente alla versione 8
*   [Mozilla Firefox](/wiki/Mozilla_Firefox "Mozilla Firefox") precedente alla versione 3.5
*   [Safari](/wiki/Safari_\(browser\) "Safari (browser)") precedente alla versione 4

Un gran numero di librerie semplificarono l'utilizzo del formato JSON per effettuare richieste Ajax. Si citano [JQuery](/wiki/JQuery "JQuery") ed [AngularJS](/wiki/AngularJS "AngularJS").[\[16\]](#cite_note-16)[\[17\]](#cite_note-17)

Storicamente vi fu un'indiscriminata adozione del metodo `eval()` al posto di `JSON.parse()` dato che questi due metodi sono apparentemente interscambiabili. Il metodo `eval()` però non fornisce alcuna protezione da input arbitrario e può portare a serie vulnerabilità.[\[9\]](#cite_note-eval-9)

Si cita il supporto a [XMLHttpRequest](/wiki/XMLHttpRequest "XMLHttpRequest") in ordine cronologico:[\[18\]](#cite_note-can-i-use-xhr3-18)

*   [Mozilla Firefox](/wiki/Mozilla_Firefox "Mozilla Firefox") 3.5 ([2009](/wiki/2009 "2009"))
*   [Google Chrome](/wiki/Google_Chrome "Google Chrome") 7 ([2010](/wiki/2010 "2010"))
*   [Safari](/wiki/Safari_\(browser\) "Safari (browser)") 5 ([2010](/wiki/2010 "2010"))
*   [Internet Explorer](/wiki/Internet_Explorer "Internet Explorer") 10 ([2012](/wiki/2012 "2012"))
*   Safari e Google Chrome per [iOS](/wiki/IOS "IOS") 5.1 ([2012](/wiki/2012 "2012"))

#### Altre metodologie di supporto\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=8 "Modifica la sezione Altre metodologie di supporto") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=8 "Edit section's source code: Altre metodologie di supporto")\]

Vi sono altri modi ormai obsoleti per ottenere _stream_ JSON, per esempio l'uso dell'elemento `<iframe>` o di form come `<form action="url_to_cgi_script" target="name_of_hidden_iframe">`.\[_[non chiaro](/wiki/Aiuto:Chiarezza "Aiuto:Chiarezza")_\] Questi approcci erano largamente usati prima dell'ampio supporto dell'oggetto XMLHTTPRequest.

Anche il [tag](/wiki/Tag_\(markup\) "Tag (markup)") `<script>` può essere usato per ottenere dati JSON.\[_[non chiaro](/wiki/Aiuto:Chiarezza "Aiuto:Chiarezza")_\] Questo permette di superare alcune limitazioni che sorgono con l'utilizzo di XMLHTTPRequest ma a discapito della sicurezza.[\[19\]](#cite_note-19)

Note\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=9 "Modifica la sezione Note") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=9 "Edit section's source code: Note")\]
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [**^**](#cite_ref-ecma-404_1-0) (EN) [The JSON Data Interchange Syntax](https://www.ecma-international.org/wp-content/uploads/ECMA-404_2nd_edition_december_2017.pdf) (PDF), su ecma-international.org, 2ª ed., dicembre 2017.
2.  [**^**](#cite_ref-json-it_2-0) [Introduzione a JSON](https://www.json.org/json-it.html), su JSON.
3.  [**^**](#cite_ref-3) (EN) [JSON: The Fat-Free Alternative to XML](https://www.json.org/xml.html), su JSON.
4.  [**^**](#cite_ref-4) (EN) [RFC 4627 — The application/json Media Type for JavaScript Object Notation (JSON)](https://tools.ietf.org/html/rfc4627), su [Internet Engineering Task Force](/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force").
5.  [**^**](#cite_ref-5) (EN) [ECMA-404 The JSON data interchange syntax](https://www.ecma-international.org/publications-and-standards/standards/ecma-404/), su ECMA.
6.  [**^**](#cite_ref-6) (EN) Tim Bray, [JSON Redux AKA RFC7159](https://www.tbray.org/ongoing/When/201x/2014/03/05/RFC7159-JSON), su ongoing, 6 marzo 2014.
7.  [**^**](#cite_ref-7) (EN) [RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc8259), su [Internet Engineering Task Force](/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force").
8.  [**^**](#cite_ref-8) (EN) [ISO/IEC 21778:2017](https://www.iso.org/standard/71616.html), su [ISO](/wiki/ISO "ISO").
9.  **^** _[a](#cite_ref-eval_9-0)_ _[b](#cite_ref-eval_9-1)_ (EN) [JSON.parse() vs. eval](https://stackoverflow.com/questions/1843343/json-parse-vs-eval), su stackoverflow.com. URL consultato il 20 febbraio 2018.
10.  [**^**](#cite_ref-10) (EN) [The application/json encoding algorithm](https://www.w3.org/TR/html-json-forms/#the-application-json-encoding-algorithm), su [W3C](/wiki/W3C "W3C").
11.  [**^**](#cite_ref-11) (EN) [JSON JavaScript Object Notation](https://groups.yahoo.com/neo/groups/json/info), su Yahoo!, 19 luglio 2005. URL consultato il 16 aprile 2015.
12.  [**^**](#cite_ref-12) [JSON Documentation](https://file-types.com/docs/json), su file-types.com, 18 gennaio 2020. URL consultato il 10 ottobre 2021.
13.  [**^**](#cite_ref-13) [Usare XMLHttpRequest](https://web.archive.org/web/20180221100045/https://developer.mozilla.org/it/docs/Web/API/XMLHttpRequest/Usare_XMLHttpRequest), su developer.mozilla.org. URL consultato il 20 febbraio 2018 (archiviato dall'url originale il 21 febbraio 2018).
14.  [**^**](#cite_ref-14) (EN) [How to build cross-platform mobile apps using nothing more than a JSON markup](https://www.freecodecamp.org/news/how-to-build-cross-platform-mobile-apps-using-nothing-more-than-a-json-markup-f493abec1873/), su freeCodeCamp.org, 12 febbraio 2017. URL consultato il 17 ottobre 2020.
15.  [**^**](#cite_ref-15) (EN) [Can I use JSON.parse](https://caniuse.com/#search=JSON.parse), su caniuse.com. URL consultato il 20 febbraio 2018.
16.  [**^**](#cite_ref-16) (EN) [$http](https://docs.angularjs.org/api/ng/service/$http), su [AngularJS](/wiki/AngularJS "AngularJS"). URL consultato il 20 febbraio 2018.  
    
    «The $http service is a core AngularJS service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.»
    
17.  [**^**](#cite_ref-17) (EN) [jQuery.getJSON](https://api.jquery.com/jQuery.getJSON/), su [jQuery](/wiki/JQuery "JQuery"). URL consultato il 20 febbraio 2018.  
    
    «Load JSON-encoded data from the server using a GET HTTP request»
    
18.  [**^**](#cite_ref-can-i-use-xhr3_18-0) (EN) [Can I use XMLHttpRequest](https://caniuse.com/#feat=xhr2), su caniuse.com. URL consultato il 20 febbraio 2018.
19.  [**^**](#cite_ref-19) (EN) Douglas Crockford, [JSONRequest](https://json.org/JSONRequest.html), su json.org, 17 aprile 2006. URL consultato il 20 febbraio 2018.

Bibliografia\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=10 "Modifica la sezione Bibliografia") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=10 "Edit section's source code: Bibliografia")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   (EN) T. Bray (a cura di), [The JavaScript Object Notation (JSON) Data Interchange Format](https://www.rfc-editor.org/info/rfc8259), su RFC Editor, dicembre 2017, [DOI](/wiki/Digital_object_identifier "Digital object identifier"):[10.17487/rfc8259](https://dx.doi.org/10.17487%2Frfc8259).
*   (EN) Douglas Crockford, How JSON Works, in How JavaScript Works, Virgule-Solidus, 2018, [ISBN](/wiki/ISBN "ISBN") [978-1-94-981500-9](/wiki/Speciale:RicercaISBN/978-1-94-981500-9 "Speciale:RicercaISBN/978-1-94-981500-9").

Voci correlate\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=11 "Modifica la sezione Voci correlate") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=11 "Edit section's source code: Voci correlate")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   [JSON Web Token](/wiki/JSON_Web_Token "JSON Web Token")
*   [AJAX](/wiki/AJAX "AJAX")
*   [YAML](/wiki/YAML "YAML")
*   [Web service](/wiki/Web_service "Web service")
*   [S-expression](/wiki/S-expression "S-expression")
*   [SOAP](/wiki/SOAP "SOAP")
*   [XML-RPC](/wiki/XML-RPC "XML-RPC")
*   [HAR (formato di file)](/wiki/HAR_\(formato_di_file\) "HAR (formato di file)")

Altri progetti\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=12 "Modifica la sezione Altri progetti") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=12 "Edit section's source code: Altri progetti")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Altri progetti

*   [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:JavaScript_Object_Notation?uselang=it)

*   [![Collabora a Wikimedia Commons](//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/18px-Commons-logo.svg.png)](https://commons.wikimedia.org/wiki/?uselang=it "Collabora a Wikimedia Commons") [Wikimedia Commons](https://commons.wikimedia.org/wiki/?uselang=it) contiene immagini o altri file sul **[JSON](https://commons.wikimedia.org/wiki/Category:JavaScript_Object_Notation?uselang=it)**

Collegamenti esterni\[[modifica](/w/index.php?title=JavaScript_Object_Notation&veaction=edit&section=13 "Modifica la sezione Collegamenti esterni") | [modifica wikitesto](/w/index.php?title=JavaScript_Object_Notation&action=edit&section=13 "Edit section's source code: Collegamenti esterni")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   (EN) [Sito ufficiale](https://json.org/), su json.org. [![Modifica su Wikidata](//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blue_pencil.svg/10px-Blue_pencil.svg.png)](https://www.wikidata.org/wiki/Q2063#P856 "Modifica su Wikidata")
*   (EN) [JavaScript Object Notation](https://foldoc.org/JavaScript%2BObject%2BNotation "foldoc:JavaScript+Object+Notation"), in [Free On-line Dictionary of Computing](/wiki/Free_On-line_Dictionary_of_Computing "Free On-line Dictionary of Computing"), Denis Howe. Disponibile con licenza [GFDL](/wiki/GNU_Free_Documentation_License "GNU Free Documentation License")
*    ![Filmato audio](//upload.wikimedia.org/wikipedia/commons/thumb/4/42/35mm_film_frames.svg/16px-35mm_film_frames.svg.png) (EN) YUI Library, [Douglas Crockford: The JSON Saga](https://www.youtube.com/watch?v=-C-JoyNuQJs), su [YouTube](/wiki/YouTube "YouTube"), 29 agosto 2011.

.mw-parser-output .CdA{border:1px solid #aaa;width:100%;margin:auto;font-size:90%;padding:2px}.mw-parser-output .CdA th{background-color:#f2f2f2;font-weight:bold;width:20%}html.skin-theme-clientpref-night .mw-parser-output .CdA{border-color:#54595D}html.skin-theme-clientpref-night .mw-parser-output .CdA th{background-color:#202122}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .CdA{border-color:#54595D}html.skin-theme-clientpref-os .mw-parser-output .CdA th{background-color:#202122}}

[Controllo di autorità](/wiki/Aiuto:Controllo_di_autorit%C3%A0 "Aiuto:Controllo di autorità")

[LCCN](/wiki/Library_of_Congress_Control_Number "Library of Congress Control Number") (EN) [sh2014000515](http://id.loc.gov/authorities/subjects/sh2014000515) · [GND](/wiki/Gemeinsame_Normdatei "Gemeinsame Normdatei") (DE) [1105592812](https://d-nb.info/gnd/1105592812) · [J9U](/wiki/Biblioteca_nazionale_di_Israele "Biblioteca nazionale di Israele") (EN, HE) [987007581416205171](http://olduli.nli.org.il/F/?func=find-b&local_base=NLX10&find_code=UID&request=987007581416205171)

.mw-parser-output .itwiki-template-occhiello{width:100%;line-height:25px;border:1px solid #CCF;background-color:#F0EEFF;box-sizing:border-box}.mw-parser-output .itwiki-template-occhiello-progetto{background-color:#FAFAFA}html.skin-theme-clientpref-night .mw-parser-output .itwiki-template-occhiello{background-color:#202122;border-color:#54595D}html.skin-theme-clientpref-night .mw-parser-output .itwiki-template-occhiello-progetto{background-color:#282929}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .itwiki-template-occhiello{background-color:#202122;border-color:#54595D}html.skin-theme-clientpref-os .mw-parser-output .itwiki-template-occhiello-progetto{background-color:#282929}}

[![ ](//upload.wikimedia.org/wikipedia/commons/thumb/7/70/Applications-internet.svg/25px-Applications-internet.svg.png)](/wiki/File:Applications-internet.svg "Internet") **[Portale Internet](/wiki/Portale:Internet "Portale:Internet")**: accedi alle voci di Wikipedia che trattano di internet