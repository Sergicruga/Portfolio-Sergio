"use strict";
// Si quieres publicar un correo o tu perfil profesional, rellena estos campos.
// Déjalos vacíos hasta que hayas decidido qué información hacer pública.
const CONTACTO = {
  email: "",
  linkedin: "",
  github: ""
};

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  }));
}

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-type]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const target = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  cards.forEach(card => card.classList.toggle('is-hidden', target !== 'todos' && card.dataset.type !== target));
}));

const contactLinks = document.querySelector('#contact-links');
if (contactLinks) {
  const safeLinks = [
    CONTACTO.email && { label: 'Enviar correo profesional ↗', url: `mailto:${CONTACTO.email.trim()}` },
    CONTACTO.linkedin?.startsWith('https://') && { label: 'Ver mi LinkedIn ↗', url: CONTACTO.linkedin },
    CONTACTO.github?.startsWith('https://') && { label: 'Ver mi GitHub ↗', url: CONTACTO.github }
  ].filter(Boolean);
  safeLinks.forEach(({label, url}) => {
    const link = document.createElement('a');
    link.textContent = label;
    link.href = url;
    if (url.startsWith('https://')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    contactLinks.append(link);
  });
  contactLinks.hidden = safeLinks.length === 0;
}
