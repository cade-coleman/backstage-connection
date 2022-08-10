const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const website = document.querySelector('#website-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const genre = document.querySelector('#genre-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();
    
    
    if (email && password && website && name && phone && genre && bio) {
      const response = await fetch('/api/bands', {
        method: 'POST',
        body: JSON.stringify({ email, password, website, name, phone, genre, bio }),
        headers: { 'Content-Type': 'application/json' },
      }
      );
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

