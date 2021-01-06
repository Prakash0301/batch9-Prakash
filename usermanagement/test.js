            var user = {};
            var firstName = document.forms['createform']['firstName']
            var lastName = document.forms['createform']['lastName']
            
            var firstName_error = document.getElementById('firstName_error');
            var lastName_error = document.getElementById('lastName_error');
            
            function validated(){
            if(email.value.length < 9){
               email.style.border = "1px solid red";
               email_error.style.display = "block"
               email.foucs();
               return false;
            }
            if(password.value.length < 9){
            password.style.border = "1px solid red";
            password_error.style.display = "block"
            password.foucs();
            return false;
            }
            return false;
         }
            var usersList = [];   
            var userIdCount = 1;
            function checkPass(){
                var pass  = document.getElementById("password").value;
                var rpass  = document.getElementById("rpassword").value;
               if(pass != rpass){
                   document.getElementById("submit").disabled = true;
                   $('.missmatch').html("Entered Password is not matching!! Try Again");
               }else{
                   $('.missmatch').html("");
                   document.getElementById("submit").disabled = false;
               }
       }
            function createAccount(){
                user = {
                    
                    userId : userIdCount,
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    email: $("#email").val(),
                    password: $("#password").val(),
                    confirmpassword: $('#confirm_password').val(), 
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
            
            function login(){
                var k;
                var isUserLoggedIn = false;
                var loggedInUserDetails;
                if(usersList.length === 0){
                    alert("fill up user details");
                } else {
                    for(k = 0; k < usersList.length; k++) {
                        if(usersList[k].email === $("#loginEmail").val() && usersList[k].password === $("#loginPassword").val()){
                            isUserLoggedIn = true;
                            loggedInUserDetails = usersList[k];
                        }
                    }
                    if(isUserLoggedIn === true){
                        $("#userListTable tbody").html("");
                        $(".pages").addClass('hide');
                        $(".homePage").removeClass('hide');
                        if(loggedInUserDetails.isAdmin){
                            $("#welcomeMessage").text("Welcome Admin " + loggedInUserDetails.firstName + " " + loggedInUserDetails.lastName);
                            for(k = 0; k < usersList.length; k++) {
                                $("#userListTable tbody").append("<tr id='" + usersList[k].userId + "'><td class='firstNameColumn'>" + usersList[k].firstName + "</td><td class='lastNameColumn'>" + usersList[k].lastName + "</td><td class='emailColumn'>"+ usersList[k].email + "</td><td class='ageColumn'>" + usersList[k].age +"</td><td>"+
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
            }
           
            function logout(){
                $(".loginLink").removeClass("hide");
                $(".logoutLink").addClass("hide");
                $(".pages").addClass('hide');
                $(".loginPage").removeClass("hide");
                $("#loginEmail, #loginPassword").val("");
            }
            function deleteUser(thisObj){
                console.log("Before deleted" + usersList);
                var selectedUserElement = $(thisObj).parents("tr").attr("id");
                $("#" + selectedUserElement).remove();
                var index = usersList.findIndex(function(element){
                    return element.userId == parseInt(selectedUserElement);
                })
                if(index !== -1){
                    usersList.splice(index, 1);
                }
                console.log("After deleted" + usersList);
            }
            function openEditUserModal(thisObj){
                $("#editUserModal").modal("show");
                var selectedUserId = $(thisObj).parents("tr").attr("id");
                $(".selectedEditUserId").text(selectedUserId);
                var userDetail = usersList.filter(obj => {
                    return obj.userId == parseInt(selectedUserId)
                });
                if(userDetail.length !== 0){
                    $("#firstNameEdit").val(userDetail[0].firstName);
                    $("#lastNameEdit").val(userDetail[0].lastName);
                    $("#emailEdit").val(userDetail[0].email);
                    $("#ageEdit").val(userDetail[0].age);
                }
            }

            function editUser(){
                var selectedUserId = parseInt($(".selectedEditUserId").text());
                $("tr#" + selectedUserId + " .firstNameColumn").text($("#firstNameEdit").val());
                $("tr#" + selectedUserId + " .lastNameColumn").text($("#lastNameEdit").val());
                $("tr#" + selectedUserId + " .emailColumn").text($("#emailEdit").val());
                $("tr#" + selectedUserId + " .ageColumn").text($("#ageEdit").val());
                var index = usersList.findIndex(function(element){
                    return element.userId == parseInt(selectedUserId);
                })
                if(index !== -1){
                    usersList[index].firstName = $("#firstNameEdit").val();
                    usersList[index].lastName = $("#lastNameEdit").val();
                    usersList[index].email = $("#emailEdit").val();
                    usersList[index].age = $("#ageEdit").val();
                } else{
                    alert("The selected user not found");
                }
                $("#editUserModal").modal("hide");
            }
            $(document).ready(function(){
                $(".createAccountLink").click(function(){
                    $(".pages").addClass('hide');
                    $(".createAccountPage").removeClass("hide");
                    $(".nav li").removeClass("active");
                    $(this).addClass("active");                     
                });
                $(".loginLink").click(function(){
                    $(".pages").addClass('hide');
                    $(".loginPage").removeClass("hide");
                    $(".nav li").removeClass("active");
                    $(this).addClass("active");                     
                });
            })             
            