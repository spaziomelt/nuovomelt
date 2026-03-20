// ===== PROJECTS DATA =====
const projects = [
  {
    title: 'Eduardo e Noi',
    date: '2026',
    venue: 'Arzano, Napoli',
    tipologia: 'Performance teatrale in forma di saggio scenico. Due interpreti alternano l\'esecuzione di scene tratte dal repertorio di Eduardo De Filippo — Natale in Casa Cupiello e Napoli Milionaria! — a momenti di riflessione critica condotti direttamente in scena, in dialogo con il pubblico.',
    regia: null,
    poster: null,
    description: "Il lavoro interroga la contemporaneità del teatro eduardiano: la distanza tra illusione e realtà nelle dinamiche familiari napoletane, la subalternità femminile, la disuguaglianza sociale come condizione strutturale. Il formato ibrido — che mescola rappresentazione e analisi — trasforma lo spettacolo in un dispositivo critico, capace di mettere a confronto il testo novecentesco con le contraddizioni del presente."
  },
  {
    title: 'Tutte le Cose Più Belle',
    date: '2025',
    venue: 'Spazi non convenzionali',
    subtitle: 'Liberamente ispirato a Every Brilliant Thing di Duncan Macmillan',
    tipologia: 'Teatro interattivo con struttura ispirata al format stand-up. Due interpreti al centro, pubblico disposto in cerchio o semicerchio. Il pubblico è parte attiva della narrazione: legge numeri della lista, interpreta brevemente piccoli ruoli, risponde, reagisce. La produzione è progettata per spazi non convenzionali e non richiede attrezzatura tecnica complessa.',
    regia: null,
    poster: null,
    description: "Un bambino inizia a compilare una lista di tutte le cose belle del mondo per aiutare la madre a ritrovare il desiderio di vivere. La lista cresce con lui attraverso l'adolescenza e l'età adulta, diventando progressivamente una mappa emotiva di ciò che rende l'esistenza sopportabile e luminosa. La narrazione alterna ironia e intimità, mantenendo una leggerezza di tono che non minimizza il dolore ma lo attraversa. I temi della depressione e del suicidio sono affrontati con delicatezza e senza retorica."
  },
  {
    title: 'Leggende Napoletane',
    date: '2025',
    venue: 'Location variabile',
    tipologia: 'Performance teatrale site-specific per contesti celebrativi. Tre personaggi del folklore napoletano — la Bella \'Mbriana, il Munaciello, Fabrizio Carafa (nobile napoletano del XVI secolo) — animano l\'evento con monologhi, scene interattive e dispositivi di coinvolgimento del pubblico (caccia agli indizi, lettera d\'amore da completare, tombola, gioco del telefono, puzzle, caccia al tesoro).',
    regia: null,
    poster: null,
    description: "Il progetto rilegge tre figure del repertorio leggendario napoletano attraverso il filtro dell'amore: la Bella 'Mbriana come allegoria dell'amore-ossessione e della perdita; il Munaciello come incarnazione dell'amore come capriccio e sorpresa; Fabrizio Carafa come voce dell'amore eroico e tragico nella cornice storica del Cinquecento italiano. Le tre figure costruiscono, insieme, una riflessione plurale sul vincolo amoroso, declinata in chiave festiva e partecipativa."
  },
  {
    title: "Frammenti d'Amore",
    date: '2025',
    venue: 'Appartamento privato, Napoli',
    tipologia: 'Spettacolo immersivo in appartamento, con struttura a stanze. Il pubblico si muove attraverso gli ambienti domestici seguendo i due interpreti. La drammaturgia è originale e si intreccia con testi di Raymond Carver, Roland Barthes, Achille Campanile e Jón Kalman Stefánsson. La struttura prevede scene drammaturgiche, monologhi, momenti di partecipazione del pubblico e transizioni musicali.',
    regia: null,
    poster: null,
    description: "Due attori teatrali — una coppia nella vita e sul palco — si trovano a fare i conti con una crisi silenziosa: incomprensioni quotidiane, aspettative tradite, la fatica di fare arte insieme e di condividere uno spazio. L'amore viene restituito non come sentimento assoluto ma come accumulo di frammenti — momenti intensi e momenti logorati — in cui il pubblico si trova immerso fisicamente, senza la mediazione della distanza scenica tradizionale."
  },
  {
    title: "Bella 'Mbriana",
    date: '2024',
    venue: 'Casa Donelli, Napoli',
    tipologia: 'Evento teatrale immersivo in spazio domestico, con struttura a stazioni. Il pubblico è guidato attraverso gli ambienti della casa da un personaggio-guida e incontra, nel percorso, performance fisiche, monologhi e dispositivi di partecipazione attiva (giochi, indovinelli, ricerca di elementi scenici nello spazio).',
    regia: null,
    poster: null,
    description: "La figura della Bella 'Mbriana — interpretata dall'attrice Francesca Morgante — spirito protettore della casa nella tradizione popolare napoletana, secondo la leggenda una principessa impazzita per amore non corrisposto — è il centro narrativo e simbolico dell'esperienza. Attraverso questa figura, il progetto ha esplorato il rapporto tra spazio fisico e memoria affettiva, tra l'amore nelle sue forme più fragili e ossessive e il luogo domestico come deposito di storie e presenze. La struttura drammaturgica alterna narrazione, danza e interazione con il pubblico."
  },
  {
    title: 'Amore e altri Racconti',
    date: '2024',
    venue: 'Villa Floridiana, Napoli',
    subtitle: 'Da Carver a Camus, passando per Campanile e Barthes: cosa intendono per amore?',
    tipologia: 'Spettacolo letterario e lettura scenica in spazio aperto non convenzionale. Quattro interpreti in scena. Ensemble composto da attori e con contributo drammaturgico esterno.',
    regia: null,
    poster: null,
    description: "Il progetto ha messo in dialogo quattro voci della letteratura del Novecento — Raymond Carver, Albert Camus, Achille Campanile, Roland Barthes — attorno a un'unica domanda: cosa si intende per amore? Dai dialoghi di coppia nella quotidianità americana di Carver, al carteggio privato tra Camus e Maria Casarès, passando per i frammenti filosofici di Barthes sul discorso amoroso e per l'umorismo assurdo di Campanile: la messa in scena ha costruito una partitura emotiva che attraversa registri molto diversi — ironia, intimità, dolore, leggerezza — in un paesaggio naturale che ne ha amplificato la risonanza."
  },
  {
    title: 'Amore Molesto',
    date: '2023',
    venue: 'Teatro Arcas, Via della Veterinaria 63, Napoli',
    tipologia: 'Spettacolo teatrale a testo con drammaturgia originale. Il progetto ha previsto due versioni di messa in scena: una versione standard e una adattata al formato cena-spettacolo. Ensemble di sette interpreti in scena.',
    regia: 'Michele Canciello e Sabrina Parrella',
    poster: null,
    description: "La protagonista, Delia, apprende della morte della madre — ritrovata annegata — e fa ritorno nella propria città natale per ricostruirne gli ultimi giorni. Quella che si configura come un'indagine esteriore si rivela progressivamente un viaggio interiore: un ritorno all'infanzia, alla violenza — fisica e psicologica — che ha segnato l'ambiente familiare, ai segreti rimossi e alla difficoltà di costruire una propria identità femminile in un contesto che la nega. La drammaturgia è originale; il titolo è un richiamo consapevole all'universo letterario di Elena Ferrante."
  }
];

// ===== RENDER PROJECT DETAIL =====
function renderDetail(index) {
  const p = projects[index];
  const detail = document.getElementById('progettiDetail');

  const posterHTML = p.poster
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
      <p class="progetti__detail-field"><span class="progetti__detail-label">Formato</span>${p.tipologia}</p>
      <p class="progetti__detail-desc">${p.description}</p>
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
