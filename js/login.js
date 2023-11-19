import logo from "../images/logo.svg";

const Login = function render(){
    return `
    <section class = "login">
        <img class= "login-logo" src="${logo}" width="150px'>
            <form id="loginForm" method="POST" action="/#">   
                <span class="form-field">
                    <label for="email">البريد الالكتروني</label>
                    <input  type="email" id="email" required />
                </span>

                <span class= "form-field">
                    <label for="password">الرمز السري</label>
                    <input type="password" id="password" required />
                </span>

                <span class= "form-field">
                    <input type="submit" value="تسجيل الدخول"/>
                    <a href="#/register">انشاء حساب</a>
                </span>
            </form>
    </section>`
};
export default Login;
