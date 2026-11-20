(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  const closeMenu = () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('open', !expanded);
    document.body.classList.toggle('menu-open', !expanded);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

  // Respect reduced-motion preferences and progressively reveal content as it enters view.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const open = question.getAttribute('aria-expanded') === 'true';
      question.setAttribute('aria-expanded', String(!open));
      const answer = question.nextElementSibling;
      if (answer) answer.hidden = open;
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Static-site enquiry form: sends a prepared WhatsApp message to the official enquiry line.
  document.querySelectorAll('[data-whatsapp-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const parts = [
        'Hello 2JS Detailing, I would like to make an enquiry.',
        `Name: ${data.get('name') || ''}`,
        `Contact number: ${data.get('phone') || ''}`,
        `Email: ${data.get('email') || 'Not provided'}`,
        `Service: ${data.get('service') || 'Not specified'}`,
        `Preferred branch: ${data.get('branch') || 'Not specified'}`,
        `Vehicle / message: ${data.get('message') || 'Not provided'}`
      ];
      const status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Opening WhatsApp with your enquiry…';
      const url = `https://wa.me/27834417085?text=${encodeURIComponent(parts.join('\n'))}`;
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win && status) status.textContent = 'Your browser blocked the new tab. Please WhatsApp 083 441 7085 directly.';
    });
  });

  // Keep all mail and phone links as normal anchors; no third-party scripts are required.
})();
