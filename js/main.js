var userNameUp = document.getElementById("name"),
   userNameRe = document.getElementById("reName"),
   userEmailUp = document.getElementById("mail"),
   userEmailIn = document.getElementById("signInEmail"),
   userEmailRe = document.getElementById("reEmail"),
   userPasswordUp = document.getElementById("pass"),
   userPasswordIn = document.getElementById("signInPassword"),
   userPasswordRe = document.getElementById("rePassword"),
   signUp = document.getElementById("signUp"),
   showPasswordUp = document.getElementById("show"),
   showPasswordIn = document.getElementById("showIn"),
   showPasswordRe = document.getElementById("showRe"),
   close = document.getElementById("closeModal"),
   passInfo = document.getElementById("morePassInfo"),
   login = document.getElementById("login"),
   save = document.getElementById("save"),
   index = document.getElementById("index"),
   index2 = document.getElementById("index2"),
   index3 = document.getElementById("index3"),
   index4 = document.getElementById("index4"),
   homeName,
   mailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
   nameValidation = /^[A-z]{1,30}$/,
   passValiadtion = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

var users = [];
var userInfo;

if (JSON.parse(localStorage.getItem("userInfo")) != null) {
   users = JSON.parse(localStorage.getItem("userInfo"));
}
if (index != null) {
   signUp.addEventListener("click", function (e) {
      if (users.length == 0) {
         pushEmails();
      }
      //*
      else if (emialExist() == true) {
         userEmailUp.nextElementSibling.classList.remove("d-none");
      }
      //*
      else {
         pushEmails();
      }
   });

   showPasswordUp.addEventListener("click", function (e) {
      if (userPasswordUp.type === "password") {
         userPasswordUp.setAttribute("type", "text");
      } else if (userPasswordUp.type === "text") {
         userPasswordUp.setAttribute("type", "password");
      }
   });
   close.addEventListener("click", function (e) {
      document.querySelector(".pass-info").classList.add("d-none");
   });
   function pushEmails() {
      if (
         nameValidation.test(userNameUp.value) == true &&
         mailValidation.test(userEmailUp.value) == true &&
         passValiadtion.test(userPasswordUp.value) == true
      ) {
         userInfo = {
            userName: userNameUp.value,
            userEmial: userEmailUp.value,
            userpass: userPasswordUp.value,
         };
         users.push(userInfo);
         localStorage.setItem("userInfo", JSON.stringify(users));

         document.querySelector(".succes").classList.remove("d-none");
         document.querySelector(".pass-info").classList.add("d-none");
         document.querySelector(".fill").classList.add("d-none");
         document.querySelector(".name").classList.add("d-none");
         document.querySelector(".mail").classList.add("d-none");
         document.querySelector(".pass").classList.add("d-none");
         userEmailUp.nextElementSibling.classList.add("d-none");

         clearForm();
      }
      //*
      else if (
         userNameUp.value == "" ||
         userEmailUp.value == "" ||
         userPasswordUp.value == ""
      ) {
         document.querySelector(".fill").classList.remove("d-none");
      }
      //*
      else if (nameValidation.test(userNameUp.value) == false) {
         document.querySelector(".name").classList.remove("d-none");
         document.querySelector(".fill").classList.add("d-none");
         document.querySelector(".mail").classList.add("d-none");
         document.querySelector(".pass").classList.add("d-none");
      }
      //*
      else if (mailValidation.test(userEmailUp.value) == false) {
         document.querySelector(".mail").classList.remove("d-none");
         document.querySelector(".name").classList.add("d-none");
         document.querySelector(".pass").classList.add("d-none");
         document.querySelector(".fill").classList.add("d-none");
      }
      //*
      else if (passValiadtion.test(userPasswordUp.value) == false) {
         document.querySelector(".pass").classList.remove("d-none");
         document.querySelector(".fill").classList.add("d-none");
         document.querySelector(".name").classList.add("d-none");
         document.querySelector(".mail").classList.add("d-none");
      }
   }
   function clearForm() {
      userEmailUp.value = "";
      userPasswordUp.value = "";
      userNameUp.value = "";
   }
   function emialExist() {
      for (i = 0; i < users.length; i++) {
         if (users[i].userEmial == userEmailUp.value) {
            console.log("hello");
            return true;
         }
      }
   }
   passInfo.addEventListener("click", function (e) {
      document.querySelector(".pass-info").classList.remove("d-none");
   });
}

if (index2 != null) {
   function emialExist() {
      for (i = 0; i < users.length; i++) {
         if (
            users[i].userEmial == userEmailIn.value &&
            users[i].userpass == userPasswordIn.value
         ) {
            console.log("hello");
            document.getElementById("log").setAttribute("href", "home.html");
            userPasswordIn.nextElementSibling.classList.add("d-none");
            homeName = users[i].userName
         }
         //*
         else if (userEmailIn.value == "" && userPasswordIn.value == "") {
            document.querySelector(".fill").classList.remove("d-none");
            userPasswordIn.nextElementSibling.classList.add("d-none");
         }
         //*
         else {
            userPasswordIn.nextElementSibling.classList.remove("d-none");
            document.querySelector(".fill").classList.add("d-none");
         }
      }
   }
   showPasswordIn.addEventListener("click", function (e) {
      if (userPasswordIn.type === "password") {
         userPasswordIn.setAttribute("type", "text");
      } else if (userPasswordIn.type === "text") {
         userPasswordIn.setAttribute("type", "password");
      }
   });

   login.addEventListener("click", function (e) {
      if (users.length == 0) {
         if (userEmailIn.value == "" && userPasswordIn.value == "") {
            document.querySelector(".fill").classList.remove("d-none");
            userPasswordIn.nextElementSibling.classList.add("d-none");
         }
         //*
         else if (userEmailIn.value != "" && userPasswordIn.value != "") {
            document.querySelector(".fill").classList.add("d-none");
            userPasswordIn.nextElementSibling.classList.remove("d-none");
         }
      }
      //*
      else {
         emialExist();
      }
   });
}

if (index3 != null) {
   function repass() {
      for (i = 0; i < users.length; i++) {
         var userInfo = {
            userName: userNameRe.value,
            userEmial: userEmailRe.value,
            userpass: userPasswordRe.value,
         };
         if (
            users[i].userEmial == userEmailRe.value &&
            users[i].userName == userNameRe.value &&
            passValiadtion.test(userPasswordRe.value) == true
         ) {
            console.log("hello");
            users.splice(i, 1, userInfo);
            localStorage.setItem("userInfo", JSON.stringify(users));

            document.getElementById("saved").classList.remove("d-none");
            document.getElementById("incorrect").classList.add("d-none");
            document.querySelector(".fill").classList.add("d-none");
            userEmailRe.nextElementSibling.classList.add("d-none");
            console.log(users[i]);

            clearForm();
         }
         //*
         else if (userEmailRe.value == "" || userNameRe.value == "") {
            document.getElementById("saved").classList.add("d-none");
            document.getElementById("incorrect").classList.add("d-none");
            document.querySelector(".fill").classList.remove("d-none");
            userEmailRe.nextElementSibling.classList.add("d-none");
         }
         //*
         else if (
            users[i].userEmial != userEmailRe.value ||
            users[i].userName != userNameRe.value
         ) {
            document.getElementById("saved").classList.add("d-none");
            document.getElementById("incorrect").classList.add("d-none");
            document.querySelector(".fill").classList.add("d-none");
            userEmailRe.nextElementSibling.classList.remove("d-none");
         }
         //*
         else if (passValiadtion.test(userPasswordRe.value) == false) {
            document.getElementById("saved").classList.add("d-none");
            document.getElementById("incorrect").classList.remove("d-none");
            document.querySelector(".fill").classList.add("d-none");
            userEmailRe.nextElementSibling.classList.add("d-none");
         }
      }
   }
   save.addEventListener("click", function (e) {
      if (users.length == 0) {
         if (userEmailRe.value != "" && userNameRe.value != "") {
            document.getElementById("saved").classList.add("d-none");
            document.getElementById("incorrect").classList.add("d-none");
            document.querySelector(".fill").classList.add("d-none");
            userEmailRe.nextElementSibling.classList.remove("d-none");
         }
         //*
         else if (userEmailRe.value == "" && userNameRe.value == "") {
            document.getElementById("saved").classList.add("d-none");
            document.getElementById("incorrect").classList.add("d-none");
            document.querySelector(".fill").classList.remove("d-none");
            userEmailRe.nextElementSibling.classList.add("d-none");
         }
      }
      //*
      else {
         repass();
      }
   });

   showPasswordRe.addEventListener("click", function (e) {
      if (userPasswordRe.type === "password") {
         userPasswordRe.setAttribute("type", "text");
      } else if (userPasswordRe.type === "text") {
         userPasswordRe.setAttribute("type", "password");
      }
   });
   function clearForm() {
      userPasswordRe.value = "";
   }
}

if(index4 != null){
   document.getElementById('welcome').innerHTML=('Welcome ' + users[0].userName)
}