import React, { useEffect, useRef, useState } from 'react'; //import React Component
import { NavLink } from 'react-router-dom';
import { Navigation } from '../components/Navigation.js';
import { Navigation2 } from '../components/Navigation2.js';

export function MainPage() {
    let timeout = null;
    const button_sRef = useRef();
    const showB = () => {
        button_sRef.current.style.display = "block"
    }

    const closeB = () => {
        button_sRef.current.style.display = "none"
    }

    const slidesRef1 = useRef();
    const slidesRef2 = useRef();
    const slidesRef3 = useRef();
    const dotRef1 = useRef();
    const dotRef2 = useRef();
    const dotRef3 = useRef();
    const [pageN, setPageN] = useState(1)
    const minus = () => {
        if (pageN === 1) {

        } else {
            setPageN(pageN - 1)
        }
    }

    const plus = () => {
        if (pageN === 3) {

        } else {
            setPageN(pageN + 1)
        }
    }

    useEffect(() => {
        const slides = [slidesRef1.current, slidesRef2.current, slidesRef3.current];
        const dots = [dotRef1.current, dotRef2.current, dotRef3.current];
        slides.forEach((slide, index) => {
            slide.style.display = (pageN === index + 1) ? "grid" : "none";
        });
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = (pageN === index + 1) ? "black" : "#bbb";
        });
    }, [pageN]);

    const switch_s = (n) => {
        setPageN(n)
    }

    const [language, setLanguage] = useState('Chinese');
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };
    let content = null
    if (language === "Chinese") {
        content = <div className='carousel' >
            <div ref={slidesRef1} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p>
                        <h1>背景介绍</h1>
                        主要负责人  Cammy<br /><br />
                        2015年曾就读于西雅图Green river college心理学专业<br />
                        后转到辛辛那提就读心理学学士学位<br />
                        去年在学校做过性格心理学助教，同时也是green river college一名心理学教授的得力学生<br />
                        自媒体犯罪心理分析学者<br />
                        帮知名大up主分析案件，解析案件当中犯人的心理特征。<br />
                        写过心理学方面梦境的稿子并且一名澳洲知名up主录制过视频。<br />
                        自己也有心理分析频道<br />
                        学习过ABA治疗(主要针对自闭症和多动症孩童)<br />
                        在西雅图读书期间有当自愿者帮助过学校里的有心理困难的同学<br />
                        曾也在线上治疗过拖延症小学生一段时间<br />
                        我曾在大学里学习过条件反射和行为反射，也曾经帮助过拖延症孩子。我学习过认知治疗法(CBT)，自由联想等方法。<br />
                        心理学是个很自由得领悟。我们自己可以通过一个理论转化成自己的理论。在某一种理论形成自己的理论之后可以在生活，治疗中产生并且不断运用。<br />
                        一个典型的例子; 当某个孩子不愿意吃饭，非常挑食，在之后的时间里，他的母亲经常做一些丰富的菜，里面有蔬菜，也有孩子喜欢吃的肉。她把其中的菜也炒成了肉的香味。孩子开始津津有味地吃了起来。<br />
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p1.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div ref={slidesRef2} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p>
                        <h1>环境改变</h1>
                        环境对于孩子的影响非常重要<br /><br />
                        生物学上说，精神病是遗传疾病。我认为从心理学角度来说，后期的环境是创造者。它可以把基因给创造出来<br /><br />

                        另外，我认为孩童的教育非常重要。曾经做过一个心理实验。实验中讲述了几十名3到6岁的孩子看着暴力视频并且被观察是否有模仿有暴力的行为在整个实验过程中有孩子做出拿着拳头打玩具的场景<br /><br />

                        虽然这只是一项实验，但是我认为等孩子长大之后，后期的环境同样会对他们造成一定的影响一些父母在孩子很小时候没有进行足够好的教育，在有些孩子长大后心理方面会造成一些缺陷，比如有一些人会患有自闭症或者情绪不稳定等值得一提的是，人的神经递质受到潜意识影响可能会维持在同一种不好的状态下或者混乱的状态下。在这种情况下，我们为了去平衡心态，将如何去平衡神经递质以及如何去增加另外的神经递质？我希望我的一些不同种类的心理分析可以给你们一些帮助！
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p2.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div ref={slidesRef3} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p>
                        <h1>我们的目标</h1>
                        希望可以帮助更多的人 <br /><br />
                        让用户在原有的问题上多一些积极心态，心理学主要目的不是让人拥有心理问题的人痊愈而是让更多人对于生活保持积极态度。即使是在医院里，在每一次的治疗之后，他们也可以对待生活更加乐观积极一点。<br /><br />

                        注;这里不是医院也不是诊所，我这里只是单纯提供适当的帮助，给这群人一些好的方向。<br /><br />

                        特别之处<br />
                        读懂我分析的人就是一种缘分，晚上的时候或者疲惫的时候点进来看一下，可能会有不一样的帮助。<br />
                        曾经我的一名好朋友有一些心理方面的问题，她一度想要自杀，在和我相处过程中，我同时带她去了西雅图的downtown，她那时候还和一位骑着三轮车小哥哥抱一起合照，在回来路上她非常感谢我并且之后心态好转起来。她现在在哈佛大学读书。
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p3.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div className='button_s' ref={button_sRef} onMouseOver={showB} onMouseLeave={closeB}>
                <a className="prev" onClick={minus}>︿</a>
                <a className="next" onClick={plus}>﹀</a>
            </div>

            <div className='dots'>
                <span className="dot" ref={dotRef1} onClick={() => switch_s(1)}></span>
                <span className="dot" ref={dotRef2} onClick={() => switch_s(2)}></span>
                <span className="dot" ref={dotRef3} onClick={() => switch_s(3)}></span>
            </div>
        </div>

    } else {
        content = <div className='carousel' >
            <div ref={slidesRef1} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "small" }}>
                        <h1 className='e'>Personal background introduction</h1>
                        Main responsible person  Cammy <br /><br />
                        In 2015, I studied psychology at Green River College in Seattle.<br />
                        Later, I transferred to the University of Cincinnati to pursue a bachelor's degree in psychology. Last year, I worked as a personality psychology teaching assistant at school, and I was also a strong student of a psychology professor at Green River College.<br />
                        I also cooperate with some famous youtuber. I have been writing some criminal psychology analysis. I have written articles on dream psychology either.<br />
                        I have studied ABA therapy (mainly for children with autism and ADHD). During my time in Seattle, I volunteered to help classmates with psychological difficulties. I have also treated elementary school students with procrastination online for a period of time.<br />
                        I have studied classical conditioning and behavioral reflexes in college and have helped children with procrastination. I have also studied cognitive behavioral therapy (CBT) and free association methods.<br />
                        Psychology is a very free interpretation. We can turn a theory into our own theory. After forming our own theory in some kind of theory, we can generate and continuously apply it in life and treatment.<br />
                        A typical case is the example of a child who doesn’t want to eat and is very picky. Later, the mother often makes diverse dishes with vegetables and meat that the child likes. She also cooked the veggies with the meat, creating a more appetizing smell. The child began to happily eat it.<br />
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p1.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div ref={slidesRef2} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p>
                        <h1 className='e'>Environmental changes</h1>
                        Environmental changes<br /><br />
                        If mental illness is genetic, then the environment in later life is the creator, as it shapes the genes. I believe that education during childhood is very important. I once conducted a psychological experiment where dozens of 3-6 year-old children watched violent videos and were observed for any imitative violent behavior. During the experiment, some children were seen hitting their toys with fists. However, as children grow up, the later environment can still change. Even if some parents did not provide proper education, when children grow up, some of them may have psychological defects, such as autism or emotional instability. The neurotransmitters in humans can be affected subconsciously and remain in a certain state or become confused. In this situation, how to balance one's mentality, how to balance neurotransmitters, and how to increase other neurotransmitters are important aspects to consider. I hope that my various forms of psychological analysis can be helpful to you!
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p2.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div ref={slidesRef3} className="slides">
                <div style={{ textAlign: "right" }}>
                    <p>
                        <h1 className='e'>Objective</h1>
                        The main purpose of psychology is not to cure people with mental problems, but to help more people maintain a positive attitude towards life. Even in a hospital, after each treatment, they can face life with more optimism and positivity.<br /><br />

                        Note: This is not a hospital or clinic. I only provide appropriate help here and give some good directions to this group of people.<br /><br />

                        To understand my analysis is a kind of fate. You may find some different help by clicking here when you are tired or exhausted at night. Once, one of my good friends had some psychological problems and even wanted to commit suicide. During our time together, I took her to downtown Seattle, where she took a photo with a guy riding a tricycle. On the way back, she was very grateful to me and her mentality improved afterwards. Now she is studying at Harvard University.<br /><br />
                    </p>
                </div>
                <div style={{ gridRow: "1", gridColumn: "2", display: "flex", justifyContent: "flex-end", color: "rgb(161, 135, 113)" }}>Cammy</div>
                <div style={{ gridRow: "2", gridColumn: "2" }}>
                    <img src="./img/p3.png" style={{ width: "210%", gridRow: "2", gridColumn: "2" }} />
                    <div className='timeTag' style={{ fontSize: "small", color: "rgb(177, 177, 177)", position: "absolute", right: "0" }}>2023/05/ 21    14:21</div>
                </div>
                <div style={{ gridRow: "3", gridColumn: "2", }}></div>
            </div>

            <div className='button_s' ref={button_sRef} onMouseOver={showB} onMouseLeave={closeB}>
                <a className="prev" onClick={minus}>︿</a>
                <a className="next" onClick={plus}>﹀</a>
            </div>

            <div className='dots'>
                <span className="dot" ref={dotRef1} onClick={() => switch_s(1)}></span>
                <span className="dot" ref={dotRef2} onClick={() => switch_s(2)}></span>
                <span className="dot" ref={dotRef3} onClick={() => switch_s(3)}></span>
            </div>
        </div>
    }

    const [cartItem, setCartItem] = useState([])
    const add = async (e) => {
        let value = e.target.dataset.value

        let choice1 = value.split("/ ")[0]
        let choice2 = value.split("/ ")[0].toLowerCase()
        try {
            const response = await fetch('/checkBuy1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: choice1 }),
            });

            if (!response.ok) {
                return
            }

            const res = await response.json()
            console.log(choice1 + " " + res)
            if (res === true) {
                window.location.href = `/${choice2.replace(".", "_")}`
            } else {
                setCartItem([...new Set([...cartItem, value])])
                e.target.style.color = "rgb(161, 135, 113)"

                let tips = document.getElementById("snackbar");
                tips.innerHTML = '';
                let text = "";
                if (timeout) {
                    clearTimeout(timeout);
                }
                tips.style.display = "block"

                if (language === "English") {
                    text = document.createTextNode("Add to cart");
                } else {
                    text = document.createTextNode("成功添加到购物车");
                }

                tips.appendChild(text)
                tips.className = "show";
                timeout = setTimeout(() => {
                    tips.className = tips.className.replace("show", "disappear");
                }, 2000);
            }
        } catch (error) {
            showSnackbar(language === "Chinese" ? "购买信息错误" : "Wrong Information", timeout)
        }
    }

    const remove = (e) => {
        let value = e.target.dataset.value
        setCartItem(cartItem.filter(item => { return item !== value }))
        const div = document.querySelector('h3[data-value="' + value + '"]');
        div.style.color = "black";
    }

    let cartItems = null
    if (cartItem !== null) {
        cartItems = cartItem.map((item) => {
            return (
                <li key={item} onClick={(e) => remove(e)} data-value={item}> {item}</li >
            )
        })
    }

    let content2 = null
    if (language === "English") {
        content2 =
            <div className='reservation' id="p2">
                <h1 style={{ marginBottom: "0" }}>Psychological space</h1>
                <h3 style={{ margin: "0" }}>Buy two psychology articles and get a 10% discount, buy three psychology articles and get a 30% discount.</h3>
                <h3 style={{ margin: "0" }}>The person who needs to solve a problem and comes to ask for help is called a visitor or counselor, and the counseling expert who provides help is called a counselor. </h3>
                <h3 style={{ margin: "0" }}>Real cases show that hope can be helped. After purchasing three articles, you can contact  my mobile phone number "513 981 9216" or email "jingyichen448@gmail.com" to book a 30-minute free psychological communication.</h3>
                <div style={{ fontSize: "small", color: "#6B7580" }}>Those who need to solve problems and seek help are called visitors or counselors, while consulting experts who provide help are called counselors.</div>
                <div className='news_container'>
                    <div>
                        <img src="./img/p7.png" />
                        <div style={{ textAlign: "left" }}>
                            <NavLink to={"/q1_1"}><h3 style={{ marginTop: "5%", color: "rgb(161, 135, 113)" }}>Q1 Can the psychological process of sublimation reduce the problems of unemployment and low wages? (Free) </h3></NavLink>
                            <div style={{ color: "rgb(161, 135, 113)" }}>Have you ever encountered a boss who treated you unfairly in the workplace? You feel like you are not being recognized for your abilities compared to others.</div>
                            <h3 data-value="Q1.2/ 3$" onClick={(e) => add(e)}>Q2 How can operant conditioning help gain recognition from work leaders and colleagues? (3$)</h3>
                            <div>Do you want to have a very harmonious relationship with your boss and colleagues? The "operant conditioning" in psychology can effectively demonstrate the harmonious side of relationships in the workplace. Many individuals with high emotional intelligence use this method.</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5%", color: "black" }}>
                                <NavLink to={"/q1_2"}><h3 style={{ color: "rgb(161, 135, 113)" }}>Q1 How can we use reinforcement in psychology to help children get rid of procrastination? (Free) </h3></NavLink>
                            </div>
                            <div style={{ color: "rgb(161, 135, 113)" }}>If a child is too engrossed in watching TV and refuses to do homework, take a bath, or go to bed on time, how do we use reinforcement to address procrastination behavior</div>
                            <div style={{ display: "flex", justifyContent: "flex-end", color: "black" }}>
                                <h3 data-value="Q2.2/ 3$" onClick={(e) => add(e)}>Q2 How can operant conditioning help improve a child's grades? (3$)</h3>
                            </div>
                            <div>How does operant conditioning in psychology help children improve their academic performance and progress in learning</div>
                            <div style={{ display: "flex", justifyContent: "flex-end", color: "black" }}>
                                <h3 data-value="Q2.3/ 3$" onClick={(e) => add(e)}>Q3 Deeply analyze the impact of marital life on children's lives. (3$)</h3>
                            </div>
                            <div>Married life has a very important impact on children's lives. The quality of children's behavior is often related to it. What if we look at this impact from a deeper perspective?</div>
                        </div>
                        <img src="./img/p8.png" />
                    </div>
                    <div>
                        <img src="./img/p9.png" />
                        <div style={{ textAlign: "left" }}>
                            <h3 style={{ marginTop: "5%" }} data-value="Q3.1/ 3$">Q1 The impact of defense mechanisms on daily life unintentionally？ (3$)</h3>
                            <div>Defense mechanisms refer to the ways in which individuals control scary things outside of their consciousness in order to reduce or avoid anxiety. They are used to avoid mental disturbance and maintain psychological balance. What effects do the defense mechanisms that are unintentionally produced have on our daily lives.</div>
                            <h3 data-value="Q3.1/ 3$">Q2 How to handle being overly concerned about what others think from a certain psychological perspective？ (3$)</h3>
                            <div>Do you often feel like your colleagues are talking about you behind your back? When you wear clothing that stands out, your colleagues carefully scrutinize your dress, and some people show uncomfortable expressions that make you feel uncomfortable.</div>
                        </div>
                    </div>
                </div>
            </div>
    } else {
        content2 =
            <div className='reservation' id="p2">
                <h1 style={{ marginBottom: "0" }}>心理空间</h1>
                <h3 style={{ margin: "0" }}>两篇优惠10%，三篇优惠30%。</h3>
                <h3 style={{ margin: "0" }}>购买三篇文章后可以联系手机号“513 981 9216”或邮箱号“jingyichen448@gmail.com”预约30分钟免费心理沟通一次。</h3>
                <div style={{ fontSize: "small", color: "#6B7580" }}>需要解决问题并前来寻求帮助者称为来访者或者咨客，提供帮助的咨询专家称为咨询者。真实案例展示希望可以从中得到帮助。</div>
                <div className='news_container'>
                    <div>
                        <img src="./img/p4.png" />
                        <div style={{ textAlign: "left" }}>
                            <NavLink to={"/q1_1"}><h3 style={{ marginTop: "5%", color: "rgb(161, 135, 113)" }}>Q1 心理学上的"升华"可以减少人们的失业率以及工资低的问 (免费)</h3></NavLink>
                            <div style={{ color: "rgb(161, 135, 113)" }}>职场中，你有没有遇到过老板用不公平地方式对待你。工作中，你并没有被得到认可。你有时候认为你的能力不如其他人。</div>
                            <h3 data-value="Q1.2/ 3$" onClick={(e) => add(e)}>Q2 运作条件是如何获得工作领导和同事认可的？ (3$)</h3>
                            <div>你希望自己和上司以及同事之间的相处模式是非常和谐的吗？心理学中的"运用条件"可以很好地展现出职场中关系和谐的一面。很多高情商的人都会利用这个方法。</div>
                        </div>
                    </div>
                    <div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5%", color: "black" }}>
                                <NavLink to={"/q2_1"}><h3 style={{ color: "rgb(161, 135, 113)" }}>Q1 如果孩子有拖延症，应该怎么样通过心理学中的加强来摆脱？ (免费)</h3></NavLink>
                            </div>
                            <div style={{ color: "rgb(161, 135, 113)" }}>孩子电视看得太入迷不愿意去写作业，不肯按时去洗澡上床怎么办？"加强"在对孩子教育当中起到了非常有用的作用。它会减少拖延行为。</div>
                            <div style={{ display: "flex", justifyContent: "flex-end", color: "black" }}>
                                <h3 data-value="Q2.2/ 3$" onClick={(e) => add(e)}>Q2 运作条件是如何让孩子提高成绩的？ (3$)</h3>
                            </div>
                            <div>心理学中的"运用条件" 可以提高孩子们的成绩？它是如何做到让孩子在学习中更加进步的？</div>
                            <div style={{ display: "flex", justifyContent: "flex-end", color: "black" }}>
                                <h3 data-value="Q2.3/ 3$" onClick={(e) => add(e)}>Q3 深层次解析两个人的婚姻生活对孩子的影响？ (3$)</h3>
                            </div>
                            <div>婚姻生活在孩子生活中有着非常重要的影响。孩子行为的好坏很多时候和它有一定的关系。如果从深层次角度去看这个影响呢？</div>
                        </div>
                        <img src="./img/p5.png" />
                    </div>
                    <div>
                        <img src="./img/p6.png" />
                        <div style={{ textAlign: "left" }}>
                            <h3 style={{ marginTop: "5%" }} data-value="Q3.1/ 3$" onClick={(e) => add(e)}>Q1 无意间所产生的防御机制因素对人们日常的影响？ (3$)</h3>
                            <div>防御机制是指人们将可怕的东西控制于意识之外以减少或避免焦虑的方法。他们在精神受干扰时用以避开干扰，保持心理平衡的心理机制。 那么无意间所产生的防御机制对我们的日常有什么影响？</div>
                            <h3 data-value="Q3.2/ 3$" onClick={(e) => add(e)}>Q2 用某种心理角度探讨面对太在意他人眼光应该如何相处？ (3$)</h3>
                            <div>你是不是经常觉得同事在背后议论你？你穿一件太过显眼的服装同事们仔细盯着你的着装看，有些人的神情表露出让你感觉到不舒服的眼神。</div>
                        </div>
                    </div>
                </div>
            </div>
    }

    const [expandForm, setExpand] = useState(false)
    const openCart = () => {
        setExpand(true);
        document.querySelector(".cart").style.display = "none"
    }

    const close = () => {
        setExpand(false)
        try {
            document.querySelector(".cart").style.display = "block"
        } catch {
        }
    }

    let content2_2 = null
    if (language === "English") {
        content2_2 =
            <div style={{ fontSize: "x-large" }}>
                Click to remove
            </div>
    } else {
        content2_2 =
            <div style={{ fontSize: "x-large", position: "absolute", backgroundColor: "rgb(161, 135, 113)", height: "100%", display: "flex", alignItems: "center", padding: "0 5px" }}>
                点击移除
            </div>
    }

    const cartRef = useRef()
    useEffect(() => {
        if (cartItem.length === 0 && expandForm != true) {
            cartRef.current.style.display = "none"
        } else if (cartItem.length !== 0 && expandForm != true) {
            cartRef.current.style.display = "block"
        }
    })

    let content3 = null;
    if (language === "English") {
        content3 = <div className='reservation' id="p3">
            <h1 style={{ marginBottom: "0" }}>Personal  case</h1>
            <div style={{ fontSize: "small", color: "#6B7580" }}>I have learned conditioned reflex and behavioral reflex in college, and I have helped procrastination children. I have studied cognitive therapy (CBT), free association, and other methods.</div>
            <div className='pc'>
                <div>
                    <h3>Personal Case: Treating children with procrastination</h3>
                    <div>One summer I consulted with a boy who was a procrastinator. He is a primary school student. He has been taken care of by his mother since he was three years old. Because his father is busy with his work, this boy has been dependent on his mother since childhood.
                        The boy has good relationships at school and is good at playing guitar and kicking a ball. Also, He usually get  good grades at school. The only downside is that he tends to procrastinate and even get grumpy when it comes to showering and sleeping. He would delay taking a shower by two hours every night, and sometimes he would delay going to bed at night, so that he could not get up on time for class the next day. Later, I have given some advice to the boy with procrastination and given some suggestions to his parents with reinforcement from psychological theories. After a while, the mother told me that his procrastination problem had improved. Some time ago, I heard that the boy's condition has been getting better and better.</div>
                </div>
                <img style={{ height: "100%" }} src="./img/p10.png" />
            </div>

            <div className='pics'>
                <div>
                    <img src="./img/7.png" />
                    <div>Autism</div>
                </div>
                <div>
                    <img src="./img/8.png" />
                    <div>Attention-deficit/hyperactivity disorder  </div>
                </div>
                <div>
                    <img src="./img/9.png" />
                    <div>hild depression</div>
                </div>
                <div>
                    <img src="./img/10.png" />
                    <div>Obsessive-compulsive disorder</div>
                </div>
                <div>
                    <img src="./img/11.png" />
                    <div>Depression</div>
                </div>
                <div>
                    <img src="./img/12.png" />
                    <div>Mental illness</div>
                </div>
            </div>
        </div>
    } else {
        content3 = <div className='reservation' id="p3">
            <h1 style={{ marginBottom: "0" }}>个人案例</h1>
            <div style={{ fontSize: "small", color: "#6B7580" }}>我曾在大学里学习过条件反射和行为反射，也曾经帮助过拖延症孩子。我学习过认知治疗法(CBT)，自由联想等方法。</div>
            <div className='pc'>
                <div>
                    <h3>治疗拖延症孩子</h3>
                    <div>曾经有一年暑假，我咨询过一名拖延症孩子。他是一名小学生。这个孩子他从三岁开始就被妈妈重点照顾。因为他的爸爸平时工作比较忙，所以他从小比较依赖他的妈妈。
                        这个孩子平日里在学校里人际关系也不错，还擅长弹吉他以及踢球。平时成绩也比较不错。唯一不好的是他在洗澡和睡觉时候容易有拖延症，甚至会闹脾气。他每天晚上会拖延两个小时才洗澡，有时候晚上睡觉也拖延，导致第二天不能按时起床上课。后来，我用了心理学理论当中的加强(reinforcement)给这名拖延症小男孩进行一些疏导以及给了孩子父母一些建议。过了一段时间，孩子母亲反馈说他拖延症问题有改善一些。前段时间，听说这个孩子情况已经越来越好了。</div>
                </div>
                <img src="./img/p10.png" />
            </div>

            <div className='pics'>
                <div>
                    <img src="./img/1.png" />
                    <div>自闭症</div>
                </div>
                <div>
                    <img src="./img/2.png" />
                    <div>多动症</div>
                </div>
                <div>
                    <img src="./img/3.png" />
                    <div>母爱的关怀</div>
                </div>
                <div>
                    <img src="./img/4.png" />
                    <div>强迫症</div>
                </div>
                <div>
                    <img src="./img/5.png" />
                    <div>抑郁症</div>
                </div>
                <div>
                    <img src="./img/6.png" />
                    <div>GABA神经递质</div>
                </div>
            </div>
        </div>
    }

    const [money, setMoney] = useState(0)
    const [ifPay, sestIfPay] = useState(false)
    const pay = () => {
        let total = 0
        cartItem.map((item) => {
            let price = item.split("/ ")[1].replace("$", "")
            total += parseInt(price)
        })
        if (cartItem.length >= 3) {
            setMoney(total * 0.7)
        } else if (cartItem.length >= 2 && cartItem.length < 3) {
            setMoney(total * 0.9)
        } else {
            setMoney(total)
        }

        if (ifPay) {
            sestIfPay(false)
        } else {
            sestIfPay(true)
        }
    }

    const finalPay = () => {

    }

    return (
        <div id='MainPage'>
            <div id="snackbar"></div>
            <div className="scale-container">
                <Navigation onLanguageChange={handleLanguageChange} />
                <Navigation2 onLanguageChange={handleLanguageChange} />
                <div className='welcomeBoard' onMouseOver={showB} onMouseLeave={closeB} id="p1">
                    <div className='wb_bg'>
                        <div></div>
                        <div></div>
                    </div>
                    {content}
                </div>
                <hr className="vertical-divider" />
                {content2}

                <hr className="vertical-divider" />
                {content3}
            </div>
            <div className="fixed-element">
                {expandForm === true ?
                    <>
                        <div className='forCloseFullSreen' onClick={close}></div>
                        <div className='cartMenu'>
                            {content2_2}
                            <ol className='cartContent'>
                                {cartItems}
                            </ol>

                            <div className='buttonForPay material-symbols-outlined' onClick={pay}>
                                payments
                            </div>
                        </div>
                    </> : null

                }
                {expandForm === false ?
                    <>
                        <div ref={cartRef} className='cart material-symbols-outlined' onClick={openCart}>shopping_cart</div>
                    </> : null

                }
                {ifPay ?
                    <>
                        <div className='pay'>
                            <div className='close'>
                                <span onClick={pay}>X</span>
                            </div>
                            <div>
                                订单金额：<span>{money}$</span>
                            </div>
                            <div>
                                支付方式：<div onClick={finalPay}>Visa</div>
                            </div>
                        </div>
                    </> : null

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