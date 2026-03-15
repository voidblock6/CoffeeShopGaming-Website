(function () {
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');

  const saved = localStorage.getItem('csg-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';

  if (btn) {
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('csg-theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }
})();