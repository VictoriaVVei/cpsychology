import React, { useState } from 'react'; //import React Component
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function Login() {
    let timeout = null;
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setemail(value);
        }
        if (id === "password") {
            setpassword(value);
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    const goBack = () => {
        window.history.back()
        topFunction()
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("user", email)
                showSnackbar("登录成功，2s后返回主页", timeout)
                setTimeout(() => {
                    window.location.href = "/main"
                }, 2000);
            })
            .catch((error) => {
                showSnackbar("请提供正确的邮箱和密码", timeout)
            });
    }

    return (
        <div id="Login">
            <div className='back' onClick={goBack}>&lt; back</div>
            <div style={{ padding: "150px 0" }}>
                <div className="login">
                    <h1 className="login_title" style={{ marginTop: "0" }}>欢迎回来</h1>
                    <p>请使用你的账户登录</p>
                    <form style={{ marginTop: "40px" }}>
                        <label htmlFor="email">邮箱号: </label>
                        <input
                            type="tel"
                            id="email"
                            onChange={(e) => handleInputChange(e)}
                            value={email}
                        />
                        <div className='for_password'>
                            <label htmlFor="password">输入密码: </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                onChange={(e) => handleInputChange(e)}
                                value={password}
                                maxLength="100"
                            />
                            <span onClick={togglePasswordVisibility} className="material-symbols-outlined">
                                {showPassword ? 'visibility' : 'visibility_off'}
                            </span>
                        </div>
                    </form>
                    <div className="submit" onClick={login}>登录</div>
                    <NavLink to={"/signup"}><div className="submit2">注册</div></NavLink>
                    <div id="snackbar"></div>
                </div>
            </div>
        </div>
    );
}

function showSnackbar(message, timeout) {
    let tips = document.getElementById("snackbar");
    tips.innerHTML = message;
    if (timeout) {
        clearTimeout(timeout);
    }
    tips.style.display = "block";
    tips.className = "show";
    timeout = setTimeout(() => {
        tips.className = tips.className.replace("show", "disappear");
    }, 2000);
}
