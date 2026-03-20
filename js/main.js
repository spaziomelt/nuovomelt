// ===== PROJECTS DATA =====
const projects = [
  {
    title: 'Eduardo e Noi',
    subtitle: 'Progetto Arzano',
    date: '2026',
    venue: 'Arzano, città metropolitana di Napoli',
    regia: null,
    poster: null,
    noPoster: true,
    tipologia: "Performance teatrale in forma di saggio scenico. Due interpreti alternano l'esecuzione di scene tratte dal repertorio di Eduardo De Filippo — Natale in Casa Cupiello e Napoli Milionaria! — a momenti di riflessione critica condotti direttamente in scena, in dialogo con il pubblico.",
    contenuto: "Il lavoro interroga la contemporaneità del teatro eduardiano: la distanza tra illusione e realtà nelle dinamiche familiari napoletane, la subalternità femminile, la disuguaglianza sociale come condizione strutturale. Il formato ibrido — che mescola rappresentazione e analisi — trasforma lo spettacolo in un dispositivo critico, capace di mettere a confronto il testo novecentesco con le contraddizioni del presente.",
    obiettivi: "Il progetto si è inserito in un contesto territoriale specifico, rivolto a un pubblico di comunità. L'obiettivo era quello di riattivare il patrimonio culturale eduardiano non come omaggio nostalgico ma come strumento di lettura critica del contemporaneo, restituendo al pubblico locale un'identità culturale rielaborata e interrogata."
  },
  {
    title: 'Tutte le Cose Più Belle',
    subtitle: 'Liberamente ispirato a Every Brilliant Thing di Duncan Macmillan',
    date: '2025',
    venue: 'Spazi non convenzionali (bar, spazi ibridi, piccoli teatri)',
    regia: null,
    poster: null,
    tipologia: "Teatro interattivo con struttura ispirata al format stand-up. Due interpreti al centro, pubblico disposto in cerchio o semicerchio. Il pubblico è parte attiva della narrazione: legge numeri della lista, interpreta brevemente piccoli ruoli, risponde, reagisce. La produzione è progettata per spazi non convenzionali e non richiede attrezzatura tecnica complessa.",
    contenuto: "Un bambino inizia a compilare una lista di tutte le cose belle del mondo per aiutare la madre a ritrovare il desiderio di vivere. La lista cresce con lui attraverso l'adolescenza e l'età adulta, diventando progressivamente una mappa emotiva di ciò che rende l'esistenza sopportabile e luminosa. La narrazione alterna ironia e intimità, mantenendo una leggerezza di tono che non minimizza il dolore ma lo attraversa. I temi della depressione e del suicidio sono affrontati con delicatezza e senza retorica.",
    obiettivi: "Il progetto affronta il tema della salute mentale attraverso un linguaggio accessibile e partecipativo, evitando la didattica e il pathos. L'interazione con il pubblico non è un elemento decorativo ma il motore dell'esperienza: il pubblico non assiste a una storia sul dolore, ma la attraversa in prima persona, costruendo nel corso dello spettacolo un proprio repertorio di bellezza. L'obiettivo è quello di generare connessione autentica tra le persone, abbassare lo stigma intorno alla sofferenza psicologica e restituire dignità all'esperienza del dolore come parte della vita umana."
  },
  {
    title: 'Leggende Napoletane',
    subtitle: 'Progetto commissionato',
    date: '2025',
    venue: 'Location variabile',
    regia: null,
    poster: null,
    noPoster: true,
    tipologia: "Performance teatrale site-specific per contesti celebrativi. Tre personaggi del folklore napoletano — la Bella 'Mbriana, il Munaciello, Fabrizio Carafa (nobile napoletano del XVI secolo) — animano l'evento con monologhi, scene interattive e dispositivi di coinvolgimento del pubblico (caccia agli indizi, lettera d'amore da completare, tombola, gioco del telefono, puzzle, caccia al tesoro).",
    contenuto: "Il progetto rilegge tre figure del repertorio leggendario napoletano attraverso il filtro dell'amore: la Bella 'Mbriana come allegoria dell'amore-ossessione e della perdita; il Munaciello come incarnazione dell'amore come capriccio e sorpresa; Fabrizio Carafa come voce dell'amore eroico e tragico nella cornice storica del Cinquecento italiano. Le tre figure costruiscono, insieme, una riflessione plurale sul vincolo amoroso, declinata in chiave festiva e partecipativa.",
    obiettivi: "Il progetto si colloca nella fascia della produzione teatrale su committenza privata, con l'obiettivo di elevare il formato dell'animazione degli eventi attraverso drammaturgia originale, ricerca culturale e coinvolgimento autentico del pubblico. Costituisce un modello di sostenibilità economica per il collettivo, capace di integrare qualità artistica e adattabilità ai contesti."
  },
  {
    title: "Frammenti d'Amore",
    subtitle: null,
    date: '2025',
    venue: 'Spazio domestico (appartamento privato), Napoli',
    regia: null,
    poster: null,
    tipologia: "Spettacolo immersivo in appartamento, con struttura a stanze. Il pubblico si muove attraverso gli ambienti domestici seguendo i due interpreti. La drammaturgia è originale e si intreccia con testi di Raymond Carver, Roland Barthes, Achille Campanile e Jón Kalman Stefánsson. La struttura prevede scene drammaturgiche, monologhi, momenti di partecipazione del pubblico e transizioni musicali.",
    contenuto: "Due attori teatrali — una coppia nella vita e sul palco — si trovano a fare i conti con una crisi silenziosa: incomprensioni quotidiane, aspettative tradite, la fatica di fare arte insieme e di condividere uno spazio. L'amore viene restituito non come sentimento assoluto ma come accumulo di frammenti — momenti intensi e momenti logorati — in cui il pubblico si trova immerso fisicamente, senza la mediazione della distanza scenica tradizionale.",
    obiettivi: "La scelta dello spazio domestico come luogo drammaturgico è funzionale all'obiettivo principale del progetto: eliminare la distanza tra esperienza scenica e vita ordinaria del pubblico. Lo spettatore si riconosce negli ambienti e nelle situazioni, e questa prossimità fisica e narrativa attiva un processo di empatia e riflessione sull'amore adulto, sulla comunicazione di coppia e sull'identità nella relazione."
  },
  {
    title: "Bella 'Mbriana",
    subtitle: null,
    date: '2024',
    venue: 'Casa Donelli, Napoli',
    regia: null,
    poster: null,
    tipologia: "Evento teatrale immersivo in spazio domestico, con struttura a stazioni. Il pubblico è guidato attraverso gli ambienti della casa da un personaggio-guida e incontra, nel percorso, performance fisiche, monologhi e dispositivi di partecipazione attiva (giochi, indovinelli, ricerca di elementi scenici nello spazio).",
    contenuto: "La figura della Bella 'Mbriana — interpretata dall'attrice Francesca Morgante — spirito protettore della casa nella tradizione popolare napoletana, secondo la leggenda una principessa impazzita per amore non corrisposto — è il centro narrativo e simbolico dell'esperienza. Attraverso questa figura, il progetto ha esplorato il rapporto tra spazio fisico e memoria affettiva, tra l'amore nelle sue forme più fragili e ossessive e il luogo domestico come deposito di storie e presenze. La struttura drammaturgica alterna narrazione, danza e interazione con il pubblico.",
    obiettivi: "Il progetto ha operato su due livelli: da un lato, la riattivazione del folklore napoletano come patrimonio culturale vivo, non museale, attraverso un dispositivo partecipativo e contemporaneo; dall'altro, la riflessione sul confine tra pubblico e spettacolo — il pubblico non fruisce passivamente ma abita, esplora e contribuisce alla costruzione dell'esperienza."
  },
  {
    title: 'Amore e altri Racconti',
    subtitle: 'Da Carver a Camus, passando per Campanile e Barthes: cosa intendono per amore?',
    date: '2024',
    venue: 'Villa Floridiana, Napoli',
    regia: null,
    poster: null,
    tipologia: "Spettacolo letterario e lettura scenica in spazio aperto non convenzionale. Quattro interpreti in scena. Ensemble composto da attori e con contributo drammaturgico esterno.",
    contenuto: "Il progetto ha messo in dialogo quattro voci della letteratura del Novecento — Raymond Carver, Albert Camus, Achille Campanile, Roland Barthes — attorno a un'unica domanda: cosa si intende per amore? Dai dialoghi di coppia nella quotidianità americana di Carver, al carteggio privato tra Camus e Maria Casarès, passando per i frammenti filosofici di Barthes sul discorso amoroso e per l'umorismo assurdo di Campanile: la messa in scena ha costruito una partitura emotiva che attraversa registri molto diversi — ironia, intimità, dolore, leggerezza — in un paesaggio naturale che ne ha amplificato la risonanza.",
    obiettivi: "Il progetto ha perseguito un obiettivo di democratizzazione culturale: portare la letteratura alta in uno spazio pubblico aperto, in un formato accessibile e non intimidatorio. La scelta dello spazio — un parco urbano di grande frequentazione — ha consentito di raggiungere un pubblico non tradizionalmente legato alla fruizione teatrale, abbassando la soglia di accesso all'esperienza culturale."
  },
  {
    title: 'Amore Molesto',
    subtitle: null,
    date: '2023',
    venue: 'Teatro Arcas, Via della Veterinaria 63, Napoli',
    regia: 'Michele Canciello e Sabrina Parrella',
    poster: null,
    tipologia: "Spettacolo teatrale a testo con drammaturgia originale. Il progetto ha previsto due versioni di messa in scena: una versione standard e una adattata al formato cena-spettacolo. Ensemble di sette interpreti in scena.",
    contenuto: "La protagonista, Delia, apprende della morte della madre — ritrovata annegata — e fa ritorno nella propria città natale per ricostruirne gli ultimi giorni. Quella che si configura come un'indagine esteriore si rivela progressivamente un viaggio interiore: un ritorno all'infanzia, alla violenza — fisica e psicologica — che ha segnato l'ambiente familiare, ai segreti rimossi e alla difficoltà di costruire una propria identità femminile in un contesto che la nega. La drammaturgia è originale; il titolo è un richiamo consapevole all'universo letterario di Elena Ferrante.",
    obiettivi: "Il progetto si è proposto di indagare il tema dell'eredità familiare come trauma trasmesso: il silenzio sulle violenze domestiche, la normalizzazione dell'abuso, la memoria selettiva come meccanismo di difesa. Attraverso la storia di Delia, lo spettacolo ha offerto al pubblico uno spazio di riconoscimento e di elaborazione collettiva intorno al rapporto madri-figlie, alla femminilità negata e al processo di individuazione."
  }
];

// ===== RENDER PROJECT DETAIL =====
function renderDetail(index) {
  const p = projects[index];
  const detail = document.getElementById('progettiDetail');

  const posterHTML = p.noPoster
    ? ''
    : p.poster
      ? `<img class="progetti__detail-poster" src="${p.poster}" alt="${p.title}">`
      : `<div class="progetti__detail-poster" style="
          width:100%;height:260px;border-radius:2px;
          background:rgba(245,240,232,0.08);
          display:flex;align-items:center;justify-content:center;
          color:var(--warm-white);opacity:0.3;font-size:0.85rem;
        ">Locandina in arrivo</div>`;

  const subtitleHTML = p.subtitle
    ? `<p class="progetti__detail-subtitle">${p.subtitle}</p>` : '';
  const regiaHTML = p.regia
    ? `<p class="progetti__detail-field"><span class="progetti__detail-label">Regia e drammaturgia</span>${p.regia}</p>` : '';

  detail.innerHTML = `
    <div class="progetti__detail-inner">
      <div class="progetti__detail-top">
        <img class="progetti__detail-logo" src="assets/images/logo.png" alt="Melt">
        <span class="progetti__detail-url">spaziomelt.com</span>
      </div>
      <h3 class="progetti__detail-title">${p.title}</h3>
      ${subtitleHTML}
      ${posterHTML}
      <div class="progetti__detail-meta">
        <div class="progetti__detail-meta-left">
          <span>${p.date}</span>
        </div>
        <div class="progetti__detail-meta-right">
          <span>${p.venue}</span>
        </div>
      </div>
      ${regiaHTML}
      <p class="progetti__detail-field"><span class="progetti__detail-label">Tipologia</span>${p.tipologia}</p>
      <p class="progetti__detail-field"><span class="progetti__detail-label">Contenuto artistico</span>${p.contenuto}</p>
      <p class="progetti__detail-field"><span class="progetti__detail-label">Obiettivi e impatto</span>${p.obiettivi}</p>
    </div>
  `;
}

// ===== PROJECT LIST CLICK =====
function initProjects() {
  const items = document.querySelectorAll('.progetti__item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderDetail(parseInt(item.dataset.index, 10));
    });
  });
  // Render first project
  renderDetail(0);
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initProjects();
  initSmoothScroll();
});
