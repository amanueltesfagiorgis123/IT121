// Function to validate the password
function validatePassword(password) {
    return password.length >= 8; // Password must be at least 8 characters long
  }
  
  // Function to validate the form
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;
  
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = ''; // Clear previous messages
  
    // Check if the first name is missing
    if (firstName === '') {
      messageDiv.textContent = 'Error: First name is required.';
      return;
    }
  
    // Check if the last name is missing
    if (lastName === '') {
      messageDiv.textContent = 'Error: Last name is required.';
      return;
    }
  
    // Validate the password
    if (!validatePassword(password)) {
      messageDiv.textContent = 'Error: Password must be at least 8 characters long.';
      return;
    }
  
    // If all fields are valid
    messageDiv.textContent = 'Success: All fields are valid!';
  }
  
  document.getElementById('userForm').addEventListener('submit', validateForm);
  