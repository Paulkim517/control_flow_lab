var userLogin = {'userName':'Peepoo','userPassword':'toilet'};

var name = prompt("Enter your name."," ")
var password = prompt("Enter your password."," ")

if((name===userLogin.userName) && (password===userLogin.userPassword)){
    alert("Welcome, Neo");
}else{
    alert("no");
}