const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
