function validateForm(event) {
  console.log("insertForm.name.value");
  event.preventDefault();
  document.getElementById("fnameErr").innerHTML = " ";

  var fname = document.myForm.fname.value;

  if (!fname) {
    document.getElementById("fnameErr").innerHTML = " first name required";
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      printError("fnameErr", "Please enter a valid name");
    } else {
      printError("fnameErr", "");
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
      printError("lnameErr", "Please enter a valid name");
    } else {
      printError("lnameErr", "");
      nameErr = false;
    }
  }

  document.getElementById("aErr").innerHTML = " ";
  var aname = document.myForm.Address.value;
  if (!aname) {
    document.getElementById("aErr").innerHTML = " Address required";
  }

  document.getElementById("stErr").innerHTML = " ";

  var stname = document.myForm.st.value;
  if (!stname) {
    document.getElementById("stErr").innerHTML = "Street Address line 2 required";
  }

  document.getElementById("cityErr").innerHTML = " ";
  var cname = document.myForm.city.value;
  if (!cname) {
    document.getElementById("cityErr").innerHTML = " city name required";
  }

  document.getElementById("spErr").innerHTML = " ";
  var spname = document.myForm.sp.value;
  if (!spname) {
    document.getElementById("spErr").innerHTML = " state/provision name required";
  }

  document.getElementById("pinErr").innerHTML = " ";
  var pin = document.myForm.pin.value;
  if (!pin) {
    document.getElementById("pinErr").innerHTML = " pin required";
  }

  document.getElementById("phoneErr").innerHTML = " ";
  var pname = document.myForm.phone.value;
  placeholder = "(000) 000-0000";
  pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  if (!pname) {
    document.getElementById("phoneErr").innerHTML = "phone number required";
  }

  document.getElementById("mailErr").innerHTML = " ";
  var ename = document.myForm.email.value;
  if (!ename) {
    document.getElementById("mailErr").innerHTML = "email required";
  }

  document.getElementById("fbErr").innerHTML = " ";

  var fbname = document.myForm.fb.value;
  if (!fbname) {
    document.getElementById("fbErr").innerHTML = "feedback required";
  }

  document.getElementById("SuggetionErr").innerHTML = " ";
  var Sug = document.myForm.Suggetion.value;
  if (!Sug) {
    document.getElementById("SuggetionErr").innerHTML = "Suggetion required";
  }
}
