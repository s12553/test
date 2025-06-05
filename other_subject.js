// 其他学科内容
const othersData = {
    title: "其他学科",
    description: "科学、历史、艺术等拓展知识",
    iconClass: "fas fa-atom",
    subcategories: [
        { 
            id: "science",
            title: "科学", 
            icon: "fas fa-flask",
            articles: [
                {
                    id: "physics",
                    title: "基础物理概念",
                    content: `<h3>牛顿运动定律</h3>
                    <p><strong>第一定律（惯性定律）</strong>：物体在不受外力作用时，保持静止或匀速直线运动状态</p>
                    <p><strong>第二定律</strong>：F=ma，力等于质量乘以加速度</p>
                    <p><strong>第三定律（作用与反作用）</strong>：两个物体之间的作用力和反作用力总是大小相等，方向相反</p>
                    
                    <h3>能量守恒定律</h3>
                    <p>在一个封闭系统中，能量既不会凭空产生，也不会凭空消失，它只会从一种形式转化为另一种形式，或者从一个物体转移到其它物体，而能量的总量保持不变。</p>`
                }
            ]
        }
    ]
};