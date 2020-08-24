(() => {
  const heroBtnRef = document.querySelector('[data-hero-button]');
  const mobileHeroRef = document.querySelector('[data-hero]');

  heroBtnRef.addEventListener('click', () => {
    const expanded =
      heroBtnRef.getAttribute('aria-expanded') === 'true' || false;

    heroBtnRef.classList.toggle('close');
    heroBtnRef.setAttribute('aria-expanded', !expanded);

    mobileHeroRef.classList.toggle('close');
  });
})();
