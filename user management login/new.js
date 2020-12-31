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
}