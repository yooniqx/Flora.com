/* =============================================
   FLORA — Shared JavaScript (flora.js)
   ============================================= */

// ---- Hamburger Menu ----
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      closeMenu();
    }
  });
})();

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;
  mobileNav.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
}

// ---- Offer Button ----
function confirmOffer() {
  window.confirm('Confirm buying this offer?');
}

// ---- Contact Form Submit — logs to browser console ----
function submitForm() {
  const inputs = document.querySelectorAll('.frm input, .frm textarea');
  const labels = ['Name', 'Email', 'Phone', 'Query Topic', 'Comments/Questions'];
  const formData = {};

  inputs.forEach(function (input, index) {
    formData[labels[index] || ('Field ' + (index + 1))] = input.value.trim();
  });

  const confirmed = window.confirm('Are you sure you want to submit?');
  if (confirmed) {
    console.log('%c Flora -- New Query Submission ', 'background:#02a102;color:white;font-weight:bold;padding:4px 8px;border-radius:3px;');
    console.table(formData);
  }
}