(function () {
  var root = document.querySelector('.slideshow');
  if (!root) return;
  var slides = root.querySelectorAll('.slideshow-slide');
  var counter = root.querySelector('.slideshow-counter');
  var total = slides.length, current = 1;

  function load(n) {
    if (n < 1 || n > total) return;
    var img = slides[n - 1].querySelector('img');
    if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
  }

  function show(n, updateHash) {
    n = Math.max(1, Math.min(total, n));
    slides[current - 1].hidden = true;
    slides[current - 1].classList.remove('is-active');
    current = n;
    slides[n - 1].hidden = false;
    slides[n - 1].classList.add('is-active');
    load(n); load(n + 1); load(n - 1);
    counter.textContent = n + ' / ' + total;
    if (updateHash) history.replaceState(null, '', '#' + n);
  }

  root.querySelector('.slideshow-prev').addEventListener('click', function () { show(current - 1, true); });
  root.querySelector('.slideshow-next').addEventListener('click', function () { show(current + 1, true); });
  root.querySelector('.slideshow-full').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (root.requestFullscreen) root.requestFullscreen();
  });

  root.querySelector('.slideshow-stage').addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    var rect = this.getBoundingClientRect();
    show(e.clientX - rect.left < rect.width / 3 ? current - 1 : current + 1, true);
  });

  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea')) return;
    if (e.target.closest('button') && (e.key === ' ' || e.key === 'Enter')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); show(current + 1, true); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(current - 1, true); }
    else if (e.key === 'Home') show(1, true);
    else if (e.key === 'End') show(total, true);
  });

  var startX = null;
  root.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  root.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(dx < 0 ? current + 1 : current - 1, true);
    startX = null;
  });

  var fromHash = parseInt(location.hash.slice(1), 10);
  show(fromHash >= 1 && fromHash <= total ? fromHash : 1, false);
})();
