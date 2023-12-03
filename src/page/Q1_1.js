import { useState } from 'react';
import { Navigation } from '../components/Navigation.js';
import { Navigation2 } from '../components/Navigation2.js';

export function Q1_1() {
    const [language, setLanguage] = useState('Chinese');
    const handleLanguageChange = (language) => {
        setLanguage(language);
    };

    let content = null
    if (language === "English") {
        content =
            <div id='News'>
                <div className='for_bg'></div>
                <div className='eachNews_container'>
                    <h1 style={{ gridColumn: "1 / span 2", gridRow: "1", textAlign: "center", color: "rgb(35, 35, 35)", margin: "0" }}>Can psychological "sublimation" reduce people's unemployment and low wages?</h1>
                    <div style={{ gridColumn: "2", gridRow: "2", textAlign: "right", color: "rgb(107, 117, 128)", paddingRight: "20px" }}>Free to watch</div>
                    <div style={{ gridColumn: "1", gridRow: "3", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>In psychology, the working principle of the sublimation defense mechanism is to transform negative feelings or impulses into positive ones. This theory also applies well to work-related aspects.</p>
                        <p>
                            Many people lose their current jobs or have low wages because their bosses do not recognize their work abilities. These people may not be aware of where their work abilities are lacking. For example, they feel that they can always complete their work on time, but their salary has not increased. These individuals often put the blame on their bosses, thinking that their superiors are stingy, and as a result, they begin to become lazy in their work and reduce work efficiency. Some may even argue with their boss over salary issues. In their subconscious, they believe that their work abilities will not lead to being fired in the future. Some choose to leave their current job environments altogether.
                        </p>
                    </div>
                    <img src='./img/p11.png' style={{ gridColumn: "2", gridRow: "3" }} />
                    <div style={{ gridColumn: "1 / span 2", gridRow: "4", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>
                            There are many similar examples like this, and sublimation can help reduce their occurrence. When you continue to work on time day and night, but your salary does not increase, you should not complain or think negatively that your work ability is good, and it's just that your boss is stingy. Such negative thoughts will make you want to quickly look for a new job or reduce your current work efficiency. You can transform this unbalanced mindset into a behavioral pattern.
                        </p>
                        <p>
                            For example, when you go for a run outdoors after work with tiredness and anxiety, you may find that your mindset has improved after running for an hour. This is because the supportive neurotransmitters in the brain allow people to have the ability to self-soothe. These supportive neurotransmitters help to transform anxious or angry emotions into positive motivation while beginning to balance and reduce negative mindsets. These supportive neurotransmitters include serotonin, oxytocin, endorphins, and anandamide. During your run, you may think that you can continue to improve your abilities and acquire new work skills in your current workplace, while reminding yourself that a low salary is only temporary. Besides running, going to a flower shop to buy some flowers and researching how to cultivate them well is also a good way to sublimate.
                            Regarding this theory, I will update more related content in free consultations or in the future.
                        </p>
                    </div>
                </div>
            </div >

    } else {
        content =
            <div id='News'>
                <div className='for_bg'></div>
                <div className='eachNews_container'>
                    <h1 style={{ gridColumn: "1 / span 2", gridRow: "1", textAlign: "center", color: "rgb(35, 35, 35)", margin: "0" }}>心理学上的"升华"可以减少人们的失业率以及工资低？</h1>
                    <div style={{ gridColumn: "2", gridRow: "2", textAlign: "right", color: "rgb(107, 117, 128)", paddingRight: "20px" }}>本文免费观看</div>
                    <div style={{ gridColumn: "1", gridRow: "3", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>心理学上说，升华防御机制的工作原理是将消极的感觉或冲动转变为积极的。 这个理论延伸到和工作相关的也非常适用。</p>
                        <p>
                            很多人失去了现有的工作以及工资低因为上司并不认可他们的工作能力。
                            可能这些人并没有意识到自己的工作能力哪里出现了问题。比如他们觉得自己平时都能按时完成工作内容，但是自己的薪资却一直没有上涨。
                            这部分人会把责任推给自己的上司。他们或许认为自己的上司是一个非常抠门的人，然后这群人开始懈怠工作，减少了工作效率。
                            可能有些人甚至会因为工资问题和上司吵起来。在他们的潜意识里，自己的工作能力不会导致自己在未来被开除。
                            有些人还会选择自己离开现有的工作环境里。
                        </p>
                    </div>
                    <img src='./img/p11.png' style={{ gridColumn: "2", gridRow: "3" }} />
                    <div style={{ gridColumn: "1 / span 2", gridRow: "4", textIndent: "30px", color: "rgb(107, 117, 128)" }}>
                        <p>
                            这种类似的例子有非常多。"升华" 可以很好地减少这种事情的发生。当你在日夜地按时完成工作，却没有提高你的薪资的时候，你不应该抱怨或者产生一种认为自己的工作能力已经很好了，是因为上司很抠门之类的想法。这种负面的想法会让你很快地想要去寻找新的工作或者减少现有的工作效率。你可以把这种不平衡的心态转化成一种行为模式。
                        </p>
                        <p>
                            举个例子，当你下班之后，拖着疲惫不堪以及焦虑的心态去户外跑步。等你跑完一个小时之后，你会发现你的心态恢复了一些。这是因为一方面人的大脑当中支持性的神经递质会让人有自我抚慰的能力，这些支持性的神经递质在把焦虑或者愤怒情绪转化成积极动力的同时，它们在开始平衡以及降低人们不好的心态。支持性性的神经递质分别为血清素，催产素，内啡肽和大麻素。你可能在跑步的过程中认为自己还是可以继续提高能力并且获得新的工作技能在现有的职场上，并且你提醒自己工资低只是临时的。除了跑步之外，去花店买一些花然后研究如何养殖它们也是一种比较好的方式。
                            关于这个理论。我会在免费咨询或者之后的时间里，更新更多相关的内容。
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