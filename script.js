let localusers =localStorage.getItem("users");
let users = [];
if(localusers){
    users=JSON.parse(localusers);
}

function register(){
   let username = document.getElementById('username').value;
   let email = document.getElementById('useremail').value;
   let password = document.getElementById('userpassword').value;
    

 
    for(let i=0; i<users.length; i++){
        if(users[i].email == email){
            alert("email already exists");
            return;
        }
    }
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(regex.test(password)){
    let userobj={
        username: username,
        email: email,
        password: password,
        
    }
    alert("registration successful");
location.window.pathname = "/Registration_Form/login.html";
    users.push(userobj);
    console.log(users);

    localStorage.setItem("users",JSON.stringify(users));


}else{
   document.getElementById("passworderror").innerText="password should contain atleast one uppercase, lowercase, number and special character and 8 digits";
}
}

function login(){
    let useremail = document.getElementById('useremail').value;
    let userpassword = document.getElementById('userpassword').value;


    let curentUser = null;

     for(let i=0;i<users.length; i++){
        if(users[i].email == useremail){
            curentUser = users[i];
            break;

     }
     }

     if(curentUser){
        if(curentUser.password == userpassword){
            alert("login successful");
            window.location.pathname = "/Registration_Form/dashboard.html";   
        }
     else{
        alert("invalid password");
     }}else{
         alert("Account Not Register with this email")
     }
 
}