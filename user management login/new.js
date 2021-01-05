function login(){
    debugger;
    console.log("username: " + $("username").val());
    console.log("password: " + $("password").val());
}
function CreateAccount(){
    debugger;

}
function validateForm() {
    var email = document.forms["myForm"]["email"].value;
    if (email == "") {
      alert("Name must be filled email");
      return false;
    }
    var password = document.forms["myForm"]["password"].value;
    if (password == "") {
      alert("Name must be filled password");
      return false;
    }
  }
  var userList = [];
  function validatecreateaccount() {
    var firstname = document.forms["myaccountForm"]["firstname"].value;
    if (firstname == "") {
      alert("Name must be filled firstname");
      return false;
    }
    var lastname = document.forms["myaccountForm"]["lastname"].value;
    if (lastname == "") {
      alert("Name must be filled lastname");
      return false;
    }
    var pwd = document.forms["myaccountForm"]["pwd"].value;
    if (pwd == "") {
      alert("Name must be filled pwd");
      return false;
    }
    var ConfimPassword = document.forms["myaccountForm"]["ConfimPassword"].value;
    if (ConfimPassword == "") {
      alert("Name must be filled ConfimPassword");
      return false;
    }
    var Email = document.forms["myaccountForm"]["Email"].value;
    if (Email == "") {
      alert("Name must be filled Email");
      return false;
    }
    var gender = document.forms["myaccountForm"]["gender"].value;
    if (gender == "") {
      alert("Name must be filled gender");
      return false;
    }
    var age = document.forms["myaccountForm"]["age"].value;
    if (age == "") {
      alert("Name must be filled age");
      return false;
    }
    var FavoriteHero = document.forms["myaccountForm"]["FavoriteHero"].value;
    if (FavoriteHero == "") {
      alert("Name must be filled FavoriteHero");
      return false;
    }
    
var userDetails = {
FirstName:firstname,
LastName:lastname,
Email:Email,
password:pwd,
Confimpassword:ConfimPassword,
Age:age,
Gender:gender,
FavHero:FavoriteHero,
IsAdmin:""
}

userList.push(userDetails);
console.log(userList);
return false;
  }
  
function switchForms(formType){

    if (formType == "login"){
        $("#pagetitle").text("loginform");
        // $("#loginform").removeclass("hide");
        // $("#CreateAccount").addClass("hide");
        $("#loginform").show();
        $("#CreateAccount").hide();
    }
    else{
        $("#pagetitle").text("Create account form");
        // $("#loginform").addclass("hide");
        // $("#CreateAccount").removeClass("hide");
        $("#loginform").hide();
        $("#CreateAccount").show();
    }
// }
// var email = document.forms['myForm']['email']
// var password = document.forms['myForm']['password']

// var email_error = document.getElementById('email_error');
// var password_error = document.getElementById('password_error');

// function validated(){
// if(email.value.length < 9){
//    email.style.border = "1px solid red";
//    email_error.style.display = "block"
//    email.foucs();
//    return false;
// }
// // if(password.value.length < 9){
// //   password.style.border = "1px solid red";
// //   password_error.style.display = "block"
// //   password.foucs();
// //   return false;
// // }
// }