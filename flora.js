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

// ---- Modal Functions ----
function showModal(title, message) {
  const modal = document.getElementById('comingSoonModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');
  
  if (modal && modalTitle && modalMessage) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('comingSoonModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close modal on outside click
document.addEventListener('click', function(e) {
  const modal = document.getElementById('comingSoonModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ---- Offer Button ----
function confirmOffer() {
  showModal(
    '🌸 Coming Soon!',
    'This feature is currently under development. Our online ordering system will be available soon. Please contact us directly for orders.'
  );
}

// ---- Contact Form Submit — logs to browser console ----
function submitForm() {
  const inputs = document.querySelectorAll('.frm input, .frm textarea');
  const labels = ['Name', 'Email', 'Phone', 'Query Topic', 'Comments/Questions'];
  const formData = {};
  let isValid = true;

  inputs.forEach(function (input, index) {
    const value = input.value.trim();
    formData[labels[index] || ('Field ' + (index + 1))] = value;
    
    // Basic validation
    if (input.hasAttribute('required') && !value) {
      isValid = false;
      input.style.borderColor = '#ff4444';
    } else {
      input.style.borderColor = '';
    }
  });

  if (!isValid) {
    showModal('⚠️ Validation Error', 'Please fill in all required fields.');
    return;
  }

  // Log to console (template only)
  console.log('%c Flora -- New Query Submission ', 'background:#02a102;color:white;font-weight:bold;padding:4px 8px;border-radius:3px;');
  console.table(formData);

  // Show success message
  showModal(
    '✅ Thank You!',
    'Your query has been received (demo mode). In a production environment, this would be sent to our team.'
  );

  // Clear form
  inputs.forEach(input => input.value = '');
}