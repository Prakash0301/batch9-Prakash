var user = {};
var usersList = [];   
var userIdCount = 1;
function CreateAccount(){
  //Do all the required Validations
  user = {
   userId : userIdCount,
   firstName: $("#firstName").val(),
   lastName: $("#lastName").val(),
   email: $("#email").val(),
   password: $("#password").val(),
   age : $("#age").val(),
   game: [],
   isAdmin : $("#admin:checked").length === 1 ? true : false
}
      $(".game:checked").each(function(){
        user.game.push($(this).val());
      });
      usersList.push(user);
      userIdCount++;
      console.log(usersList);

}
function  LoginForm{
                var i;
                var isUserLoggedIn = false;
                var loggedInUserDetails;
                if(usersList.length === 0){
                    alert("The user not exist");
                } else {
                    for(i = 0; i < usersList.length; i++) {
                        if(usersList[i].email === $("#loginEmail").val() && usersList[i].password === $("#loginPassword").val()){
                            isUserLoggedIn = true;
                            loggedInUserDetails = usersList[i];
                        }
                    }
                    if(isUserLoggedIn === true){
                        $("#userListTable tbody").html(""); //Remove the existing content in the element
                        $(".pages").addClass('hide');
                        $(".homePage").removeClass('hide');
                        //console.log("selected user details object" + loggedInUserDetails);
                        if(loggedInUserDetails.isAdmin){
                            $("#welcomeMessage").text("Welcome Admin " + loggedInUserDetails.firstName + " " + loggedInUserDetails.lastName);
                            for(i = 0; i < usersList.length; i++) {
                                $("#userListTable tbody").append("<tr id='" + usersList[i].userId + "'><td class='firstNameColumn'>" + usersList[i].firstName + "</td><td class='lastNameColumn'>" + usersList[i].lastName + "</td><td class='emailColumn'>"+ usersList[i].email + "</td><td class='ageColumn'>" + usersList[i].age +"</td><td>"+
                                "<a href='javascript:void(0)' onclick='openEditUserModal(this)'>Edit</a>   <a href='javascript:void(0)' onclick='deleteUser(this)'>Delete</a></td></tr>");
                            }
                        } else {
                            $("#userListTable tbody").append("<tr><td>" + loggedInUserDetails.firstName + "</td><td>" + loggedInUserDetails.lastName + "</td><td>" + loggedInUserDetails.email + "</td><td>" + loggedInUserDetails.age + "</td><td></td></tr>");
                            $("#welcomeMessage").text("Welcome " + loggedInUserDetails.firstName + " " + loggedInUserDetails.lastName);
                        }
                        $(".logoutLink").removeClass("hide");
                        $(".loginLink").addClass("hide");
                    } else {
                        alert("Please enter the valid credentials");
                    }
                }
    debugger;
    console.log("username: " + $("username").val());
    console.log("password: " + $("password").val());
}

function validateloginForm() {
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
  }
  
function switchForms(formType){

    if (formType == "login"){
        $("#pagetitle").text("loginform");
        $("#loginform").removeclass("hide");
        $("#CreateAccount").addClass("hide");
        $("#loginform").show();
        $("#CreateAccount").hide();
    }
    else{
        $("#pagetitle").text("Create account form");
        $("#loginform").addclass("hide");
        $("#CreateAccount").removeClass("hide");
        $("#loginform").hide();
        $("#CreateAccount").show();
    }
   }