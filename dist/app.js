const projects = [
  {
    name: 'AOVE360', category: 'Trabajo Fin de Grado · Universidad de Sevilla',
    description: 'Aplicación móvil para Martín de Prado AOVE: tienda, reservas de experiencias, academia oleícola, perfil de cliente y administración. Integra servicios de pago, comunicación y un asistente conversacional.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Stripe'], image: 'aove360.webp',
    alt: 'Botellas de aceite de oliva Martín de Prado, imagen del proyecto AOVE360',
    url: 'https://github.com/carlosmdpb/AOVE360', tone: 'dark'
  },
  {
    name: 'Gunfighter', category: 'Aplicación web · Proyecto en equipo',
    description: 'Juego de duelos de cartas para dos personas con partidas y actualizaciones en tiempo real.',
    tags: ['React', 'Spring Boot', 'WebSocket'], image: 'gunfighter.webp',
    alt: 'Dos vaqueros frente a frente, imagen del juego Gunfighter',
    url: 'https://github.com/carlosmdpb/Gunfighter', tone: 'dark'
  },
  {
    name: 'Petclinic', category: 'Gestión web · Proyecto en equipo',
    description: 'Gestión veterinaria ampliada con adopciones, hotel para mascotas y consultas.',
    tags: ['React', 'Java', 'Spring Boot'], image: 'petclinic.webp',
    alt: 'Niño con un perro, imagen incluida en la aplicación Petclinic',
    url: 'https://github.com/carlosmdpb/Petclinic', tone: ''
  },
  {
    name: 'U-Net para resonancias', category: 'Visión artificial · Adaptación técnica',
    description: 'Adaptación de U-Net para segmentar tumores cerebrales en imágenes de resonancia magnética.',
    tags: ['Python', 'PyTorch', 'U-Net'], image: 'unet.webp',
    alt: 'Resonancia magnética utilizada en el proyecto de segmentación U-Net',
    url: 'https://github.com/carlosmdpb/Pytorch-UNet', tone: 'dark'
  },
  {
    name: 'Ensamble secuencial', category: 'Aprendizaje automático · Proyecto en equipo',
    description: 'Regresores que aprenden en secuencia de los errores acumulados para mejorar la predicción.',
    tags: ['Python', 'scikit-learn', 'Jupyter'], image: 'ensamble.svg',
    alt: 'Esquema de datos, modelo, residuo y corrección en un ensamble secuencial',
    url: 'https://github.com/carlosmdpb/Ensamble_Secuencial', tone: 'blue'
  },
  {
    name: 'Rincón Rural', category: 'Reservas web · Proyecto en equipo',
    description: 'Plataforma para consultar espacios de una localidad rural y gestionar sus reservas.',
    tags: ['Django', 'Python', 'SQLite'], image: 'rincon-rural.webp',
    alt: 'Símbolo de una casa y un árbol del proyecto Rincón Rural',
    url: 'https://github.com/carlosmdpb/Rincon_Rural', tone: 'cream', contain: true
  },
  {
    name: 'Montaito-Hub', category: 'Plataforma web · Proyecto en equipo',
    description: 'Evolución de UVLHub para publicar y analizar modelos de características, con perfiles y estadísticas.',
    tags: ['Flask', 'MariaDB', 'Docker'], image: 'uvlhub.webp',
    alt: 'Identidad gráfica del proyecto UVLHub',
    url: 'https://github.com/carlosmdpb/UVLHub', tone: 'blue', contain: true
  },
  {
    name: 'Acme-SF', category: 'Ingeniería de software · Proyecto en equipo',
    description: 'Aplicación de gestión de proyectos, historias de usuario, contratos, auditorías y patrocinios.',
    tags: ['Java', 'Acme Framework', 'Maven'], image: 'acme-sf.webp',
    alt: 'Cabecera gráfica del proyecto Acme-SF',
    url: 'https://github.com/carlosmdpb/Acme-SF', tone: 'cream', contain: true
  }
];

const commands = {
  perfil: 'whoami',
  proyectos: 'ls ~/proyectos',
  trayectoria: 'cat trayectoria.md',
  aptitudes: 'grep aptitudes cv.txt'
};

const output = document.getElementById('terminal-output');
const typedCommand = document.getElementById('typed-command');
const navButtons = [...document.querySelectorAll('.nav-command')];
const commandInput = document.getElementById('command-input');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let typingTimer = null;
let transitionId = 0;

function projectCard(project, featured = false) {
  const imageClass = `project-image ${project.tone || ''} ${project.contain ? 'contain' : ''}`;
  return `<article class="${featured ? 'project-feature' : 'project-card'}">
    <div class="${imageClass}"><img src="./assets/${project.image}" alt="${project.alt}" loading="lazy"></div>
    <div class="project-copy ${featured ? 'feature-copy' : ''}">
      <p class="project-eyebrow">${project.category}</p>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver ${project.name} en GitHub">Ver repositorio <span aria-hidden="true">↗</span></a>
    </div>
  </article>`;
}

const sections = {
  perfil: () => `<p class="output-header">perfil.md</p>
    <h3 class="output-title">Construir software. Entender cómo protegerlo.</h3>
    <p class="output-lead">Soy Carlos, graduado en Ingeniería Informática del Software por la Universidad de Sevilla. He trabajado en desarrollo web y móvil, y actualmente curso el Máster en Ciberseguridad de UNIR junto con el Programa Superior Universitario en Ciberseguridad Industrial.</p>
    <p class="output-muted">Quiero aplicar mi experiencia construyendo aplicaciones al análisis y protección de sistemas, redes y entornos industriales y OT. Me mueven la iniciativa, el trabajo en equipo y el aprendizaje continuo.</p>
    <div class="profile-info"><div class="info-block"><small>Base</small><strong>Sevilla, España</strong></div><div class="info-block"><small>Enfoque</small><strong>Software + ciberseguridad</strong></div><div class="info-block"><small>Experiencia</small><strong>Web y móvil</strong></div></div>`,
  proyectos: () => `<p class="output-header">~/proyectos</p><h3 class="output-title">Proyectos seleccionados</h3>
    <p class="projects-intro">Del producto móvil al aprendizaje automático. El TFG abre la colección.</p>
    ${projectCard(projects[0], true)}<div class="project-grid">${projects.slice(1).map(project => projectCard(project)).join('')}</div>`,
  trayectoria: () => `<p class="output-header">trayectoria.md</p><h3 class="output-title">Trayectoria</h3>
    <p class="output-muted">Formación en ingeniería del software y especialización actual en ciberseguridad, junto con experiencia profesional creando productos web y móviles.</p>
    <div class="timeline">
      <div class="timeline-group"><h3>Experiencia</h3><div class="timeline-items">
        <article class="timeline-item"><p class="timeline-date">jun — sep 2026</p><h4 class="timeline-role">Desarrollador web</h4><p class="timeline-place">Prisma Iniciativas Gourmets Extremeñas SL · Híbrido</p><p class="timeline-note">Plataforma de comercio electrónico con React, Next.js, TypeScript y Tailwind CSS. Backend con Node.js y Supabase; pagos con Stripe y comunicaciones con Resend.</p></article>
        <article class="timeline-item"><p class="timeline-date">ago 2025 — feb 2026</p><h4 class="timeline-role">Desarrollador móvil</h4><p class="timeline-place">Jangueo · Remoto</p><p class="timeline-note">Desarrollo de funcionalidades con Flutter y Dart en un equipo de tres personas, adaptando el producto a los requisitos del cliente.</p></article>
      </div></div>
      <div class="timeline-group"><h3>Formación</h3><div class="timeline-items">
        <article class="timeline-item"><p class="timeline-date">sep 2026 — actualidad</p><h4 class="timeline-role">Máster en Ciberseguridad</h4><p class="timeline-place">Universidad Internacional de La Rioja · Online</p><p class="timeline-note">Incluye el Programa Superior Universitario en Ciberseguridad Industrial.</p></article>
        <article class="timeline-item"><p class="timeline-date">sep 2021 — jul 2026</p><h4 class="timeline-role">Grado en Ingeniería Informática del Software</h4><p class="timeline-place">Universidad de Sevilla</p><p class="timeline-note">TFG: AOVE360, una aplicación móvil para la experiencia Martín de Prado.</p></article>
      </div></div>
    </div>`,
  aptitudes: () => `<p class="output-header">cv.txt / aptitudes</p><h3 class="output-title">Aptitudes</h3>
    <p class="output-muted">Tecnologías y herramientas recogidas en mi CV.</p>
    <div class="skills-grid">
      <section class="skill-group"><h3>Programación y scripting</h3><div class="skill-pills"><span>Python</span><span>Bash</span><span>Java</span><span>JavaScript</span><span>TypeScript</span><span>Dart</span><span>SQL</span></div></section>
      <section class="skill-group"><h3>Sistemas y herramientas</h3><div class="skill-pills"><span>Linux</span><span>Docker</span><span>Git</span><span>GitHub Actions</span><span>Wireshark</span></div></section>
      <section class="skill-group"><h3>Desarrollo de aplicaciones</h3><div class="skill-pills"><span>Node.js</span><span>React</span><span>Next.js</span><span>Flutter</span><span>Spring Boot</span><span>Django</span><span>REST APIs</span></div></section>
      <section class="skill-group"><h3>Datos y servicios</h3><div class="skill-pills"><span>PostgreSQL</span><span>MySQL</span><span>Supabase</span></div></section>
    </div><p class="skill-footnote"><strong>Idiomas:</strong> español nativo e inglés Cambridge B2 First; preparando C1 Advanced.</p>`
};

function setActive(section) {
  navButtons.forEach(button => {
    const selected = button.dataset.section === section;
    button.classList.toggle('is-active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function showOutput(html) {
  output.classList.remove('is-entering');
  output.innerHTML = html;
  if (!prefersReducedMotion.matches) {
    void output.offsetWidth;
    output.classList.add('is-entering');
  }
}

function navigate(section, animate = true) {
  if (!sections[section]) return;
  transitionId += 1;
  const current = transitionId;
  window.clearInterval(typingTimer);
  setActive(section);
  const command = commands[section];
  typedCommand.textContent = '';
  output.innerHTML = '';
  history.replaceState(null, '', `#${section}`);
  if (!animate || prefersReducedMotion.matches) {
    typedCommand.textContent = command;
    showOutput(sections[section]());
    return;
  }
  let index = 0;
  typingTimer = window.setInterval(() => {
    if (current !== transitionId) { window.clearInterval(typingTimer); return; }
    index += 1;
    typedCommand.textContent = command.slice(0, index);
    if (index >= command.length) {
      window.clearInterval(typingTimer);
      window.setTimeout(() => { if (current === transitionId) showOutput(sections[section]()); }, 110);
    }
  }, 34);
}

navButtons.forEach(button => button.addEventListener('click', () => navigate(button.dataset.section)));

const help = `<p class="output-header">comandos disponibles</p><h3 class="output-title">¿Qué quieres explorar?</h3>
  <ul class="help-list"><li><code>whoami</code> Perfil</li><li><code>ls ~/proyectos</code> Proyectos</li><li><code>cat trayectoria.md</code> Trayectoria</li><li><code>grep aptitudes cv.txt</code> Aptitudes</li><li><code>help</code> Ver esta ayuda</li><li><code>clear</code> Limpiar salida</li></ul>`;

document.getElementById('command-form').addEventListener('submit', event => {
  event.preventDefault();
  const value = commandInput.value.trim().replace(/\s+/g, ' ');
  commandInput.value = '';
  if (!value) return;
  const normalized = value.toLowerCase();
  const match = Object.keys(commands).find(section => normalized === commands[section].toLowerCase()) ||
    ({perfil:'perfil',proyectos:'proyectos',trayectoria:'trayectoria',aptitudes:'aptitudes',ls:'proyectos'}[normalized]);
  if (match) {
    navigate(match, false);
  } else {
    transitionId += 1;
    window.clearInterval(typingTimer);
    typedCommand.textContent = value;
    setActive(null);
    if (normalized === 'help') showOutput(help);
    else if (normalized === 'clear') showOutput('<p class="terminal-message">Salida limpia. Escribe <code>help</code> para ver los comandos.</p>');
    else showOutput(`<p class="terminal-message">Comando no reconocido. Escribe <code>help</code> para ver las opciones disponibles.</p>`);
  }
  commandInput.focus();
});

const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const next = theme === 'dark' ? 'claro' : 'oscuro';
  themeToggle.setAttribute('aria-label', `Activar modo ${next}`);
  themeLabel.textContent = `Modo ${next}`;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#091629' : '#f8fbff';
}
try { applyTheme(localStorage.getItem('carlos-portfolio-theme') === 'light' ? 'light' : 'dark'); }
catch { applyTheme('dark'); }
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('carlos-portfolio-theme', next); } catch {}
});

document.getElementById('year').textContent = String(new Date().getFullYear());
const startingSection = location.hash.slice(1);
navigate(sections[startingSection] ? startingSection : 'perfil', false);
window.addEventListener('hashchange', () => {
  const section = location.hash.slice(1);
  if (sections[section]) navigate(section, false);
});
