function validateForm(event) {
  console.log("myForm.name.value");
  event.preventDefault();
  document.getElementById("fnameErr").innerHTML = " ";

  var fname = document.myForm.fname.value;

  if (!fname) {
    document.getElementById("fnameErr").innerHTML = " first name required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      document.getElementById("fnameErr").innerHTML = "Please enter a valid 1st name";
    } else {
      document.getElementById("fnameErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("lnameErr").innerHTML = " ";
  var lname = document.myForm.lname.value;
  if (!lname) {
    document.getElementById("lnameErr").innerHTML = " last name required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      document.getElementById("lnameErr").innerHTML = "Please enter a valid last name";
    } else {
      document.getElementById("lnameErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("aErr").innerHTML = " ";
  var aname = document.myForm.Address.value;
  if (!aname) {
    document.getElementById("aErr").innerHTML = " Address required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(aname) === false) {
      document.getElementById("aErr").innerHTML = "Please enter a valid Address";
    } else {
      document.getElementById("aErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("stErr").innerHTML = " ";

  var stname = document.myForm.st.value;
  if (!stname) {
    document.getElementById("stErr").innerHTML = "Street Address line 2 required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(stname) === false) {
      document.getElementById("stErr").innerHTML = "Please enter a valid Street Address";
    } else {
      document.getElementById("stErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("cityErr").innerHTML = " ";
  var cname = document.myForm.city.value;
  if (!cname) {
    document.getElementById("cityErr").innerHTML = " city name required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(cname) === false) {
      document.getElementById("cityErr").innerHTML = "Please enter a valid Street Address";
    } else {
      document.getElementById("cityErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("spErr").innerHTML = " ";
  var spname = document.myForm.sp.value;
  if (!spname) {
    document.getElementById("spErr").innerHTML = " state/provision name required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(spname) === false) {
      document.getElementById("spErr").innerHTML = "Please enter a valid Street Address";
    } else {
      document.getElementById("spErr").innerHTML = " ";
      nameErr = false;
    }
  }

  document.getElementById("pinErr").innerHTML = " ";
  var pin = document.myForm.pin.value;
  pattern = "[0-9]{3}-[0-9]{3}";
  if (!pin) {
    document.getElementById("pinErr").innerHTML = " pin required";
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(pin) === false) {
      document.getElementById("pinErr").innerHTML = "Please enter a valid 6 digit pin code";
    } else {
      document.getElementById("pinErr").innerHTML = "";
      mobileErr = false;
    }
  }

  document.getElementById("phoneErr").innerHTML = " ";
  var pname = document.myForm.phone.value;

  pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  if (!pname) {
    document.getElementById("phoneErr").innerHTML = "phone number required";
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(pname) === false) {
      document.getElementById("phoneErr").innerHTML = "Please enter a valid 10 digit mobile number";
    } else {
      document.getElementById("phoneErr").innerHTML = "";
      mobileErr = false;
    }
  }

  document.getElementById("mailErr").innerHTML = " ";
  var ename = document.myForm.email.value;

  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$";
  if (!ename) {
    document.getElementById("mailErr").innerHTML = "email required";
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(ename) === false) {
      document.getElementById("mailErr").innerHTML = "Please enter a valid email address";
    } else {
      document.getElementById("mailErr").innerHTML = " ";
      emailErr = false;
    }
  }

  document.getElementById("fbErr").innerHTML = " ";

  var fbname = document.myForm.fb.value;
  if (!fbname) {
    document.getElementById("fbErr").innerHTML = "feedback required";
  }

  document.getElementById("sErr").innerHTML = " ";

  var sname = document.myForm.Suggetion.value;
  if (!sname) {
    document.getElementById("sErr").innerHTML = "Suggetion required";
  }

  document.getElementById("gErr").innerHTML = " ";

  var gname = document.myForm.Gender.value;
  if (!gname) {
    document.getElementById("gErr").innerHTML = "Gender required, Please select your gender";
  } else {
    document.getElementById("gErr").innerHTML = "";
    genderErr = false;
  }
}
