let username = " ";
let password = " ";

function login(){
    if (username.trim() == "" && password.trim() == ""){
        return true;
    }
    else{
        return false;
    }
}

console.log(login());