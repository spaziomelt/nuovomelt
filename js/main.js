// ===== PROJECTS DATA =====
const projects = [
  {
    title: 'Bella Mbriana',
    date: 'Mar 9 Dicembre',
    time: 'Ore 21:00',
    venue: 'Casa Donati',
    poster: null,
    description: 'Uno spettacolo che esplora le radici della tradizione napoletana, tra mito e contemporaneità. La Bella Mbriana, spirito protettore della casa, prende vita in una performance che intreccia parola, corpo e musica.'
  },
  {
    title: 'Tutte le cose più belle',
    date: 'Sab 13 Dicembre',
    time: 'Ore 21:00',
    venue: 'Casa Donati',
    poster: null,
    description: 'Un viaggio intimo e collettivo attraverso le cose che ci rendono vivi. Uno spettacolo partecipativo dove il pubblico diventa parte della narrazione, costruendo insieme il racconto della bellezza quotidiana.'
  },
  {
    title: "Frammenti d'amore",
    date: 'Mar 16 Dicembre',
    time: 'Ore 21:00',
    venue: 'Casa Donati',
    poster: null,
    description: "Frammenti, schegge, pezzi di storie d'amore raccolte e restituite al pubblico. Una performance che indaga le forme dell'amore — quello che resta, quello che cambia, quello che ci trasforma."
  },
  {
    title: 'Amore Molesto',
    date: 'Mar 30 Dicembre',
    time: 'Ore 21:00',
    venue: 'Casa Donati',
    poster: null,
    description: "Liberamente ispirato all'opera di Elena Ferrante. Un racconto che attraversa Napoli, la memoria e il corpo, esplorando il confine sottile tra amore e violenza, tra protezione e possesso."
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
          <span>${p.time}</span>
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
