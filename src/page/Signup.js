import React, { useEffect, useState } from 'react'; //import React Component
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, updateProfile, sendSignInLinkToEmail, isSignInWithEmailLink } from 'firebase/auth';

export function Signup() {
    let timeout = null;
    const [name, setname] = useState("")
    const [email, setemail] = useState(localStorage.getItem("emailForSignIn") ? localStorage.getItem("emailForSignIn") : "")
    const [password, setpassword] = useState("")
    const [password2, setpassword2] = useState("")

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setname(value);
        }
        if (id === "email") {
            setemail(value);
        }
        if (id === "password") {
            setpassword(value);
        }
        if (id === "password2") {
            setpassword2(value);
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

    const actionCodeSettings = {
        url: 'https://git.heroku.com/test-stripe.git/signup', //需要更改
        handleCodeInApp: true,
    };

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let button = document.querySelector(".for_phone span")
            button.style.display = "none"
        }
    })

    const [click, setclick] = useState(false)
    const requestOTP = async (e) => {
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                showSnackbar("验证已发送", timeout)
                setclick(true)
            })
            .catch((error) => {
                console.error(error);
                showSnackbar("请确认邮箱是否正确", timeout)
            });
    };

    let loader = document.querySelector(".loader")
    const makeAuth = () => {
        loader.style.display = "block"
        if (!validateEmail(email)) {
            showSnackbar("请提供正确的邮箱", timeout)
            loader.style.display = "none"
        } else if (password.length < 6) {
            showSnackbar("请提供至少6位密码", timeout)
            loader.style.display = "none"
        } else if (password !== password2) {
            showSnackbar("两次密码不一样", timeout)
            loader.style.display = "none"
        } else if (name.trim().length === 0) {
            showSnackbar("名字不能为空", timeout)
            loader.style.display = "none"
        } else {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                document.getElementById("password2").value = "";
                document.getElementById("name").value = "";
                document.getElementById("age").value = "";
                document.getElementById("gender").value = "";
                let email = localStorage.getItem('emailForSignIn');
                if (!email) {
                    showSnackbar("请提供邮箱", timeout)
                    loader.style.display = "none"
                    return
                }

                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        updateProfile(auth.currentUser, {
                            displayName: name,
                            password: password
                        })
                            .then(() => {
                                showSnackbar("账户创建成功, 2s后返回登录", timeout)
                                loader.style.display = "none"
                                setTimeout(() => {
                                    window.location.href = "/login"
                                }, 2000);
                            })
                    })
                    .catch((error) => {
                        console.error(error);
                        showSnackbar("用户创建失败", timeout)
                        loader.style.display = "none"
                    });
            } else {
                showSnackbar("邮箱验证失败", timeout)
                loader.style.display = "none"
            }
        }
    }

    return (
        <div id="Login">
            <div className='back' onClick={goBack}>&lt; back</div>
            <div style={{ padding: "100px 0" }}>
                {click ?
                    <>
                        <div className="loader2"></div>
                        <div style={{ textAlign: "center" }}>请在邮箱操作</div>
                    </> :
                    <div className="login">
                        <h1 className="login_title" style={{ marginTop: "0" }}>账户注册</h1>
                        <p>请使用邮箱号注册</p>
                        <form style={{ marginTop: "40px" }}>
                            <label htmlFor="email">邮箱号: </label>
                            <div className='for_phone'>
                                <input
                                    type="tel"
                                    id="email"
                                    onChange={(e) => handleInputChange(e)}
                                    value={email}
                                    maxLength="50"
                                />
                                <span className="material-symbols-outlined" onClick={requestOTP}>
                                    发送验证
                                </span>
                            </div>

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

                            <div className='for_password'>
                                <label htmlFor="Password2">确认密码: </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password2"
                                    onChange={(e) => handleInputChange(e)}
                                    value={password2}
                                    maxLength="100"
                                />
                                <span onClick={togglePasswordVisibility} className="material-symbols-outlined">
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </span>
                            </div>

                            <label htmlFor="name">用户姓名: </label>
                            <input
                                type="text"
                                id="name"
                                onChange={(e) => handleInputChange(e)}
                                value={name}
                                maxLength="20"
                            />

                            <label htmlFor="name">年龄: </label>
                            <input
                                type="number"
                                id="age"
                                maxLength="10"
                            />

                            <label htmlFor="name">性别: </label>
                            <input
                                type="text"
                                id="gender"
                                maxLength="10"
                            />
                        </form>
                        <div className="submit" onClick={makeAuth}>提交</div>
                        <div className="loader"></div>
                        <div id="snackbar"></div>
                    </div>
                }
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

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};