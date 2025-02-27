document.querySelectorAll('.in-up h2').forEach(link => {
    link.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      const loginForm = document.getElementById('login-form');
      const signupForm = document.getElementById('signup-form');
      const formContainer = document.querySelector('.form');
  
      // Toggle forms by adding/removing the "hidden" class.
      // Also update the background gradient based on the active form.
      if (target === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        formContainer.classList.remove('top');
      } else if (target === 'signup') {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        formContainer.classList.add('top');
      }
    });
  });
  