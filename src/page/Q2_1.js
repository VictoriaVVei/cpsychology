import { useState } from 'react';
import { Navigation } from '../components/Navigation.js';
import { Navigation2 } from '../components/Navigation2.js';

export function Q2_1() {
    const [language, setLanguage] = useState('English');
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    let content = null
    if (language === "English") {
        content =
            <div id='News'>
                <div className='for_bg'></div>
                <div className='eachNews_container'>
                    <h1 style={{ gridColumn: "1 / span 2", gridRow: "1", textAlign: "center", color: "rgb(35, 35, 35)", margin: "0" }}>Q1 How can a child with procrastination overcome this through reinforcement in psychology?</h1>
                    <div style={{ gridColumn: "2", gridRow: "2", textAlign: "right", color: "rgb(107, 117, 128)", paddingRight: "20px" }}>Free to watch</div>
                    <div style={{ gridColumn: "1", gridRow: "3", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>When an 8-year-old boy cannot take a bath and go to bed on time every night, his mother gets very angry and anxious. The boy's father is impatient and often pulls him to the bathroom to take a bath. The boy also has a temper and shows his rebellious side. He yells and even locks himself in his room. This has been going on for a long time and the boy's procrastination has become worse and worse. He procrastinates from bathing at 8:30 pm to 10:30 pm. The delay time has increased from half an hour to two hours. The boy's parents are very anxious and do not know what to do. He was even brought to the school's counseling room to consult about the situation but the counselor did not give effective advice.</p>
                        <p>
                            There is a psychological theory called "reinforcement", which was created by a psychologist named B.F. Skinner. It belongs to the category of increasing people's behavior patterns. Reinforcement can be positive or negative, and it further strengthens the same behavior pattern. This theory is actually very effective for treating children with procrastination.
                        </p>
                    </div>
                    <img src='./img/p11.png' style={{ gridColumn: "2", gridRow: "3" }} />
                    <div style={{ gridColumn: "1 / span 2", gridRow: "4", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>
                            One night, when the 8-year-old boy came home after a game of football, he continued to lie on the sofa and watch TV until 9 pm, with no intention of going to the bathroom to take a bath. At this time, the boy's mother gently told him that there was a surprise for him if he went to take a bath now. When the boy heard this, his mind immediately started to imagine what it could be and he entered the bathroom with some anticipation. When he entered the bathroom, he saw that the walls were covered with dinosaur pictures, many of which he particularly liked. The boy excitedly touched the pictures and then took off his clothes while looking at them. After taking a bath, he carefully looked at the pictures for a long time.
                        </p>
                        <p>
                            The next day, the boy started to enter the bathroom at 8:30 pm on time. When he entered the bathroom, he found a dinosaur-shaped soap, which surprised him and he immediately took off his shirt to take a bath. In the following days, the boy entered the bathroom to take a bath on time at 8:30 pm. After a few more days, his mother gave him larger stickers to hang on the bathroom wall, and the boy began to enter the bathroom half an hour early to take a bath.
                        </p>
                        <p>
                            This example tells us that correctly applying psychological theories is very important and necessary. Reinforcement is a very common behavior pattern in our lives, but using it effectively is not easy. If you want to learn more about this topic, you can follow me.
                        </p>
                    </div>
                </div>
            </div >

    } else {
        content =
            <div id='News'>
                <div className='for_bg'></div>
                <div className='eachNews_container'>
                    <h1 style={{ gridColumn: "1 / span 2", gridRow: "1", textAlign: "center", color: "rgb(35, 35, 35)", margin: "0" }}>Q1 如果孩子有拖延症，应该怎么样通过心理学中的加强来摆脱？</h1>
                    <div style={{ gridColumn: "2", gridRow: "2", textAlign: "right", color: "rgb(107, 117, 128)", paddingRight: "20px" }}>本文免费观看</div>
                    <div style={{ gridColumn: "1", gridRow: "3", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>
                            当一名8岁男孩每天晚上不能按时洗澡上床睡觉，他的妈妈非常生气并且很焦虑。男孩的爸爸脾气比较急躁，他经常把他拉到浴室然后让他洗澡。这个男孩脾气也比较暴躁，会展现出自己叛逆的一面，他每次会大喊大叫，甚至跑到自己房间把门锁上。这种状态下持续了很长时间并且这个男孩的拖延症越来越严重。他从一开始的晚上8点半洗澡拖延到了10点半。从原来的半小时的拖延时间延长到了两个小时。孩子的父母非常焦虑并且不知道用什么合适的办法。他甚至还被拉去了学校的心理咨询室里咨询相关情况，心理咨询师并没有给出有效的建议。
                        </p>
                        <p>
                            心理学上有种理论叫做"强化"。这是由一名叫B.F. Skinner的心理学学家开创的理论。它是属于增加人们的行为模式。强化可以是积极的或消极的，它在原有的行为模式上进一步加强同样的行为。这个理论其实对于治疗拖延症孩子非常有效。
                        </p>
                    </div>
                    <img src='./img/p11.png' style={{ gridColumn: "2", gridRow: "3" }} />
                    <div style={{ gridColumn: "1 / span 2", gridRow: "4", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>
                            在某一天晚上，当这名8岁男孩踢完球回家的时候，继续躺在沙发上看电视，直到晚上9点，他仍然没有要去浴室洗澡的想法。这个时候，男孩的母亲温柔地告诉他如果现在去洗澡的话，有惊喜给他。当这名男孩听到这番话之后，他的脑海里立马开始想象是什么然后有点期待地进入了浴室。当他走进浴室，发现浴室的墙壁上贴满了恐龙的贴图，有很多是他特别喜欢的。这名男孩开始上前激动地摸了摸这些贴图，然后一边看着贴图一边脱掉了衣服。当他洗澡完之后，仔细看了这些很久。
                        </p>
                        <p>
                            第二天，这名男孩在晚上8点半的时候开始准时进入浴室，当他进入浴室后，他发现浴室里多了一块恐龙形状的肥皂，他惊喜万分地立马脱掉上衣开始洗澡。在之后的几天里，这名男孩连续在8点半的时候准时进入了浴室并且洗澡。又过了几天后，他的妈妈给了他更大的贴纸并且挂在浴室的墙壁上，这名男孩在之后的时间里开始提前半个小时进入浴室洗澡。
                        </p>
                        <p>
                            这个例子告诉我们，正确地运用心理学理论是非常重要并且也是有必要的。强化是一种非常普遍的行为模式存在我们生活当中，但是运用好它不是容易的事。如果你们想要了解更多有关的内容可以关注我。
                        </p>
                    </div>
                </div>
            </div >
    }

    return (
        <div id='News'>
            <Navigation onLanguageChange={handleLanguageChange} />
            <Navigation2 onLanguageChange={handleLanguageChange} />
            <div className='for_bg'></div>
            {content}
        </div >
    );
}