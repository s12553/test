// 英文学习内容
const englishData = {
    title: "英文学习",
    description: "语法、词汇、阅读与写作提升",
    iconClass: "fas fa-language",
    subcategories: [
        { 
            id: "grammar",
            title: "英语语法", 
            icon: "fas fa-spell-check",
            articles: [
                {
                    id: "tenses",
                    title: "英语时态详解",
                    content: `<h3>英语时态概览</h3>
                    <p>英语共有12种主要时态，分为4个时间（现在、过去、将来、过去将来）和4个状态（一般、进行、完成、完成进行）。</p>
                    
                    <h3>常用时态解析</h3>
                    <p><strong>一般现在时</strong>：表示经常性、习惯性的动作或状态</p>
                    <p>结构：主语 + 动词原形（第三人称单数加s）</p>
                    <p>例句：I work every day. She works in a hospital.</p>
                    
                    <p><strong>现在进行时</strong>：表示正在进行的动作</p>
                    <p>结构：am/is/are + 现在分词</p>
                    <p>例句：They are studying English now.</p>
                    
                    <p><strong>现在完成时</strong>：表示过去发生的动作对现在的影响</p>
                    <p>结构：have/has + 过去分词</p>
                    <p>例句：I have finished my homework.</p>`
                }
            ]
        }
    ]
};