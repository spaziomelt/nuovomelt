// ===== PROJECTS DATA =====
const projects = [
  {
    title: 'Eduardo e Noi',
    date: '2026',
    venue: 'Arzano, Napoli',
    poster: null,
    description: "Due interpreti alternano scene tratte da Eduardo De Filippo — Natale in Casa Cupiello e Napoli Milionaria! — a momenti di riflessione critica condotti direttamente in scena, in dialogo con il pubblico. Un dispositivo ibrido che mette a confronto il teatro novecentesco con le contraddizioni del presente."
  },
  {
    title: 'Tutte le Cose Più Belle',
    date: '2025',
    venue: 'Spazi non convenzionali',
    poster: null,
    description: "Un bambino inizia a compilare una lista di tutte le cose belle del mondo per aiutare la madre a ritrovare il desiderio di vivere. Teatro interattivo tra ironia e intimità: il pubblico legge, interpreta, reagisce. I temi della depressione e del suicidio affrontati con delicatezza e senza retorica."
  },
  {
    title: 'Leggende Napoletane',
    date: '2025',
    venue: 'Location variabile',
    poster: null,
    description: "Tre figure del folklore napoletano — la Bella 'Mbriana, il Munaciello, Fabrizio Carafa — animano eventi con monologhi, scene interattive e giochi di coinvolgimento del pubblico. Una riflessione plurale sul vincolo amoroso in chiave festiva e partecipativa."
  },
  {
    title: "Frammenti d'Amore",
    date: '2025',
    venue: 'Appartamento privato, Napoli',
    poster: null,
    description: "Due attori — una coppia nella vita e sul palco — si trovano a fare i conti con una crisi silenziosa. Uno spettacolo immersivo in appartamento dove l'amore è restituito come accumulo di frammenti, con il pubblico immerso fisicamente senza la mediazione della distanza scenica."
  },
  {
    title: "Bella 'Mbriana",
    date: '2024',
    venue: 'Casa Donelli, Napoli',
    poster: null,
    description: "Evento teatrale immersivo in spazio domestico a stazioni. Il pubblico attraversa la casa guidato dalla Bella 'Mbriana — spirito protettore della tradizione napoletana — tra performance fisiche, monologhi e momenti di partecipazione attiva."
  },
  {
    title: 'Amore e altri Racconti',
    date: '2024',
    venue: 'Villa Floridiana, Napoli',
    poster: null,
    description: "Quattro voci della letteratura del Novecento — Carver, Camus, Campanile, Barthes — in dialogo attorno a un'unica domanda: cosa si intende per amore? Una lettura scenica in spazio aperto, tra ironia, intimità e leggerezza."
  },
  {
    title: 'Amore Molesto',
    date: '2023',
    venue: 'Teatro Arcas, Napoli',
    poster: null,
    description: "Delia apprende della morte della madre e torna nella città natale per ricostruirne gli ultimi giorni. Un viaggio interiore tra infanzia, violenza familiare e memoria rimossa. Drammaturgia originale ispirata all'universo letterario di Elena Ferrante."
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

  detail.innerHTML = `
    <div class="progetti__detail-inner">
      <div class="progetti__detail-top">
        <img class="progetti__detail-logo" src="assets/images/logo.png" alt="Melt">
        <span class="progetti__detail-url">spaziomelt.com</span>
      </div>
      <h3 class="progetti__detail-title">${p.title}</h3>
      ${posterHTML}
      <div class="progetti__detail-meta">
        <div class="progetti__detail-meta-left">
          <span>${p.date}</span>
        </div>
        <div class="progetti__detail-meta-right">
          <span>${p.venue}</span>
        </div>
      </div>
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
