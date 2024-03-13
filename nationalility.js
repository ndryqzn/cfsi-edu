// Function to handle nationality selection
function handleNationalitySelection() {
  var nationalitySelect = document.getElementById("nationality");
  var otherNationalityInput = document.getElementById("otherNationality");

  // If "Other" is selected, show the text input for other nationality; otherwise, hide it
  otherNationalityInput.style.display = nationalitySelect.value === "Other" ? "inline" : "none";
}

document.getElementById("nationality").addEventListener("change", handleNationalitySelection);