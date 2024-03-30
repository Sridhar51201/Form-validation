// var isValid = true;
// var submitButton = document.getElementById("submitButton");
// submitButton.style.backgroundColor = isValid ? "#4CAF50" : "red";
setinit=true;
// // var isValid=false;
function validateForm() {
    // var isValid = true;
    setinit=false;
  

  var name = document.getElementById("name").value.trim();
  if (name === "" || !/^[A-Za-z ]+$/.test(name)) { 
    document.getElementById("name").nextElementSibling.innerHTML = "Please enter a valid name (letters and spaces only)";
    isValid = false;

  } else {
    document.getElementById("name").nextElementSibling.innerHTML = "";
  }


  var pno = document.getElementById("pno").value.trim();
  if (pno === "" || !/^\d{3}-\d{3}-\d{4}$/.test(pno)) { 
    document.getElementById("pno").nextElementSibling.innerHTML = "Please enter a valid phone number (XXX-XXX-XXXX)";
    isValid = false;
  
  } else {
    document.getElementById("pno").nextElementSibling.innerHTML = "";
  }
  
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailError = document.getElementById("email").nextElementSibling;
    if (!emailRegex.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }

  
    var address = document.getElementById("address").value;
    var addressError = document.getElementById("address").nextElementSibling;
    if (address === "") {
      addressError.innerHTML = "Please enter your address.";
      isValid = false;
    } else {
      addressError.innerHTML = "";
    }
  
    var resume = document.getElementById("resume").value;
    var resumeError = document.getElementById("resume").nextElementSibling;
    if (!validateFile(resume)) {
      isValid = false;
    } else {
      resumeError.innerHTML = "";
    }
  
    


    // document.getElementById("myForm").addEventListener("input", function() {
    //     var submitButton = document.getElementById("submitButton");
    //     // submitButton.disabled = !this.checkValidity();
    //     submitButton.style.backgroundColor =this.checkValidity() ? "#4CAF50" : "red";
    //   });

    // window.location.href = "page2.html"
    if(isValid)window.location.href = "page2.html"
    return isValid;
  
  }
  
  function validateFile(f) {


    // document.getElementById("myForm").addEventListener("input", function() {
    //     var submitButton = document.getElementById("submitButton");
    //     // submitButton.disabled = !this.checkValidity();
    //     submitButton.style.backgroundColor =validateForm() ? "#4CAF50" : "red";
    //   });
    var resumeError = document.getElementById("resume").nextElementSibling;
    resumeError.innerHTML = "";
    var submitButton = document.getElementById("submitButton");
    submitButton.style.backgroundColor = "#4CAF50" ;


    var allowedExtensions = [".pdf", ".docx"];
    var extension = f.substring(f.lastIndexOf("."));
    if (!allowedExtensions.includes(extension)) {
      document.getElementById("resume").nextElementSibling.innerHTML = "Please upload a PDF or Docx resume file.";
      return false;
    }
  
    
    var maxFileSize = 5 * 1024 * 1024; 
    if (f.files[0].size > maxFileSize) {
      document.getElementById("resume").nextElementSibling.innerHTML = "Resume file size cannot exceed 5MB.";
      return false;
    }


    // var resumeError = document.getElementById("resume").nextElementSibling;
    // resumeError.innerHTML = "";
    // var submitButton = document.getElementById("submitButton");
    // submitButton.style.backgroundColor = "#4CAF50" ;
  
    return true;
  }
  
  
  document.getElementById("myForm").addEventListener("input", function() {
    var submitButton = document.getElementById("submitButton");
    // submitButton.disabled = !this.checkValidity();
    if(setinit)subcolor=false;
    else subcolor=validateForm()
    
    submitButton.style.backgroundColor =subcolor ? "#4CAF50" : "red";
  });