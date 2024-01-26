// Function to handle button click and store key-value pair using chrome.storage.local
async function saveKeyValuePair() {
  const keyInput = document.getElementById('key');
  const valueInput = document.getElementById('value');

  if (keyInput && valueInput) {
    const key = keyInput.value;
    const value = valueInput.value;

    if (key && value) {
      // Store the key-value pair using chrome.storage.local
      chrome.storage.local.set({ [key]: value }, () => {
        console.log(`Key-value pair (${key}, ${value}) saved successfully.`);
      });
    } else {
      console.log('Please enter both key and value before saving.');
    }
  }
}

// Function to initialize the popup UI
async function initializePopup() {
  // Optionally, you can perform any initialization steps here

  // Attach event listener to the Save button
  const saveButton = document.getElementById('save-button');
  if (saveButton) {
    saveButton.addEventListener('click', saveKeyValuePair);
  }
}

// Call the initialization function when the popup is loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize the popup
  await initializePopup();
});
