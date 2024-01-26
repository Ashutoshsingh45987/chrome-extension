chrome.storage.local.get(null, (data) => {
  const inputFields = document.querySelectorAll("input[type='text']");

  inputFields.forEach((field) => {
    let lastValue = "";

    field.addEventListener("input", () => {
      const currentValue = field.value;
      const storedValue = data[currentValue];

      // Highlight if a stored value starts with the current input
      if (storedValue && storedValue.startsWith(currentValue)) {
        field.selectionStart = 0;
        field.selectionEnd = currentValue.length;
      } else {
        field.selectionStart = field.selectionEnd = lastValue.length;
      }

      lastValue = currentValue;
    });

    field.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const currentValue = field.value;
        const storedValue = data[currentValue];

        if (storedValue) {
          field.value = storedValue;
        }
      }
    });
  });
});
