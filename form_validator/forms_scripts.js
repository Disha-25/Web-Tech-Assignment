
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y=document.forms["myForm"]["password"].value;
  if (y.length < 6){
    alert("Your password must be of atleast 6 characters");
    return false;
  }
  else{
    alert("data submitted")
    return true;
  }
}