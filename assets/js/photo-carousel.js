// Generic photo carousel logic.
// Call initCarousel('container-id', [ { src: '...', caption: '...' }, ... ]) from any page.

function initCarousel(containerId, slides) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const img = container.querySelector('.carousel-img');
  const caption = container.querySelector('.carousel-caption');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');

  let current = 0;

  function show(index) {
    current = (index + slides.length) % slides.length;
    img.src = slides[current].src;
    img.alt = slides[current].caption || '';
    caption.innerText = slides[current].caption || '';
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  show(0);
}