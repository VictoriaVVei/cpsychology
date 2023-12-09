import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Stripe from 'stripe';

const app = express();
app.use(express.json());
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'build')));
const stripe = new Stripe('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');

app.post('/create-checkout-session', async (req, res) => {
    const amount = req.body.content;
    const cartItem = req.body.cartItem;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'checkout',
                },
                unit_amount: amount * 100,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: `https://www.cammypsy.com/main?session_id={CHECKOUT_SESSION_ID}&buy=${cartItem}`,
        cancel_url: 'https://www.cammypsy.com/main',
    });
    res.json({ id: session.id });
});


app.post('/checkBuy1', async (req, res) => {
    const body = req.body;
    let choice = body.content
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    if (session_id !== null & cartItem !== null) {
        const session = await stripe.checkout.sessions.retrieve(session_id);
        if (session.payment_status === 'paid') {
            if (cartItem.includes(choice)) {
                res.json(true)
            } else {
                res.json(false)
            }
        } else {
            res.json(false)
        }
    } else {
        res.json(false)
    }
});

app.post('/Q1_2', async (req, res) => {
    const body = req.body;
    let language = body.content
    let content = '';
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(cartItem)
    if (session.payment_status === 'paid' && cartItem.includes("Q1_2")) {
        if (language === "English") {
            content =
                `
                <div class='eachNews_container'>
                    <h1>Q2 How to gain recognition from work leaders and colleagues with operation conditions?</h1>
                    <div className="infoText">Paid (Please save instantly. Purchase information WILL NOT store)</div>
                    <div class="mainText ">
                        <p>
                            Do you want to have a very harmonious relationship with your superiors and colleagues? Psychology's "operative conditions" can show the harmonious side of workplace relationships very well. Many emotionally intelligent people use this method.
                        </p>
                        <p>
                            Positive reinforcement in "operative conditions" in psychology is one way to gain recognition from leaders and colleagues. It is the process of rewarding or strengthening ideal behavior to increase the likelihood of repetition in the future. When you perform well in a presentation and your leaders and colleagues agree with your comments, they may frequently ask you to give speeches in other big companies in the future and provide opportunities for you to showcase your skills. In fact, this is also a form of positive reinforcement. Therefore, even if you don't prepare well for a certain presentation in the future and your leaders and colleagues express disappointment, they may still approve of you to some extent. Why? Because you have put a lot of effort into preparation in previous presentations, and positive reinforcement has been constantly carried out during this process, increasing the level of recognition from your leaders and colleagues. So one or two failures will not reduce their recognition of you.
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div class="additionalText ">
                        <p>
                            This theory tells us very well that if we need to be constantly recognized, we need to complete some things ourselves first, such as a successful speech or helping colleagues complete a group task. After completing the first task, you need to gain more recognition and then move on to more challenging projects. Even if you don't complete them on time, you will try your best to discuss with colleagues or seek appropriate help from leaders, but your ultimate goal is to overcome these challenges. In the workplace, some people may not have very strong abilities, but they keep trying to overcome these problems. In this process, they may often discuss with colleagues and seek help from leaders. During this communication, leaders and colleagues will also recognize these individuals' personal ideas and abilities. When these abilities gradually improve in the future, they will be rewarded and recognized more. Some people may even have the possibility of a salary increase.
                        </p>
                    </div>
                </div>
                `

        } else {
            content =
                `
                <div class='eachNews_container'>
                    <h1>Q2 运作条件是如何获得工作领导和同事认可的？</h1>
                    <div class="infoText">已付费（请注意即时保存，关闭网页清除购买信息）</div>
                    <div class="mainText ">
                        <p>
                            你希望自己和上司以及同事之间的相处模式是非常和谐的吗？心理学中的"运用条件"可以很好地展现出职场中关系和谐的一面。很多高情商的人都会利用这个方法。
                        </p>
                        <p>
                            心理学上的"运作条件"中的正强化是一个可以被获得领导以及同事认可的方式之一。它是指奖励或强化理想行为的过程，以增加该行为在未来重复的可能性。当你在某一次presentation中表现得很好，领导和同事也比较认同你的发言，在日后的相处中，他们可能会经常让你去其他大公司演讲并且让你展示更多地提升自我的机会。其实这也是一种正强化。那么当这种行为模式产生之后，有些人可能会在某一次的presentation当中准备的不是很好，领导以及同事对你表示很失望，但是他们还是对你有一定的认可。这是为什么？因为你在前几次演讲期间，你非常用心地准备了，在这个过程中，正强化在不断被展开，上司以及同事对你的认可程度也在逐步升高。所以一两次的失败不会减少他们对你的认可。
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div class="additionalText ">
                        <p>
                            这个理论很好地告诉我们，如果需要不断地被认可，我们需要先自身完成一些东西，比如一次成功的演讲或者帮助同事完成某一项小组工作。在完成第一次事情之后，你需要获得更多地认可，然后去做更高项目的事情。即使期间你没有按时完成它，你也会努力去和同事讨论或者向领导寻求适当的帮助，但是你得最终目的是努力克服这些工作。在职场中，有些人的工作能力可能不是很强，但是他们也在不断尝试克服这些问题。在这个过程中，这些人或许会经常和同事讨论，和上司寻求帮助。在这种沟通的过程中，上司和同事也会从中认可这些人个人的想法和部分能力。当这些能力在未来逐步提高之后，他们会被获得更多的认可以及奖励。部分人可能会有涨薪资的可能性。
                        </p>
                        <p>
                            很多人可能不会持续性地去询问或者去请教其他人因为他们认为自己已经有足够的工作能力，但是他们却在现实中并没有发挥的很好。这群人没办法获得有效的奖励和好的认可。
                        </p>
                    </div>
                </div>
                `
        }
        res.json(content)
    } else {
        res.json(null)
    }
});

app.post('/Q2_2', async (req, res) => {
    const body = req.body;
    let language = body.content
    let content = '';
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(cartItem)
    if (session.payment_status === 'paid' && cartItem.includes("Q2_2")) {
        if (language === "English") {
            content =
                `
                <div className='eachNews_container'>
                <h1>Q2 How can the operating conditions improve children's grades?</h1>
                <div className='infoText'>Paid (Please save instantly. Purchase information WILL NOT store)</div>
                <div className='mainText'>
                    <p>
                        Many parents have reported that their children are unable to concentrate in class, do not ask questions or complete homework on time after class, and often score low or even fail exams. Many parents believe this is due to their children's poor study habits. Normally, children should develop good study habits, so that they do not easily lose focus in class. However, in many cases, due to the different environments that children are in, this method cannot be applied to every child. It takes a long time to develop good habits.
                    </p>
                    <p>
                        There is a theory in psychology called "operating conditions", which is also called "operational conditioning". It is a learning method that uses rewards and punishments to change behavior. Many parents may have used this method in their daily lives, but children's grades have not improved as a result. This is because they do not truly understand how to use it.
                    </p>
                </div>
                <img src='./img/p11.png' />
                <div className='additionalText '>
                    <p>
                        Negative reinforcement is one of the categories of conditional use. Negative reinforcement occurs when something unpleasant or uncomfortable is removed or taken away to increase the likelihood of expected behavior. This concept sounds easy, but it is difficult to apply it in real life to achieve good results. So, how can parents accurately use it?
                    </p>
                    <p>
                        The child's mother or father can ask them to review today's class content before starting their homework when the child comes home from school. After the child has finished their homework, they can review the content again. Many children may not want to do this at first, and they may show some emotions. Therefore, parents do not need to tell their children how long to review the content at first. They can observe their children's review situation and decide for themselves. Because consolidating classroom content is very necessary. When a child reviews slowly, it indicates that they did not listen carefully in class, and parents should help review the content with the child. If the child is unwilling to concentrate, they can buy a picture book to replace the original textbook to review the content. After helping the child review the content, ask the child to recite the content. If they answer incorrectly, set a review time for them. Parents can make the review time longer than the class time in the classroom. At this time, children are likely to be afraid of reviewing, and they may try their best to consolidate the content with their parents. Some children may still be unwilling to review. Their parents may threaten to reduce their time watching cartoons to make them review. I think in this case, children are likely to rebel or have negative emotions. Parents can ask their children to observe the living habits of small animals. Mirror neurons, or empathy, are very effective for children. When children see a small hamster searching for food in a maze, they can imagine themselves in this situation and believe that they should study hard. If they don't study hard, they will receive a punishment that prolongs their review time. Children may try to avoid this punishment in the future.
                    </p>
                    <p>
                        This method actually has some effect to some extent, and children's grades can also be improved.
                    </p>
                </div>
            </div>
                `
        } else {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q2 运作条件是如何让孩子提高成绩的？</h1>
                    <div className='infoText'>已付费（请注意即时保存，关闭网页清除购买信息）</div>
                    <div className='mainText'>
                        <p>
                            有很多家长反应他们的孩子在上课期间无法集中注意力，课后也没有及时询问老师并且作业没办法按时完成。孩子在考试时候经常会出现分数不高甚至很低。很多家长认为这是他们的学习习惯不够好导致的。正常来说，孩子平时应该养成良的学习作息，这样他们不会容易上课不集中。然而，很多时候，由于孩子身处的环境不同，并没办法将这个方法对应到每个孩子们身上。因为养成良好的作息是需要长时间积累的。
                        </p>
                        <p>
                            心理学上有一个叫做运作条件的理论，同时也叫做操作性条件反射。它是一种使用奖励和惩罚来改变行为的学习方法。可能很多家长在日常当中使用过这个方法，但是孩子们的成绩并没有就此提高。这是因为他们没有真正了解它如何运用。
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            其中负强化属于运用条件的其中一种类别。当不愉快或不舒服的东西被移除或带走，以增加期望行为的可能性时，就会出现负强化。这个概念听上去很容易，但是将它真正用在生活上并且得到好的效果的话比较难。那么家长应该如何准确地运用它呢？
                        </p>
                        <p>
                            孩子的母亲或者父亲可以当孩子们放学回家后，提出让他们先复习一下今天上课所学的知识再进行作业的要求。等孩子们完成作业后，他们可以再复习一遍内容。很多孩子可能一开始不愿意这么去做，他们可能会表现出一些情绪。所以家长在一开始不需要告诉孩子们的复习长短，他们可以先观察一下孩子们自身复习的情况而决定。因为巩固上课内容其实是非常有必要的。当一个孩子复习的比较慢，说明他上课时候没有认真听讲，家长应该先帮助孩子复习一遍。如果孩子不愿意集中注意力，他们可以买一本有画面的书代替原来的教科书去复习内容。等他们帮助孩子复习一遍之后，让孩子复述出来一遍内容，如果答错了就要给他们设立复习时间。家长可以把复习时间超过平时教室里每一节课上课的时长。通常这个时候孩子容易对复习产生恐惧，他们可能会尽可能地和自己的父母一起认真地巩固上课内容。部分孩子可能还是不愿意去复习内容，他们的家长可能会以减少他们的看动画片时间来威胁他们复习。我认为这样的情况孩子容易会产生叛逆或者不好的情绪。家长可以让孩子们去观察一下小动物的生活习惯。心理学上的镜像神经元，也叫做代入感对于小孩是非常有效的。当孩子们看到一只小仓鼠在迷宫中不停地找吃的，他们会被代入进去这种情景当中并且认为自己应该好好学习，如果不好好学习他们会遭受延长复习的惩罚，孩子们可能会在之后尽量去避免这个惩罚。
                        </p>
                        <p>
                            这种方法其实有一定的效果在某种程度上，孩子的成绩也可以得到一些提升。
                        </p>
                    </div>
                </div>
                `
        }
        res.json(content)
    } else {
        res.json(false)
    }
});

app.post('/Q2_3', async (req, res) => {
    const body = req.body;
    let language = body.content
    let content = '';
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(cartItem)
    if (session.payment_status === 'paid' && cartItem.includes("Q2_3")) {
        if (language === "English") {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q3 Deeply analyzing the impact of a couple's marriage on their children</h1>
                    <div className='infoText '>Paid (Please save instantly. Purchase information WILL NOT store)</div>
                    <div className='mainText'>
                        <p>As we all know, parents' emotions can affect their children's growth. When a child is a few months old and the parents divorce, the mother raises the child alone and the father never cares or provides child support. As the child grows up, they may develop symptoms such as autism or antisocial personality. Even though the child's mother tries her best to give love to her child, the child still misses the love of a father. This is because the love of a family needs to be complete. The love that fathers and mothers give to their children is often different. For example, fathers usually go to work and then come home to eat, while mothers usually clean the house, cook, sweep and mop. On the one hand, when children grow up in this kind of life for a long time, their subconscious will more strongly yearn for a complete life. If the father is not involved in the child's life, and the mother is alone in working and taking care of the household chores, there will usually be some missing parts in their subconscious. This is why many people have a fatherly love fetish and look for much older boys as their partners.</p>
                        <p>
                            On the other hand, many fathers will buy toys for their children and take them out to play, while mothers are usually at home teaching and assisting with homework, etc. In this case, children need to experience the feeling of being loved by both parents at the same time. Once the parents' emotions become problematic, it will have a huge impact on a few-month-old child. They may be unwilling to make friends or be good at talking to people when they grow up. This is because these children's sensory systems are usually very sensitive. When parents argue while their child is sleeping, or even argue extremely loudly, the child starts to cry in bed, but the parents do not pay any attention to their child and continue to quarrel. Over time, the child may become very lonely and unwilling to talk to anyone. They usually hide in the corner and watch other children play. They are not good at interacting with teachers in the classroom because they are afraid that their answer is wrong and their classmates will make fun of them.
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            So, parents should try not to let their children see them arguing when they have conflicts. If one day the child sees their parents quarreling, the parents should try to show their friendly side to their children after the quarrel and play their roles appropriately. For example, a girl inadvertently sees her mother and father quarreling when she comes home from school, and her first reaction is to be scared. During dinner, the girl's mother cares a lot about her daughter's school life, and her father keeps putting food on her plate and telling her to eat more. After dinner, her father proactively washes dishes and makes some jokes with the girl's mother. In the long run, the girl may not subconsciously think that they will distance themselves from her in the future, and the argument between her parents is just temporary. However, when parents quarrel to the point of divorce, the child is usually very sad and will tell their classmates that their father or mother does not want them anymore. This is unfair to them. Many children will become very introverted and unwilling to make friends at this time.
                        </p>
                        <p>
                            Even if parents have arguments due to issues related to their children after marriage, they should try to consider each other more and make appropriate compromises. On the other hand, if children see that their parents often compromise with each other, they will follow suit in the future. This is due to the mirror neuron system. Mirror neurons involve empathy, and people subconsciously absorb information from the outside world and experience the same feelings.
                        </p>
                        <p>
                            Therefore, parents' marriage has a huge impact on their children. We must not easily ignore them.
                        </p>
                    </div>
                </div>
                `
        } else {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q3 深层次解析两个人的婚姻生活对孩子的影响？</h1>
                    <div className='infoText '>已付费（请注意即时保存，关闭网页清除购买信息）</div>
                    <div className='mainText'>
                        <p>
                            众所周知，父母的感情会影响到孩子们的成长。当一名孩子在出生几个月大的时候，父母就离婚了，母亲从小把孩子带大，他的父亲从来不闻不问，也不给他们抚养费。等孩子长大之后，可能会有自闭症或者反社会人格等症状。尽管孩子的母亲尽可能地把自己的爱给她的孩子，但是孩子还是缺失了父爱。因为一个家庭的爱是需要完整的。父亲和母母给到孩子的爱往往是不一样的。比如父亲通常是上班下班然后等着回家吃饭。而母亲通常负责在家里打扫卫生，做饭扫地拖地等。一方面，当孩子长期在这种生活下长大，他们的潜意识里会更加地向往生活。如果父亲不在孩子生活当中，而是母亲一个人上班下班并且做饭等，通常在他们潜意识里还是会有一些空缺的部分。这就是为什么很多人有恋父情节，她们会找一些比自己年纪大很多的男生作为对象。
                        </p>
                        <p>
                            另一方面，很多父亲会给孩子买玩具，带孩子出去玩。而母亲通常是在家经常教导自己的孩子，给他们辅导作业等。这种情况下，孩子需要体验这种同时被父母关爱的感觉。一旦父母的感情出现问题，这会对于几个月大的孩子产生巨大的影响，他们可能长大之后不愿意交朋友或者不擅长和人说话。因为这类孩子通常的感官系统非常敏锐。当父母在孩子睡觉的时间吵架，甚至闹的不可开交的地步，他们的孩子开始在床上嚎啕大哭，孩子的父母并不理会自己的孩子而是选择继续吵架。时间久了，等孩子长大之后很可能会变得非常孤僻并且不愿意和人说话。他们通常会躲在角落里看着其他小孩在一起玩。在教室里也不擅长和老师互动，他们害怕自己的答案是错的而导致班里同学们笑话他们。
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            所以父母在闹矛盾的时候尽量不要让孩子看到，如果某一天孩子看到他们的父母在吵架，父母也应该在吵架过后尽量在自己的孩子面前展现出友好的一面并且扮演好他们的角色。举个例子，一名女孩无意间放学回家看到自己的妈妈和爸爸在争吵，她第一反应是比较害怕。在吃晚饭的时候，女孩的妈妈却非常关心孩子在学校里的生活，她的父亲不停地给孩子夹菜并且嘱咐她多吃点。吃完饭后，女孩的父亲积极地去洗碗并且对孩子的母亲开一些玩笑。时间久了，女孩可能潜意识里不会认为他们在未来会疏远她，自己爸爸妈妈的吵架只是一时的。然而，当父母吵得不可开交到离婚地步时候，孩子通常会非常难过并且会在学校和同学说自己的爸爸或者妈妈不要他们了。这对于他们来说是不公平的。很多孩子会在这个时候开始变得非常内向并且开始不交朋友。
                        </p>
                        <p>
                            即使父母在婚后遇到一些因为孩子的问题引发的争吵的时候，他们也需要尽可能地多为彼此考虑并且做出适当的妥协。另一方面，孩子如果看到父母两个人会经常妥协，他们之后也会照做。这就是镜像神经元导致的。镜像神经元涉及到代入感，人会潜意识地吸收外界的信息然后体会同样的感受。
                        </p>
                        <p>
                            所以父母的婚姻生活对孩子有着很大的影响。我们不能轻易忽视一些小小的细节。这些小细节可能也会导致孩子的不自信以及形成其他方面的坏习惯。
                        </p>
                    </div>
                </div>
                `
        }
        res.json(content)
    } else {
        res.json(false)
    }
});

app.post('/Q3_1', async (req, res) => {
    const body = req.body;
    let language = body.content
    let content = '';
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(cartItem)
    if (session.payment_status === 'paid' && cartItem.includes("Q3_1")) {
        if (language === "English") {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q1 The impact of defense mechanisms that unintentionally occur on people's daily lives?</h1>
                    <div className='infoText '>Paid (Please save instantly. Purchase information WILL NOT storen)</div>
                    <div className='mainText'>
                        <p>Have you ever experienced going out in the rain without an umbrella, only to have your clothes drenched and your shoes soaked, leaving your socks wet as you walk? At moments like these, your emotions can become overwhelming, and you might hurry back home and snap at your mother when she asks why you came back so late, stating that you are not in the mood to talk. This is an example of a defense mechanism.</p>
                        <p>
                            Defense mechanisms were first introduced by psychologist Sigmund Freud, and refer to ways in which the self controls terrifying things outside of consciousness to reduce or avoid anxiety. However, there are various forms of defense mechanisms, including denial, distortion, and projection. Projection is the most commonly seen defense mechanism in daily life. However, projection can be harmful at times, since it might prevent people from accepting responsibility for their own thoughts and actions. For instance, a person who is having an affair might accuse their partner of being unfaithful. They might go on dates with other people while dating their girlfriend, and send flirtatious messages on their phone. However, this person might also frequently check their girlfriend's phone and be suspicious if there are any messages from men. Over time, they might fight and even break up due to such issues. This actually results from projection, in which they fear being abandoned or their girlfriend being unfaithful, even though they themselves are not being faithful.
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            Another example is of parents who force their children to learn a particular art form, such as playing the piano for hours after school every day, even if the child dislikes it. Many well-off parents are strict with their children's education and send them to supplemental classes, art classes or painting classes, but the children are often not enthusiastic about these classes. In such cases, the parent might transfer their own unfinished goals to their child. Similarly, people who lack self-confidence might present themselves as confident in front of others.
                        </p>
                        <p>
                            Projection is a common defense mechanism that can have negative impacts on life, but it often occurs unconsciously. However, I believe that some people can avoid this behavior by linking their thoughts to their environment, which can help reduce the likelihood of negative projection. For example, if a mother loves painting but was unable to realize her dream since childhood, she might become interested in dance in college and practice it relentlessly, achieving some success. When her child grows up, she will respect her child's personal interests and not force her own desires onto her child. In this case, the projection behavior will be reduced. I will delve into this topic in more detail in my analysis.
                        </p>
                    </div>
                </div>
                `
        } else {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q1 无意间所产生的防御机制因素对人们日常的影响</h1>
                    <div className='infoText '>已付费（请注意即时保存，关闭网页清除购买信息）</div>
                    <div className='mainText'>
                        <p>
                            你是不是经历过出门下雨忘带雨伞然后雨水浸湿了你的衣服，你脚下的鞋子也已经被雨水浸湿了以至于你走起路来你的袜子湿漉漉的。这时候你的情绪非常奔溃，你赶紧跑回家，然后你的妈妈问你为什么这么晚才回来，你非常大声地朝着她表示你现在心情不好，不想说话。这是其中一个防御机制的例子。
                        </p>
                        <p>
                            防御机制（defense mechanisms）这个理论最早由心理学家弗洛伊德提出的。它是指自我将可怕的东西控制于意识之外以减少或避免焦虑的方法。然而，防御机制产生的形式有很多种，比如Denial否定，Distortion扭曲，Projection投射等。在日常中，我们最常见到保护机制是投射。投射有时候是有害的，它可能会阻止人们接受并为自己的想法和行为负责。举个例子，一个有外遇的人可能指责他们的伴侣不忠。他可能在和自己女朋友交往的期间多次和另外的女人约会，手机里的聊天记录也经常发送着两个人暧昧的对话。然而，这个男人却经常查看女朋友的手机并认为她有背叛倾向。如果女朋友手机里的聊天内容涉及男性之类的话语，他会非常警觉。久而久之，两个人经常会因为这些事情吵架导致分手。这其实是投射造成的。在他的潜意识里，他还是害怕被抛弃的或者自己女朋友对他有不专一的行为。但是他自己的行为已经不专一。
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            还有个例子就是很多孩子小时候非常讨厌学习一门艺术，比如每天放学就是练习弹钢琴，他们的妈妈强迫他们的孩子学习钢琴因为这是她从小的梦想。她希望自己的孩子长大之后能成为一名钢琴家。所以你会发现很多家庭条件好的父母对孩子的教育非常严格并且经常让他们去一些补习班，艺术班和画画班等。你会发现大部分这些孩子内心并不是特别乐意去学习的。在这种情况，孩子妈妈把内心当中没法完成的事情尝试转移给自己的孩子去完成。就像一个人内心自卑却在外人面前表现出非常自信。
                        </p>
                        <p>
                            投射是个非常常见的防御机制。它对生活当中可能是存在不好的影响的，但是又是无意识地。然而，我认为有部分人却可以避免不好的投射的发生。因为我认为每个人身处的环境会链接到他们的想法当中，这可以适当避免不好的投射的发生。 举个例子，一位孩子的妈妈非常喜欢画画，但是在她小时候没有画画的条件导致她并没有实现这个梦想。这位孩子的妈妈上了大学之后，在某一次活动中接触到了舞蹈，她开始不断地练习跳舞并且取得了一些成绩。等她的孩子长大一点之后，她会非常尊重孩子的个人爱好，不会把自己想要实现的东西强加在自己孩子身上。这种情况下，投射的行为就会减小。我也会具体在之后的分析当中深入这个话题。
                        </p>
                    </div>
                </div>
                `
        }
        res.json(content)
    } else {
        res.json(false)
    }
});

app.post('/Q3_2', async (req, res) => {
    const body = req.body;
    let language = body.content
    let content = '';
    const cartItem = req.body.cartItem;
    const session_id = req.body.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(cartItem)
    if (session.payment_status === 'paid' && cartItem.includes("Q3_2")) {
        if (language === "English") {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q1 How can a child with procrastination overcome this through reinforcement in psychology?</h1>
                    <div className='infoText '>Paid (Please save instantly. Purchase information WILL NOT store)</div>
                    <div className='mainText'>
                        <p>In the company, several colleagues are discussing their own topics. At this time, you really want to join in, but you realize that the topic they are discussing is not something you can understand. At first, you may try to say a few words, but then you find that they can chat better without you. They don't really care about your words. However, you really hope to play with them. You are afraid that if they don't have a good relationship with you, they will easily talk behind your back.</p>
                        <p>
                            This is actually caused by being too concerned about other people's opinions. When you are too concerned about other people's opinions, you will try to lower your posture and raise others. I believe that self-efficacy has a certain impact when facing other people's opinions. Psychologist Albert Bandura defined self-efficacy as people's belief that they have the ability to control things around them. At the same time, it is also a person's belief in his or her ability to succeed in a specific situation.
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            So how does self-efficacy relate to this topic? Self-efficacy includes mastery experiences, vicarious experiences, social persuasion, and personal emotional states. Social persuasion and personal emotional states can be related to this topic. Social persuasion and personal emotional states involve whether you have high self-efficacy. When you were young, no one encouraged your dreams, and even teased you about your future dreams. When you grow up, you may be afraid to say something you want to say to someone. At this time, your self-efficacy will be relatively low. Many times, you can't blend into other people's circles because you dare not express your ideas. You may not be able to deliberately follow their ideas and let them listen carefully to your personal ideas. At the same time, this is also a manifestation of your lack of confidence. You need to constantly remind yourself that you can achieve your goals.
                        </p>
                        <p>
                            Next, I will talk about personal emotional states. When you have not completed a job, you begin to feel anxious and lazy. Over time, you may also find it difficult to control your anxiety when facing others. If someone criticizes you for your dressing today, you may change to a different type of clothing the next day. In this case, your self-efficacy is relatively low, and you cannot control your emotions properly. This will also cause you might be able to care about others' opinions of you when facing them. If you can handle emotional problems such as anxiety well on weekdays, your self-efficacy will increase, and you will not be easily affected by others' opinions of yourself.
                        </p>
                        <p>
                            Self-efficacy not only allows you to gain more abilities and achievements, but also plays an important role in many aspects of life. We need to use them well through various psychological theories. If you have high self-efficacy, when you face your colleagues, you may show a more confident side, and you don't even need to deliberately try to initiate a conversation with these people.
                        </p>
                    </div>
                </div>
                `
        } else {
            content =
                `
                <div className='eachNews_container'>
                    <h1>Q2 用某种心理角度探讨太在意他人眼光的人应该如何相处？</h1>
                    <div className='infoText '>已付费（请注意即时保存，关闭网页清除购买信息）</div>
                    <div className='mainText'>
                        <p>
                            在公司里，几名同事在讨论一些她们自己的话题。这个时候，你非常想加入进去，但是你发现她们讨论的话题不是你能听懂的。一开始你可能会尝试应和两句，之后你发现她们几个人更能够聊到一起。她们并没有太在意你的话语。你内心却非常希望自己和她们能够玩到一起。你怕她们如果和你关系不那么好，她们很容易在背后议论你。
                        </p>
                        <p>
                            这其实是由于你太在意其他人眼光而导致的。当你太在意其他人的眼光的时候，你会尝试放低自己的姿态并且去抬高其他人。我认为自我效能在面对其他人眼光时候具有一定影响。 心理学家阿尔伯特·班杜拉将自我效能定义为人们相信自己有能力控制自己身边的事物。同时，它也是一个人对自己在特定情况下取得成功的能力的信念。那么自我效能是如何和这个话题联系起来的呢？自我效能包括掌握经验，替代经验，社会说服和和个人情绪状态。其中的社会说服和和个人情绪状态可以联系到这个话题当中。
                        </p>
                    </div>
                    <img src='./img/p11.png' />
                    <div className='additionalText '>
                        <p>
                            社会说服和个人情绪状态涉及到你是否拥有有高的自我效能。当你很小的时候，没有人鼓励你的梦想，甚至对于你未来的梦想进行挖苦。等你长大之后，你面对一些人的时候你会害怕说出一些你想说出来的话。这时候你的自我效能会比较低。很多时候，你不能融入其他人圈子是因为你不敢表达你的想法。你可能没办法做到不去刻意追随他们的想法并且让他们去认真听从你的个人想法。同时，这也是你不自信的表现。你需要经常告诉自己你可以实现想实现的目标。
                        </p>
                        <p>
                            接下来我来说一说个人情绪状态。当你没有完成一份工作的时候就开始焦虑并且懒散起来。时间久了，你也容易会无法很好地控制你的焦虑情绪在面对他人时。如果有人批评你今天着装很丑，你可能隔天会换一件不同类型的衣服。在这种情况下，你的自我效能比较低，你无法正确地控制自己的情绪。这也会导致你没办法在面对其他人眼光时候，你不去在意他们对你的想法。如果你能够很好地在平日里应付焦虑等情绪问题，你的自我效能会增加，你不会很容易地因为其他人的想法而去影响你的自我情绪。
                        </p>
                        <p>
                            自我效能不光让你获得更多的能力和成就，在生活中很多方面也可以起到重要的作用。我们需要通过不同的心理学理论去很好地运用它们。如果你有很高的自我效能，你面对你的同事，你可能会表现出更加自信的一面，甚至你也不需要去刻意和这些人产生话题。
                        </p>
                    </div>
                </div>
                `
        }
        res.json(content)
    } else {
        res.json(false)
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});