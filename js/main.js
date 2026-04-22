/* ElixirTrials — main.js
   Add interactions here as needed. */

/* Smooth scroll to top */
document.querySelectorAll('a[href="#"]').forEach(a => {
  if (a.textContent.includes('top')) {
    a.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
