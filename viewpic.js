function showPicture() {
  var previewBox = document.getElementById("previewBox");
  var input = document.getElementById("picture");

  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          previewBox.style.backgroundImage = "url('" + e.target.result + "')";
          previewBox.style.backgroundSize = "cover";
          setPreviewHeight(); // Call the function to set the height
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function hidePicture() {
  var previewBox = document.getElementById("previewBox");
  previewBox.style.backgroundImage = "none";
  previewBox.style.height = "0";
  previewBox.style.width = "0";
}

// Function to dynamically set the height of the previewBox
function setPreviewHeight() {
  var previewBox = document.getElementById("previewBox");
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Adjust the height based on the screen width
  if (screenWidth <= 600) {
      previewBox.style.height = "200px";
      previewBox.style.width = "200px"; // Adjust this value as needed
  } else {
      previewBox.style.height = "600px";
      previewBox.style.width = "600px"; // Default height for larger screens
  }
}

// Attach an event listener to window resize event to update the previewBox height
window.addEventListener("resize", setPreviewHeight);