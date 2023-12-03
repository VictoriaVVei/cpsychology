import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function Navigation({ onLanguageChange }) {
    let user = localStorage.getItem("user")
    const [language, setLanguage] = useState("Chinese");
    const changeL = () => {
        const newLanguage = language === "Chinese" ? "English" : "Chinese";
        setLanguage(newLanguage);
        if (onLanguageChange) {
            onLanguageChange(newLanguage);
        }
    }

    return (
        <div id='Navigation'>
            <div className="logo">Logo</div>
            {user === null ?
                <>
                    {language === "English" ?
                        <>
                            <div className="sign">
                                <NavLink to="/login"><div>Login</div></NavLink>
                                <NavLink to="/signup"><div>Register</div></NavLink>
                            </div>
                        </> :
                        <div className="sign">
                            <NavLink to="/login"><div>登录</div></NavLink>
                            <NavLink to="/signup"><div>注册</div></NavLink>
                        </div>
                    }


                </> : null
            }

            {language === "English" ?
                <>
                    <div className="menu">
                        <a href="/main#p1"><div>Home</div></a>
                        <a href="/main#p2"><div>Psychological space</div></a>
                        <a href="/main#p3"><div>Personal case</div></a>
                    </div>
                </> :
                <div className="menu">
                    <a href="/main#p1"><div>首页</div></a>
                    <a href="/main#p2"><div>心理空间</div></a>
                    <a href="/main#p3"><div>个人案例</div></a>
                </div>
            }

            <div className="language">
                {language === "English" ?
                    <>
                        <svg onClick={changeL} t="1701414558422" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5082" width="35" height="30">
                            <path d="M579.584 478.208h-9.728l37.376 207.872c24.576-8.704 47.104-22.016 67.072-39.424-20.48-24.576-36.864-52.224-49.664-81.408l39.424-5.12c10.752 22.016 23.04 41.984 37.376 58.88 29.184-35.328 51.2-82.432 67.072-141.312l-188.928 0.512z m148.992 168.448c22.528 19.456 48.128 33.792 76.8 42.496l17.92 5.632-10.752 38.4-17.92-5.632c-34.304-10.752-66.048-28.672-93.184-52.736-25.088 22.528-54.784 39.936-87.04 50.688l25.088 140.288H489.984l-19.968 91.648H939.52c22.016 0 39.936-17.92 39.936-39.936V238.592c0-22.016-17.92-39.936-39.936-39.936H520.192l31.232 174.08-1.024-0.512 3.584 18.944 0.512-2.56 8.704 49.664h96.768v-39.936h74.752v39.936h124.928v39.936h-52.224c-17.408 70.144-44.032 126.464-78.848 168.448zM449.024 865.28H84.992c-44.032 0-79.872-35.84-79.872-79.872v-678.4c0-44.544 35.84-79.872 79.872-79.872h399.36l24.576 131.584h430.08c44.032 0 79.872 35.84 79.872 79.872v678.912c0 44.032-35.84 79.872-79.872 79.872H420.352l28.672-132.096z m-188.416-307.2v-41.984H181.76v-61.952h73.216v-41.472H181.76v-52.736h78.848v-41.472H135.68V558.08h124.928z m192.512 0V438.272c0-21.504-5.12-38.4-14.848-50.176-9.728-11.776-24.576-17.408-44.032-17.408-11.264 0-21.504 2.048-30.208 6.656s-15.872 11.776-20.48 20.48h-2.56l-6.144-23.552h-34.816V558.08h45.056v-86.528c0-21.504 3.072-36.864 8.704-46.592 5.632-9.216 14.848-13.824 27.648-13.824 9.216 0 15.872 3.072 20.48 9.728 4.096 6.656 6.656 16.384 6.656 29.696v107.52h44.544z" p-id="5083"></path>
                        </svg>
                    </> :
                    <svg onClick={changeL} t="1701414566919" className="icon" viewBox="0 0 1070 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5236" width="35" height="30">
                        <path d="M232.582 358.133c12.288 36.33 32.59 67.851 60.905 95.633 24.042-26.18 42.207-58.235 53.96-95.633H232.583z" p-id="5237"></path>
                        <path d="M981.615 143.36H532.836L507.192 6.055H90.468C44.522 6.055 7.123 43.453 7.123 89.4v708.43c0 45.946 37.399 83.344 83.345 83.344h379.86l-30.453 137.305h541.74c45.947 0 83.345-37.398 83.345-83.344v-708.43c0-45.947-37.398-83.345-83.345-83.345zM415.833 564.358c-49.152-18.165-89.756-41.139-122.346-67.852-34.192 30.453-76.933 52.892-126.62 66.783l-17.096-28.316c48.618-12.822 89.222-32.055 121.277-59.303-33.124-33.658-56.097-72.66-68.92-117.003h-46.48v-32.056h121.277c-7.48-13.89-17.096-27.247-28.316-40.07l32.056-11.753c11.22 14.425 21.37 31.522 30.453 51.29h115.935v32.055h-46.481c-14.96 45.946-36.33 84.413-64.646 115.4 31.522 25.11 71.057 45.947 117.538 63.043l-17.631 27.782zM1023.288 934.6c0 22.974-18.7 41.673-41.673 41.673H492.232l20.837-95.633h156.538l-89.222-497.397-0.534 2.671-3.74-19.767 1.069 0.534-32.59-181.649h437.56c22.973 0 41.672 18.7 41.672 41.673V934.6z" p-id="5238"></path><path d="M684.566 541.384h114.866v-30.453H684.566v-60.905h122.346v-30.453H648.771V638.62h162.95v-30.453H684.565v-66.783zM924.45 475.67c-9.616 0-18.164 1.603-26.178 5.877-7.48 3.74-14.96 9.617-20.837 17.096v-18.699h-34.727V638.62h34.727v-95.633c1.069-12.822 5.343-22.439 12.823-29.384 6.41-5.877 13.89-9.083 22.439-9.083 24.041 0 35.795 12.823 35.795 39.001v94.565h34.727v-97.77c1.069-43.275-19.233-64.646-58.769-64.646z" p-id="5239"></path>
                    </svg>
                }
            </div>
        </div >
    );
}