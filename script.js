// Highlight the target card when clicking a navbar icon
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    // remove old highlights
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

    // get target card
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.classList.add('highlight');
      // Optional: auto-remove highlight after 2s
      setTimeout(() => targetEl.classList.remove('highlight'), 2000);
    }
  });
});
