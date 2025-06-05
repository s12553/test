// 中文学习内容
const chineseData = {
    title: "中文学习",
    description: "古典文学、现代汉语、写作技巧等资源",
    iconClass: "fas fa-book-open",
    subcategories: [
        { 
            id: "classical",
            title: "古典文学", 
            icon: "fas fa-scroll",
            articles: [
                {
                    id: "tang_poetry",
                    title: "唐诗鉴赏",
                    content: `<h3>唐诗的艺术特点</h3>
                    <p>唐诗是中国古典诗歌的巅峰之作，具有以下艺术特点：</p>
                    <ul>
                        <li><strong>形式多样</strong>：包括五言、七言古诗，绝句，律诗等</li>
                        <li><strong>题材广泛</strong>：山水田园、边塞战争、咏史怀古、送别思乡等</li>
                        <li><strong>意境深远</strong>：通过意象营造出深远的意境</li>
                        <li><strong>语言精炼</strong>：用最简洁的语言表达最丰富的内涵</li>
                    </ul>
                    
                    <h3>代表诗人及作品</h3>
                    <p><strong>李白</strong> - 被称为"诗仙"，代表作《静夜思》、《将进酒》等</p>
                    <p><strong>杜甫</strong> - 被誉为"诗圣"，代表作《春望》、《登高》等</p>
                    <p><strong>王维</strong> - 以山水田园诗著称，代表作《山居秋暝》、《鸟鸣涧》等</p>
                    
                    <h3>学习建议</h3>
                    <p>学习唐诗应注重理解诗歌的创作背景、诗人的生平经历以及诗歌中的意象运用。建议从短小精悍的五言绝句开始，逐步过渡到长篇古风。</p>`
                },
                {
                    id: "dream_red",
                    title: "《红楼梦》解析",
                    content: `<h3>《红楼梦》概述</h3>
                    <p>《红楼梦》是中国古典四大名著之一，作者曹雪芹。小说以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉、林黛玉、薛宝钗的爱情婚姻悲剧为主线，描绘了封建社会的世态百相。</p>
                    
                    <h3>主要人物分析</h3>
                    <p><strong>贾宝玉</strong>：封建社会的叛逆者，厌恶功名利禄，崇尚自由</p>
                    <p><strong>林黛玉</strong>：才情横溢，多愁善感，具有强烈的自尊心</p>
                    <p><strong>薛宝钗</strong>：端庄稳重，深谙世故，是封建礼教的典范</p>
                    
                    <h3>艺术特色</h3>
                    <ul>
                        <li>宏大而精密的结构布局</li>
                        <li>丰富生动的人物形象（共975人）</li>
                        <li>精湛的语言艺术</li>
                        <li>深刻的主题思想</li>
                    </ul>`
                }
            ]
        },
        { 
            id: "modern",
            title: "现代汉语", 
            icon: "fas fa-pencil-alt",
            articles: [
                {
                    id: "grammar",
                    title: "现代汉语语法",
                    content: `<h3>汉语语法特点</h3>
                    <p>现代汉语语法具有以下主要特点：</p>
                    <ul>
                        <li>缺乏严格意义上的形态变化</li>
                        <li>词序和虚词是表达语法意义的主要手段</li>
                        <li>量词丰富</li>
                        <li>有丰富的语气词</li>
                    </ul>
                    
                    <h3>基本句型结构</h3>
                    <p>汉语的基本句型包括：</p>
                    <ol>
                        <li>主谓句：主语 + 谓语（他跑步）</li>
                        <li>主谓宾句：主语 + 谓语 + 宾语（我读书）</li>
                        <li>主谓补句：主语 + 谓语 + 补语（房间打扫干净了）</li>
                        <li>主谓双宾句：主语 + 谓语 + 间接宾语 + 直接宾语（老师教我们知识）</li>
                    </ol>`
                }
            ]
        }
    ]
};