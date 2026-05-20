/* =============================================================================
   SCRIPT - Registro degli script disponibili
   -----------------------------------------------------------------------------
   POSIZIONE PREVISTA:
     P:\Tognon\HTML\scripts.js
     (accanto a SCRIPT.html, un livello sopra la cartella Pagine_scripts)

   COME AGGIUNGERE UN NUOVO SCRIPT:
     1. Salva il nuovo file .html dentro P:\Tognon\HTML\Pagine_scripts\
     2. Aggiungi una voce qui sotto con un id UNIVOCO
        (lowercase-kebab-case, niente spazi ne caratteri speciali)
     3. Salva. Il contenitore lo mostrera automaticamente al prossimo reload.

   CAMPI:
     id          (string)   identificativo univoco - usato anche nell'URL (#id)
     name        (string)   nome visualizzato nel menu e nelle card
     description (string)   breve descrizione (opzionale, 1 riga consigliata)
     category    (string)   raggruppamento nel menu laterale
     path        (string)   percorso relativo a SCRIPT.html
                            (es. "Pagine_scripts/nome_file.html")
     tags        (string[]) parole chiave per la ricerca (opzionale)
     icon        (string)   emoji o carattere a sinistra (opzionale)
   ============================================================================= */

window.SCRIPTS_MANIFEST = [
  {
    id: "playbook-consulenza-operativa",
    name: "Playbook Consulenza Operativa",
    description: "Procedure operative per la consulenza",
    category: "Consulenza",
    path: "Pagine_scripts/playbook_consulenza_operativa.html",
    tags: ["playbook", "consulenza", "operativa", "procedure"],
    icon: "\u{1F4D8}"
  },
  {
    id: "interruzione-di-servizio",
    name: "Interruzione di servizio",
    description: "Script operatore per disservizio grave, causa esterna, tempi ignoti",
    category: "Disservizi",
    path: "Pagine_scripts/interruzione_di_servizio.html",
    tags: ["disservizio", "interruzione", "down", "guasto", "causa esterna", "incident"],
    icon: "⚠️"
  }

  // ---------------------------------------------------------------------------
  // Esempio di voce per script futuri (decommenta e adatta):
  //
  // ,{
  //   id: "nome-script",
  //   name: "Nome Visualizzato",
  //   description: "Cosa fa questo script",
  //   category: "Categoria",
  //   path: "Pagine_scripts/nome_file.html",
  //   tags: ["parola1", "parola2"],
  //   icon: "\u{1F527}"
  // }
];
