const i18n = window.portfolioI18n;
const t = i18n.t;
const projects = [
  {
    name: 'AOVE360', category: 'Trabajo Fin de Grado · Universidad de Sevilla', grade: '9,9/10',
    description: 'Aplicación móvil para Martín de Prado AOVE: tienda, reservas de experiencias, academia oleícola, perfil de cliente y administración. Integra servicios de pago, comunicación y un asistente conversacional.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Stripe'], image: 'aove360.webp',
    alt: 'Botellas de aceite de oliva Martín de Prado, imagen del proyecto AOVE360',
    url: 'https://github.com/carlosmdpb/AOVE360', downloadUrl: 'https://app.aove360.com/', tone: 'dark'
  },
  {
    name: 'Gunfighter', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Juego web de duelos de cartas ambientado en el Oeste. Dos jugadores pueden crear una partida, seguir las jugadas en tiempo real y consultar su historial, estadísticas, rankings y logros. También incluye perfiles, amistades y administración.',
    tags: ['React', 'Spring Boot', 'WebSocket'], image: 'gunfighter.webp',
    alt: 'Dos vaqueros frente a frente, imagen del juego Gunfighter',
    url: 'https://github.com/carlosmdpb/Gunfighter', tone: 'dark'
  },
  {
    name: 'Petclinic', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Plataforma de gestión veterinaria para clínicas, propietarios, mascotas, veterinarios y visitas. Amplía Petclinic con ofertas de adopción, reservas de hotel para mascotas y consultas mediante tickets, con funciones distintas según el rol de cada usuario.',
    tags: ['React', 'Java', 'Spring Boot'], image: 'petclinic.webp',
    alt: 'Niño con un perro, imagen incluida en la aplicación Petclinic',
    url: 'https://github.com/carlosmdpb/Petclinic', tone: ''
  },
  {
    name: 'U-Net para resonancias', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Adaptación de U-Net para segmentar tumores cerebrales en resonancias magnéticas. Prepara máscaras binarias a partir de anotaciones COCO y permite superponer las predicciones sobre la imagen original, compararlas con la máscara real y calcular el Dice Score.',
    tags: ['Python', 'PyTorch', 'U-Net'], image: 'unet.webp',
    alt: 'Resonancia magnética utilizada en el proyecto de segmentación U-Net',
    url: 'https://github.com/carlosmdpb/Pytorch-UNet', tone: 'dark'
  },
  {
    name: 'Ensamble secuencial', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Implementación de un regresor que entrena modelos en secuencia para corregir los errores acumulados de los anteriores. Se estudia con árboles de decisión y regresión lineal sobre precios de viviendas y progresión del Parkinson, comparando configuraciones y resultados.',
    tags: ['Python', 'scikit-learn', 'Jupyter'], image: 'ensamble-cover.png',
    alt: 'Curvas de predicción que se ajustan progresivamente a los datos en un ensamble secuencial',
    url: 'https://github.com/carlosmdpb/Ensamble_Secuencial', tone: 'blue'
  },
  {
    name: 'Rincón Rural', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Aplicación web para consultar y reservar espacios de una localidad rural según el código postal. Comprueba horarios y solapamientos, gestiona eventos y reservas agrupadas, y permite autorizar solicitudes con notificaciones por correo.',
    tags: ['Django', 'Python', 'SQLite'], image: 'rincon-rural.webp',
    alt: 'Símbolo de una casa y un árbol del proyecto Rincón Rural',
    url: 'https://github.com/carlosmdpb/Rincon_Rural', tone: 'cream', contain: true
  },
  {
    name: 'Montaito-Hub', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Evolución de UVLHub para compartir, buscar, descargar y analizar modelos de características en formato UVL. Añade valoraciones, perfiles, rankings y estadísticas de actividad, junto con integraciones para publicación y consulta desde otros servicios.',
    tags: ['Flask', 'MariaDB', 'Docker'], image: 'uvlhub.webp',
    alt: 'Identidad gráfica del proyecto UVLHub',
    url: 'https://github.com/carlosmdpb/UVLHub', tone: 'blue', contain: true
  },
  {
    name: 'Acme-SF', category: 'Proyecto en equipo · Universidad de Sevilla',
    description: 'Aplicación para gestionar una fábrica de software ficticia. Organiza proyectos, historias de usuario, contratos, seguimiento, auditorías, formación y patrocinios; las operaciones y paneles se adaptan a perfiles como gestores, desarrolladores, clientes y auditores.',
    tags: ['Java', 'Acme Framework', 'Maven'], image: 'acme-sf.webp',
    alt: 'Cabecera gráfica del proyecto Acme-SF',
    url: 'https://github.com/carlosmdpb/Acme-SF', tone: 'cream', contain: true
  }
];

const commands = {
  perfil: 'whoami',
  proyectos: 'ls ~/proyectos',
  trayectoria: 'cat trayectoria.md',
  aptitudes: 'cat aptitudes.txt'
};

// Categories and technologies transcribed from the CV's Habilidades section.
const skillGroups = [
  { title: 'Programación y scripting', skills: ['Python', 'Bash', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'SQL'], icon: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14"/>' },
  { title: 'Sistemas y herramientas', skills: ['Linux', 'Docker', 'Git', 'GitHub Actions', 'Wireshark'], icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>' },
  { title: 'Desarrollo de aplicaciones', skills: ['Node.js', 'React', 'Next.js', 'Flutter', 'Spring Boot', 'Django', 'REST APIs'], icon: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>' },
  { title: 'Bases de datos y servicios', skills: ['PostgreSQL', 'MySQL', 'Supabase'], icon: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>' }
];

const output = document.getElementById('terminal-output');
const typedCommand = document.getElementById('typed-command');
const navButtons = [...document.querySelectorAll('.nav-command')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let typingTimer = null;
let transitionId = 0;
let outputAnimations = [];
let activeSection = null;
const terminalNav = document.querySelector('.terminal-nav');
const navIndicator = document.querySelector('.nav-indicator');

function positionIndicator(animate = true) {
  const selected = navButtons.find(button => button.dataset.section === activeSection);
  if (!selected) return;
  navIndicator.classList.toggle('is-instant', !animate || prefersReducedMotion.matches);
  navIndicator.style.transform = `translate3d(${selected.offsetLeft}px, ${selected.offsetTop + selected.offsetHeight - 3}px, 0) scaleX(${selected.offsetWidth / 100})`;
  navIndicator.style.opacity = '1';
}

if (typeof ResizeObserver !== 'undefined') {
  new ResizeObserver(() => positionIndicator(false)).observe(terminalNav);
} else window.addEventListener('resize', () => positionIndicator(false));

function iconGradient(id) {
  return `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="12" x2="24" y2="12"><stop offset="0%" class="icon-gradient-edge" stop-opacity="0.8"/><stop offset="50%" class="icon-gradient-center"/><stop offset="100%" class="icon-gradient-edge" stop-opacity="0.8"/></linearGradient></defs>`;
}

function projectCard(project, featured = false) {
  const githubGradientId = `project-${projects.indexOf(project)}-github-gradient`;
  const downloadGradientId = `project-${projects.indexOf(project)}-download-gradient`;
  const imageClass = `project-image ${project.tone || ''} ${project.contain ? 'contain' : ''}`;
  const tags = project.tags.map(tag => `<span>${tag}</span>`).join('');
  return `<article class="${featured ? 'project-feature' : 'project-card'}">
    <div class="${imageClass}"><img src="./assets/${project.image}" alt="${project.alt}" loading="lazy"></div>
    <div class="project-copy ${featured ? 'feature-copy' : ''}">
      <p class="project-eyebrow">${project.category}</p>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      ${project.grade ? `<div class="project-tech-row"><div class="project-tags">${tags}</div><span class="project-grade"><small>Nota del TFG</small><strong>${project.grade}</strong></span></div>` : `<div class="project-tags">${tags}</div>`}
      <div class="project-actions">
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver ${project.name} en GitHub"><svg class="project-github-icon" viewBox="0 0 24 24" fill="none" stroke="url(#${githubGradientId})" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconGradient(githubGradientId)}<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>Ver repositorio</a>
        ${project.downloadUrl ? `<a class="project-link project-download" href="${project.downloadUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ir a la página de descarga de la APK de ${project.name}"><svg class="project-download-icon" viewBox="0 0 24 24" fill="none" stroke="url(#${downloadGradientId})" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconGradient(downloadGradientId)}<path d="m7 17 10-10M7 7h10v10"/></svg>Descargar APK</a>` : ''}
      </div>
    </div>
  </article>`;
}

const sections = {
  perfil: () => `<h3 class="output-title">Perfil</h3>
    <div class="profile-copy">
      <p class="output-muted">Graduado en Ingeniería Informática del Software por la Universidad de Sevilla, con experiencia profesional en desarrollo web y móvil.</p>
      <p class="output-muted">Durante la carrera he aprendido a construir sistemas: analizar sus requisitos, diseñar soluciones y desarrollar aplicaciones en las que el código, los datos y los distintos componentes tienen que funcionar de forma coherente. Ese aprendizaje, junto con mi experiencia profesional, me ha ayudado a entender las decisiones que hay detrás de un producto y cómo afectan a su funcionamiento.</p>
      <p class="output-muted">Ahora quiero aplicar esa perspectiva a la ciberseguridad. Conocer cómo se desarrolla una aplicación me da una base para estudiar sus puntos de entrada, cómo maneja la información y qué consecuencias puede tener un fallo. Me interesa aprender a identificar vulnerabilidades, comprender su impacto y plantear medidas de protección, incorporando la seguridad desde el diseño y a lo largo del desarrollo.</p>
      <p class="output-muted">Actualmente curso el Máster Universitario en Ciberseguridad y el Programa Superior Universitario en Ciberseguridad Industrial en UNIR, orientando mi carrera hacia la seguridad informática.</p>
      <p class="output-muted">Mi objetivo es especializarme en ciberseguridad y desarrollar un perfil técnico amplio, con interés en seguridad ofensiva y defensiva, seguridad de aplicaciones y sistemas, y entornos industriales y OT. Quiero seguir aprendiendo, compartir conocimientos y aportar mi experiencia en desarrollo al análisis y la protección de sistemas.</p>
    </div>
    <div class="profile-info"><div class="info-block"><small>Ubicación</small><strong>Sevilla, España</strong></div><div class="info-block"><small>Objetivo</small><strong>Especializarme en ciberseguridad</strong></div><div class="info-block"><small>Modalidad</small><strong>Presencial, híbrida o remota</strong></div></div>`,
  proyectos: () => `<h3 class="output-title">Proyectos destacados</h3>
    ${projectCard(projects[0], true)}<div class="project-grid">${projects.slice(1).map(project => projectCard(project)).join('')}</div>`,
  trayectoria: () => `<h3 class="output-title">Trayectoria</h3>
    <p class="output-muted">Formación en ingeniería del software y especialización actual en ciberseguridad, junto con experiencia profesional creando productos web y móviles.</p>
    <div class="timeline">
      <div class="timeline-group timeline-experience"><h3>Experiencia</h3><div class="timeline-items">
        <article class="timeline-item"><p class="timeline-date">jun — sep 2026</p><h4 class="timeline-role">Desarrollador web</h4><p class="timeline-place">Prisma Iniciativas Gourmets Extremeñas SL · Híbrido</p><p class="timeline-note">Plataforma de comercio electrónico con React, Next.js, TypeScript y Tailwind CSS. Backend con Node.js y Supabase; pagos con Stripe y comunicaciones con Resend.</p><a class="timeline-link" href="https://martindeprado.es/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="url(#timeline-website-gradient)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconGradient('timeline-website-gradient')}<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 2.4 4.5 5.4 4.5 9S15 18.6 12 21M12 3C9 5.4 7.5 8.4 7.5 12S9 18.6 12 21"/></svg>Visitar martindeprado.es</a></article>
        <article class="timeline-item"><p class="timeline-date">ago 2025 — feb 2026</p><h4 class="timeline-role">Desarrollador móvil</h4><p class="timeline-place">Jangueo · Remoto</p><p class="timeline-note">Desarrollo de funcionalidades con Flutter y Dart en un equipo de tres personas, adaptando el producto a los requisitos del cliente.</p></article>
      </div></div>
      <div class="timeline-group timeline-education"><h3>Formación</h3><div class="timeline-items">
        <article class="timeline-item"><p class="timeline-date">sep 2026 — actualidad</p><h4 class="timeline-role">Máster en Ciberseguridad y PSU en Ciberseguridad Industrial</h4><div class="timeline-school"><span class="school-emblem school-emblem-unir"><img src="./assets/unir-linkedin.png" alt="" width="46" height="46"></span><p class="timeline-place">Universidad Internacional de La Rioja</p></div></article>
        <article class="timeline-item"><p class="timeline-date">sep 2021 — jul 2026</p><h4 class="timeline-role">Grado en Ingeniería Informática – Ingeniería del Software</h4><div class="timeline-school"><span class="school-emblem school-emblem-us"><img src="./assets/us-marca.png" alt="" width="46" height="46"></span><p class="timeline-place">Universidad de Sevilla</p></div></article>
      </div></div>
    </div>`,
  aptitudes: () => `<h3 class="output-title">Aptitudes</h3>
    <section class="technical-skills" aria-labelledby="technical-skills-heading">
      <h4 id="technical-skills-heading">Aptitudes técnicas</h4>
      <div class="skills-matrix">${skillGroups.map((group, index) => {
        const gradientId = `skill-category-${index}-gradient`;
        return `<section class="skill-row" aria-labelledby="skill-category-${index}">
          <div class="skill-category"><svg viewBox="0 0 24 24" fill="none" stroke="url(#${gradientId})" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconGradient(gradientId)}${group.icon}</svg><h5 id="skill-category-${index}">${group.title}</h5></div>
          <ul class="skill-tokens">${group.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </section>`;
      }).join('')}</div>
    </section>
    <section class="languages-section" aria-labelledby="languages-heading">
      <h4 id="languages-heading">Idiomas</h4>
      <div class="language-grid">
        <article class="language-english">
          <div class="language-certificate">
            <span class="school-emblem school-emblem-cambridge"><img src="./assets/cambridge-english.png" alt="" width="56" height="56"></span>
            <div class="language-details"><h5>Inglés</h5><p class="language-qualification"><strong>B2 First</strong><span>Cambridge English</span></p></div>
          </div>
          <p class="language-progress"><span aria-hidden="true"></span>Preparando C1 Advanced</p>
        </article>
        <article class="language-native"><h5>Español</h5><p>Nativo</p></article>
      </div>
    </section>`
};

function setActive(section, animate = true) {
  activeSection = section;
  navButtons.forEach(button => {
    const selected = button.dataset.section === section;
    button.classList.toggle('is-active', selected);
    if (selected) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  positionIndicator(animate);
}

function cancelOutputAnimations() {
  outputAnimations.forEach(animation => animation.cancel());
  outputAnimations = [];
}

function showOutput(html, animate = true) {
  cancelOutputAnimations();
  output.style.removeProperty('min-height');
  output.innerHTML = i18n.translateHTML(html);
  output.setAttribute('aria-busy', 'false');
  if (animate && !prefersReducedMotion.matches && typeof output.animate === 'function') {
    outputAnimations = [...output.children].map((block, index) => block.animate([
      { opacity: 0, transform: 'translate3d(0, 6px, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' }
    ], {
      duration: 220,
      delay: Math.min(index * 30, 60),
      fill: 'backwards',
      easing: 'cubic-bezier(.23, 1, .32, 1)'
    }));
  }
}

function navigate(section, animate = true) {
  if (!sections[section] || section === activeSection) return;
  transitionId += 1;
  const current = transitionId;
  window.clearInterval(typingTimer);
  setActive(section, animate);
  const command = t(commands[section]);
  history.replaceState(null, '', `#${section}`);
  if (!animate || prefersReducedMotion.matches) {
    typedCommand.textContent = command;
    showOutput(sections[section](), false);
    return;
  }
  cancelOutputAnimations();
  // Keep the panel stable while typing, without showing the previous result.
  output.style.minHeight = `${output.getBoundingClientRect().height}px`;
  output.setAttribute('aria-busy', 'true');
  output.replaceChildren();
  typedCommand.textContent = '';
  let index = 0;
  typingTimer = window.setInterval(() => {
    if (current !== transitionId) { window.clearInterval(typingTimer); return; }
    index += 1;
    typedCommand.textContent = command.slice(0, index);
    if (index >= command.length) {
      window.clearInterval(typingTimer);
      showOutput(sections[section](), true);
    }
  }, 55);
}

navButtons.forEach(button => button.addEventListener('click', event => navigate(button.dataset.section, event.detail !== 0)));

const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const brandIcon = document.querySelector('.brand-icon');
const favicon = document.querySelector('link[rel="icon"]');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = theme === 'dark' ? './favicon.svg?v=3' : './favicon-light.svg?v=3';
  brandIcon.src = icon;
  favicon.href = icon;
  const next = theme === 'dark' ? 'claro' : 'oscuro';
  themeToggle.setAttribute('aria-label', t(`Activar modo ${next}`));
  themeToggle.title = t(`Activar modo ${next}`);
  themeLabel.textContent = t(`Modo ${next}`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101114' : '#f5f5f7';
}
try { applyTheme(localStorage.getItem('carlos-portfolio-estilos-theme') === 'light' ? 'light' : 'dark'); }
catch { applyTheme('dark'); }
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('carlos-portfolio-estilos-theme', next); } catch {}
});

const languageToggle = document.getElementById('language-toggle');
const cvDownloads = {
  es: './Carlos_Martin_de_Prado_Barragan_CV_ES.pdf',
  en: './Carlos_Martin_de_Prado_Barragan_CV_EN.pdf'
};
function updateCvDownload() {
  const link = document.getElementById('cv-download');
  const file = cvDownloads[i18n.language];
  link.href = file;
  link.download = file.split('/').pop();
  link.querySelector('span').textContent = t('Descargar CV');
}
function updateLanguageToggle() {
  const label = t(i18n.language === 'es' ? 'Cambiar a inglés' : 'Cambiar a español');
  languageToggle.setAttribute('aria-label', label);
  languageToggle.title = label;
}
updateLanguageToggle();
updateCvDownload();
languageToggle.addEventListener('click', event => {
  const next = i18n.language === 'es' ? 'en' : 'es';
  i18n.applyLanguage(next);
  try { localStorage.setItem('carlos-portfolio-estilos-language', next); } catch {}
  updateLanguageToggle();
  updateCvDownload();
  applyTheme(document.documentElement.dataset.theme);
  transitionId += 1;
  window.clearInterval(typingTimer);
  if (activeSection) {
    typedCommand.textContent = t(commands[activeSection]);
    showOutput(sections[activeSection](), event.detail !== 0);
  }
  positionIndicator(false);
});

document.getElementById('year').textContent = String(new Date().getFullYear());
const startingSection = location.hash.slice(1);
navigate(sections[startingSection] ? startingSection : 'perfil', false);
window.addEventListener('hashchange', () => {
  const section = location.hash.slice(1);
  if (sections[section]) navigate(section, false);
});

const firstVisitLoader = document.getElementById('first-visit-loader');
const siteShell = document.querySelector('.site-shell');
function startEntrance() {
  if (prefersReducedMotion.matches) return;
  siteShell.classList.add('is-arriving');
  window.setTimeout(() => siteShell.classList.remove('is-arriving'), 720);
}

prefersReducedMotion.addEventListener('change', event => {
  if (!event.matches) return;
  window.clearInterval(typingTimer);
  if (activeSection) {
    typedCommand.textContent = t(commands[activeSection]);
    if (output.getAttribute('aria-busy') === 'true') showOutput(sections[activeSection](), false);
    else cancelOutputAnimations();
  }
  siteShell.classList.remove('is-arriving');
  positionIndicator(false);
});

if (document.documentElement.classList.contains('show-intro')) {
  siteShell.inert = true;
  let introFinished = false;

  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    prefersReducedMotion.removeEventListener('change', onMotionChange);
    // Begin the entrance under the overlay, before its fade reveals the page.
    startEntrance();
    firstVisitLoader.classList.add('is-leaving');
    window.setTimeout(() => {
      document.documentElement.classList.remove('show-intro', 'intro-running');
      siteShell.inert = false;
      firstVisitLoader.remove();
    }, prefersReducedMotion.matches ? 0 : 150);
  }

  function onMotionChange(event) {
    if (event.matches) finishIntro();
  }

  const bootDelay = ms => new Promise(resolve => window.setTimeout(resolve, ms));

  async function runBootSequence() {
    await bootDelay(180);
    const lines = [...firstVisitLoader.querySelectorAll('.loader-line')];
    const progress = firstVisitLoader.querySelector('.loader-progress span');
    const tickDelay = 20;
    const pauseTicks = 2;
    const totalTicks = lines.reduce((total, line) => total + line.dataset.command.length + pauseTicks, 0);
    let completedTicks = 0;
    const advanceProgress = () => {
      completedTicks += 1;
      progress.style.transform = `scaleX(${completedTicks / totalTicks})`;
    };
    for (const line of lines) {
      if (introFinished) return;
      line.classList.add('is-active');
      const typed = line.querySelector('.loader-typed');
      const command = line.dataset.command;
      for (let index = 1; index <= command.length; index += 1) {
        if (introFinished) return;
        typed.textContent = command.slice(0, index);
        advanceProgress();
        await bootDelay(tickDelay);
      }
      if (introFinished) return;
      line.classList.remove('is-active');
      line.classList.add('is-complete');
      // Keep the same cadence through the short pause between commands.
      for (let tick = 0; tick < pauseTicks; tick += 1) {
        if (introFinished) return;
        advanceProgress();
        await bootDelay(tickDelay);
      }
    }
    if (introFinished) return;
    firstVisitLoader.classList.add('is-ready');
    firstVisitLoader.querySelector('.loader-ready').classList.add('is-visible');
    await bootDelay(250);
  }

  function startIntro() {
    document.documentElement.classList.add('intro-running');
    runBootSequence().then(finishIntro);
    window.setTimeout(finishIntro, 5000);
    prefersReducedMotion.addEventListener('change', onMotionChange);
  }

  if (document.hidden) {
    const onVisible = () => {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', onVisible);
      startIntro();
    };
    document.addEventListener('visibilitychange', onVisible);
  } else startIntro();
} else {
  firstVisitLoader.remove();
  startEntrance();
}

window.addEventListener('pageshow', event => {
  if (event.persisted) location.reload();
});
