import React, { useState } from 'react'; //import React Component
export function Signup() {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [otp, setotp] = useState("")
    const [password, setpassword] = useState("")
    const [password2, setpassword2] = useState("")

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setname(value);
            if (value.trim().length > 0) {
                document.getElementsByTagName("label")[0].style.color = "#868686"
            }
        }
        if (id === "phone") {
            setphone(value);
            if (value.trim().length >= 10) {
                document.getElementsByTagName("label")[5].style.color = "#868686"
            }
        }
        if (id === "otp") {
            setotp(value);
            if (value.trim().length >= 6) {
                document.getElementsByTagName("label")[6].style.color = "#868686"
            }
        }
        if (id === "password") {
            setpassword(value);
            if (value.trim().length >= 6) {
                document.getElementsByTagName("label")[1].style.color = "#868686"
            }
        }
        if (id === "password2") {
            setpassword2(value);
            if (value.trim().length >= 6) {
                document.getElementsByTagName("label")[2].style.color = "#868686"
            }
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

    return (
        <div id="Login">
            <div className='back' onClick={goBack}>&lt; back</div>
            <div style={{ padding: "150px 0" }}>
                <div className="login">
                    <h1 className="login_title" style={{ marginTop: "0" }}>账户注册</h1>
                    <p>请使用手机号注册</p>
                    <form style={{ marginTop: "50px" }}>
                        <label htmlFor="phone">手机号(仅限美国，不用填写地域号): </label>
                        <br />
                        <div className='for_phone'>
                            <input
                                type="tel"
                                id="phone"
                                onChange={(e) => handleInputChange(e)}
                                value={phone}
                            />
                            <span className="material-symbols-outlined">
                                发送验证
                            </span>
                        </div>
                        <label htmlFor="name">验证码: </label>
                        <input
                            type="number"
                            id="otp"
                            onChange={(e) => handleInputChange(e)}
                            value={otp}
                        />
                        <br />
                        <div className='for_password'>
                            <label htmlFor="password">输入密码: </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                onChange={(e) => handleInputChange(e)}
                                value={password}
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
                            />
                            <span onClick={togglePasswordVisibility} className="material-symbols-outlined">
                                {showPassword ? 'visibility' : 'visibility_off'}
                            </span>
                        </div>
                        <label htmlFor="name">用户姓名: </label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => handleInputChange(e)}
                            value={name}
                        />
                        <br />
                        <label htmlFor="name">年龄: </label>
                        <br />
                        <input
                            type="text"
                            id="name"
                        />
                        <br />
                        <label htmlFor="name">性别: </label>
                        <br />
                        <input
                            type="text"
                            id="name"
                        />
                    </form>
                    <div className="submit">提交</div>
                    <div id="snackbar"></div>
                </div>
            </div>
        </div>
    );
}