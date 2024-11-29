// script.js

function showWelcomeMessage() {
    if (localStorage.getItem('welcomeMessageShown') === 'true') {
        return; // Don't show the message again
    }  
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString();
  
    // Create a div to hold the message and buttons
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
      <p>Welcome! It's ${timeString} on ${dateString}. Do you like cats or dogs?</p>
      <button id="catButton">Cats</button>
      <button id="dogButton">Dogs</button>
    `;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.backgroundColor = '#282828';
    messageDiv.style.padding = '20px';
    messageDiv.style.border = '1px solid #ccc';
    messageDiv.style.zIndex = '1000'; 
  
    // Add the div to the page
    document.body.appendChild(messageDiv);
  
    // Add event listeners to the buttons
    const catButton = document.getElementById('catButton');
    const dogButton = document.getElementById('dogButton');
  
    catButton.addEventListener('click', () => {
      alert("Meow! I'm a cat person too. 🐱");
      messageDiv.remove(); // Remove the message after the choice
    });
  
    dogButton.addEventListener('click', () => {
      alert("Woof! Dogs are awesome! 🐶");
      messageDiv.remove(); // Remove the message after the choice
    });
    localStorage.setItem('welcomeMessageShown', 'true');
  }

  // Add a button to the page to reset the localStorage item
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Welcome Message';
resetButton.style.position = 'fixed';
resetButton.style.top = '10px'; // Adjust position as needed
resetButton.style.left = '10px'; // Adjust position as needed
resetButton.style.zIndex = '1000'; 
document.body.appendChild(resetButton);

// Add an event listener to the button to clear localStorage
resetButton.addEventListener('click', () => {
  localStorage.removeItem('welcomeMessageShown');
  alert('Welcome message will be shown on the next page load.');
});
  
  window.onload = showWelcomeMessage;