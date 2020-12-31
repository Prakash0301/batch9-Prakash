function login(){
    debugger;
    console.log("username: " + $("username").val());
    console.log("password: " + $("password").val());
}
function CreateAccount(){
    debugger;

}
function validateForm() {
    var x = document.forms["form-group"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
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