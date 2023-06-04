function validateForm() {
    // Get form inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var successMessage = document.getElementById('success-message');
  
    // Validate inputs
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Display success message and clear form inputs
    successMessage.style.display = 'block';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  
    return false; // Prevent form submission
  }
  

// Get the heart logo element
const heartLogo = document.getElementById('heart');

// Add the 'heart-animation' class to start the animation
heartLogo.classList.add('heart-animation');