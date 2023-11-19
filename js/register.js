import logo from '../images/logo.svg';

const Register = function render(){
    return `
    <section class = "login">
        <img class= "login-logo" src="${logo}" width="150px'>
            <form id="loginForm" method="POST" action="#/login">

                <span class="form-field">
                    <label for="email">البريد الالكتروني</label>
                    <input required  type="email" id="email" />
                </span>

                
                <span class= "form-field">
                    <label for="password">كلمة السر</label>
                    <input required type="password" id="password"/>
                </span>

                <span class= "form-field">
                    <label for="password">كلمة السر</label>
                    <input required type="password" id="password"/>
                </span>

                <span class= "form-field">
                    <input type="submit" value="انشاء حساب" href="#/login"/>
                    <a href="#/login">تسجيل الدخول</a>
                </span>

            </form>
    </section>`
};
export default Register;
