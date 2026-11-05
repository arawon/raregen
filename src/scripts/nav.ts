const header = document.querySelector<HTMLElement>('.site-header');

if (header) {
  const pill = header.querySelector<HTMLElement>('.nav-pill');
  const toggle = header.querySelector<HTMLButtonElement>('.js-product-toggle');
  const mobileToggle = header.querySelector<HTMLButtonElement>('.nav-toggle');
  const hoverable = window.matchMedia('(hover: hover) and (min-width: 961px)');

  const setOpen = (open: boolean) => {
    header.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };

  const movePill = (target: HTMLElement) => {
    if (!pill) return;
    pill.style.width = `${target.offsetWidth}px`;
    pill.style.transform = `translate(${target.offsetLeft}px, ${target.offsetTop}px)`;
    pill.style.opacity = '1';
  };

  header.querySelectorAll<HTMLElement>('.nav-link').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      if (!hoverable.matches) return;
      movePill(link);
      setOpen(link === toggle);
    });
    link.addEventListener('focus', () => {
      if (hoverable.matches) movePill(link);
    });
  });

  header.addEventListener('mouseleave', () => {
    if (!hoverable.matches) return;
    setOpen(false);
    if (pill) pill.style.opacity = '0';
  });

  toggle?.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));

  mobileToggle?.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    if (!open) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !header.classList.contains('is-open')) return;
    setOpen(false);
    toggle?.focus();
  });

  header.addEventListener('focusout', (event) => {
    if (hoverable.matches && !header.contains(event.relatedTarget as Node | null)) setOpen(false);
  });
}
