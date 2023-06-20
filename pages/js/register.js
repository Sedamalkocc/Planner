
   
   function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 


    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    const button = document.getElementById("calendarrBtn");

button.addEventListener("click", () => {
  window.location.href = "Calendar.html"; // Yeni sayfanın URL'si
});

var users = []; 

function SingIn() {
    const button = document.getElementById("SignIn");

    button.addEventListener("click", () => {
    var usernameOrEmail = document.querySelector("#login .input-box:nth-child(1) input").value;
    var password = document.querySelector("#login .input-box:nth-child(2) input").value;

    var userFound = false;

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if ((user.usernameOrEmail === usernameOrEmail || user.email === usernameOrEmail) && user.password === password) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        window.location.href = "Calendar.html";
    } else {
        window.alert("Kullanıcı adı veya şifre hatalı");
    }
    window.location.href = "Calendar.html"; // Yeni sayfanın URL'si      
});

}
    
function SingUp() {
    const button = document.getElementById("SingUp");

    button.addEventListener("click", () => {
        var firstname = document.querySelector("#register .two-forms .input-box:nth-child(1) input").value;
        var lastname = document.querySelector("#register .two-forms .input-box:nth-child(2) input").value;
        var email = document.querySelector("#register .input-box:nth-child(3) input").value;
        var address = document.querySelector("#register .input-box:nth-child(4) input").value;
        var identificationNo = document.querySelector("#register .input-box:nth-child(5) input").value;
        var phoneNumber = document.querySelector("#register .input-box:nth-child(6) input").value;
        var userType = document.querySelector("#register .input-box:nth-child(7) input").value;
        var password = document.querySelector("#register .input-box:nth-child(8) input").value;
    
        var newUsers = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            identificationNo: identificationNo,
            phoneNumber: phoneNumber,
            userType: userType,
            password: password
        };
    
        users.push(newUser);
    
        console.log("Kayıt başarılı. Kullanıcı bilgileri:", newUser);
    
    });
    window.location.href = "Calendar.html"; // Yeni sayfanın URL'si
}


