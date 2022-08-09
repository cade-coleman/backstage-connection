const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const location = document.querySelector('#location-signup').value.trim();
    const website = document.querySelector('#website-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();

    if (email && password && location && website && phone && name) 
    {
      const response = await fetch('/api/venues', {
        method: 'POST',
        body: JSON.stringify({ email, password, location, website, phone, name }),
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