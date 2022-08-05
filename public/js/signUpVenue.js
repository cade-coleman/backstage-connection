const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/venues', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);