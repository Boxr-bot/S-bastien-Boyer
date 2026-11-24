// Menu mobile + lien actif + année du pied de page
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a[href]').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Filtres génériques : <div class="filters" data-target="#liste"> + <button data-filter="x">
  // Les éléments filtrés portent data-cat="x y".
  document.querySelectorAll('.filters').forEach(function (bar) {
    var target = document.querySelector(bar.getAttribute('data-target'));
    if (!target) return;
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      bar.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      var f = btn.getAttribute('data-filter');
      target.querySelectorAll('[data-cat]').forEach(function (el) {
        el.hidden = !(f === 'tout' || el.getAttribute('data-cat').split(' ').indexOf(f) !== -1);
      });
    });
  });
})();
