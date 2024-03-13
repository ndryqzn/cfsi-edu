function reviewInformation() {
  var reviewModal = document.getElementById("reviewModal");
  var reviewInformation = document.getElementById("reviewInformation");

  // Clear previous content
  reviewInformation.innerHTML = "";

  // Personal Information
  reviewInformation.innerHTML += "<h3 style= 'font-size: 25px'>PERSONAL INFORMATION</h3>";

  // Picture
  var picture = document.getElementById("picture");
  if (picture.files.length > 0) {
      var pictureUrl = URL.createObjectURL(picture.files[0]);
      reviewInformation.innerHTML += "<p><strong></strong><br><img src='" + pictureUrl + "' alt='Uploaded Picture' style='width: 200px; height: 200px;'></p>";
  }

  // Email Address
  var email = document.getElementById("email");
  reviewInformation.innerHTML += "<p><strong>EMAIL ADDRESS:</strong> " + email.value + "</p>";

  //Name
  var surname = document.getElementById("surname");
  reviewInformation.innerHTML += "<p><strong>SURNAME:</strong> " + surname.value + "</p>";

  var firstName = document.getElementById("first-name");
  reviewInformation.innerHTML += "<p><strong>FIRST NAME:</strong> " + firstName.value + "</p>";

  var middleName = document.getElementById("middle-name");
  reviewInformation.innerHTML += "<p><strong>MIDDLE NAME:</strong> " + middleName.value + "</p>";

  var suffix = document.getElementById("suffix");
  if (suffix.value.trim() !== "") {
      reviewInformation.innerHTML += "<p><strong>SUFFIX:</strong> " + suffix.value + "</p>";
  } else {
      reviewInformation.innerHTML += "<p><strong>SUFFIX:</strong> -</p>";
  }

  var religion = document.getElementById("religion");
  reviewInformation.innerHTML += "<p><strong>RELIGION:</strong> " + religion.value + "</p>";

  var nationality = document.getElementById("nationality");
  var otherNationality = document.getElementById("otherNationality");
  if(nationality.value.trim() === "Filipino"){
    reviewInformation.innerHTML += "<p><strong>NATIONALITY:</strong> " + nationality.value + "</p>";
  }else{
    reviewInformation.innerHTML += "<p><strong>NATIONALITY:</strong> " + otherNationality.value + "</p>";
  }
 
  
  var age = document.getElementById("age");
  if (parseInt(age.value) > 0) {
      reviewInformation.innerHTML += "<p><strong>AGE:</strong> " + age.value + "</p>";
  } else {
      reviewInformation.innerHTML += "<p><strong>AGE:</strong><span style='color: red;'> You entered an invalid age. Please edit your form.</span></p>";
  }

  var birthday = document.getElementById("date-of-birth");
  reviewInformation.innerHTML += "<p><strong>DATE OF BIRTH:</strong> " + birthday.value + "</p>";

  var sex = document.getElementById("sex");
  reviewInformation.innerHTML += "<p><strong>SEX:</strong> " + sex.value + "</p>";

  var placeOfBirth = document.getElementById("place-of-birth");
  reviewInformation.innerHTML += "<p><strong>PLACE OF BIRTH:</strong> " + placeOfBirth.value + "</p>";

  var studentContact = document.getElementById("contact-number");
  reviewInformation.innerHTML += "<p><strong>CONTACT NUMBER:</strong> " + studentContact.value + "</p>";
  
  var address = document.getElementById("address");
  reviewInformation.innerHTML += "<p><strong>ADRESS:</strong> " + address.value + "<br></p>";


  // Educational Background
  reviewInformation.innerHTML += "<h3 style= 'font-size: 25px'>EDUCATIONAL BACKGROUND</h3>";

  // LRN Section
  var lrn = document.getElementById("lrn");
  reviewInformation.innerHTML += "<p><strong>LEARNER'S REFERENCE NUMBER (LRN):</strong> " + lrn.value + "</p>";
  
  var highSchoolName = document.getElementById("high-school");
  reviewInformation.innerHTML += "<p><strong>NAME OF SCHOOL LAST ATTENDED:</strong> " + highSchoolName.value + "</p>";

  var highSchoolAdd = document.getElementById("school-address");
  reviewInformation.innerHTML += "<p><strong>SCHOOL'S ADDRESS:</strong> " + highSchoolAdd.value + "</p>";


  var gradeLevelCompleted = document.getElementById("grade-level-completed");
  reviewInformation.innerHTML += "<p><strong>GRADE LEVEL COMPLETED:</strong> " + gradeLevelCompleted.value + "</p>";

  var classAdviser = document.getElementById("class-adviser");
  reviewInformation.innerHTML += "<p><strong>GRADE 10 CLASS ADIVSER:</strong> " + classAdviser.value + "</p>";

  var section = document.getElementById("section");
  reviewInformation.innerHTML += "<p><strong>SECTION:</strong> " + section.value + "</p>";

// Credentials
var credentials = document.querySelectorAll(".credentials input[type='checkbox']:not(#allCredentials)");
var checkedCredentials = [];
credentials.forEach(function(credential) {
  if (credential.checked) {
    checkedCredentials.push(credential.nextElementSibling.textContent);
  }
});
reviewInformation.innerHTML += "<p><strong>CREDENTIALS TO BE SUBMITTED:</strong> " + checkedCredentials.join(", ") + "</p>";



  //Senior High School
  reviewInformation.innerHTML += "<h4 style= 'font-size: 20px'>SENIOR HIGH SCHOOL</h4>";

  var shsCampus = document.getElementById("shs-campus");
  reviewInformation.innerHTML += "<p><strong>CHILDREN OF FATIMA SCHOOL INC. CAMPUS:</strong> " + shsCampus.value + "</p>";

  var strands = document.getElementById("strands");
  reviewInformation.innerHTML += "<p><strong>STRAND/TRACK:</strong> " + strands.value + "</p>";


  // Educational Background
  reviewInformation.innerHTML += "<h3 style= 'font-size: 25px'>FAMILY INFORMATION</h3>";

  //Mother
  reviewInformation.innerHTML += "<h4 style= 'font-size: 20px'>MOTHER'S MAIDEN NAME</h4>";
  var motherName = document.getElementById("mother-name");
  reviewInformation.innerHTML += "<p><strong>FULL NAME:</strong> " + motherName.value + "</p>";

  var motherOccupation = document.getElementById("mother-occupation");
  reviewInformation.innerHTML += "<p><strong>OCCUPATION:</strong> " + motherOccupation.value + "</p>";



  //Father
  reviewInformation.innerHTML += "<h4 style= 'font-size: 20px'>FATHER'S NAME</h4>";

  var fatherName = document.getElementById("father-name");
  reviewInformation.innerHTML += "<p><strong>FULL NAME:</strong> " + fatherName.value + "</p>";

  var fatherOccupation = document.getElementById("father-occupation");
  reviewInformation.innerHTML += "<p><strong>OCCUPATION:</strong> " + fatherOccupation.value + "</p>";


  
  //Guardian
  reviewInformation.innerHTML += "<h4 style= 'font-size: 20px'>GUARDIAN</h4>";

  var guardianName = document.getElementById("guardian-name");
  reviewInformation.innerHTML += "<p><strong>FULL NAME:</strong> " + guardianName.value + "</p>";

  var guardianOccupation = document.getElementById("guardian-occupation");
  reviewInformation.innerHTML += "<p><strong>OCCUPATION:</strong> " + guardianOccupation.value + "</p>";

  /*var guardianContact = document.getElementById("guardian-contact-number");
  reviewInformation.innerHTML += "<p><strong>CONTACT:</strong> " + guardianContact.value + "</p>";*/


   // Update signature data before checking
   updateSignatureData();

   // Picture or Signature
  var signatureData = document.getElementById("signatureData").value;
  var signaturePicture = document.getElementById("signatureUpload");
  if (signatureData) {
      // Display the signature data if available
      reviewInformation.innerHTML += "<p><strong>Signature:</strong><br><img src='" + signatureData + "' alt='Uploaded Signature'></p>";
  } else if (signaturePicture.files.length > 0) {
      // Display the uploaded signature picture if available
      var pictureUrl = URL.createObjectURL(signaturePicture.files[0]);
      reviewInformation.innerHTML += "<p><strong>Signature:</strong><br><img src='" + pictureUrl + "' alt='Uploaded Signature'></p>";
  } else {
      // If neither signature data nor picture uploaded
      reviewInformation.innerHTML += "<p>No signature or picture uploaded.</p>";
  }



  // Display the modal
  reviewModal.style.display = "block";
}

function closeReviewModal() {
  var reviewModal = document.getElementById("reviewModal");
  reviewModal.style.display = "none";
}

function editForm() {
  var reviewModal = document.getElementById("reviewModal");
  reviewModal.style.display = "none";
}

/*function submitForm() {
  var form = document.getElementById("admissionForm");
  form.submit();
}*/


function validateForm() {
    var form = document.querySelector('form');
    if (form.checkValidity()) {
        // If the form is valid, proceed to review information
        reviewInformation();
    } else {
        // If the form is not valid, it will highlight the unfilled/invalid fields
        form.reportValidity();
    }
}


//Confirmation
function openModal() {

    var termsCheckbox = document.getElementById("termsCheckbox");
    var termsError = document.getElementById("termsError");

    if (!termsCheckbox.checked) {
        termsError.textContent = "Please agree to the terms and conditions.";
        return; // Prevent further execution
    }

    // Reset error message if checkbox is checked
    termsError.textContent = "";
    
    document.getElementById('confirmationModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
    window.history.back();
    window.close();
  }
  




  function updateParentGuardianOptions() {
    var parentGuardianSelect = document.getElementById("parentGuardian");
    var motherName = document.getElementById("mother-name").value;
    var motherMiddleName = document.getElementById("mother-middle-name").value;
    var motherSurname = document.getElementById("mother-surname").value;

    // Clear previous options
    parentGuardianSelect.innerHTML = "";

    // Add options based on user input
    if (motherName && motherMiddleName && motherSurname) {
        var motherOption = document.createElement("option");
        motherOption.value = motherName + " " + motherMiddleName + " " + motherSurname;
        motherOption.text = "Mother";
        parentGuardianSelect.add(motherOption);
    }

    // Add other options
    var fatherOption = document.createElement("option");
    fatherOption.value = "father";
    fatherOption.text = "Father";
    parentGuardianSelect.add(fatherOption);

    var guardianOption = document.createElement("option");
    guardianOption.value = "guardian";
    guardianOption.text = "Guardian";
    parentGuardianSelect.add(guardianOption);
}

