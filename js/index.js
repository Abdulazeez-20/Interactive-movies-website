import  Details  from './details.js';
import Home from './home.js';
import Movies from './movies.js';
import Shows from './shows.js';
import Header from './header.js';
import Footer from './footer.js';
import Login from './login.js';
import Register from './register.js';

document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();
document.querySelector(".navbar-burger").addEventListener("click", () => document.querySelector("header").classList.toggle("is-active"));

function renderPage(){
    var currentPage;
    switch (window.location.hash){
        case "#/":
            currentPage = Home();
            break;

        case "#/movies":
            currentPage = Movies();
            break; 

        case "#/shows":
            currentPage = Shows();
            break;

        case "#/details":
            currentPage = Details();
            break;   

        case "#/login":
            currentPage = Login();
            break;

        case "#/register":
            currentPage = Register();
            break;

        default:
            currentPage = "404";
            break;
    }

    if(window.location.hash !== "#/login" && window.location.hash !== "#/register"){
        document.querySelector("body").classList.remove("is-loggedOut");
        document.querySelector("header").innerHTML = Header();
    }else{
        document.querySelector("header").innerHTML = null;
        document.querySelector("footer").innerHTML = null;
        document.querySelector("body").classList.add("is-loggedOut");
    }

    document.querySelector("#root").innerHTML = currentPage;
    return currentPage;
}

window.onhashchange = renderPage;
renderPage();

document.querySelector("#loginForm").addEventListener('submit', function(){
    e.preventDefault();
    const loginObj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
        if(loginObj){
            console.log(loginObj);
        }
});