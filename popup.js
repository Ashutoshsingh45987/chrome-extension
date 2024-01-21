
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get({}, (data) => {
    // Populate UI elements with stored key-value pairs (if needed)
  });

  document.getElementById('save-button').addEventListener('click', () => {
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    if (key && value) {
      chrome.storage.local.set({ [key]: value }, () => {
        // Handle success, you can add any success message or further logic here
        console.log('Key-Value pair saved successfully!');
      });
    } else {
      // Handle empty key or value
      console.error('Key or Value is empty. Please fill in both fields.');
    }
  });
});

  