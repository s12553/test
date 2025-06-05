// 数学学习内容
const mathData = {
    title: "数学",
    description: "代数、几何、微积分等数学知识",
    iconClass: "fas fa-calculator",
    subcategories: [
        { 
            id: "algebra",
            title: "代数", 
            icon: "fas fa-superscript",
            articles: [
                {
                    id: "quadratic",
                    title: "二次方程解法",
                    content: `<h3>二次方程的一般形式</h3>
                    <p>ax² + bx + c = 0 (a ≠ 0)</p>
                    
                    <h3>求解方法</h3>
                    <p><strong>因式分解法</strong>：适用于可因式分解的方程</p>
                    <p>例：x² - 5x + 6 = 0 → (x-2)(x-3)=0 → x=2 或 x=3</p>
                    
                    <p><strong>配方法</strong>：将方程化为完全平方形式</p>
                    <p>例：x² + 6x + 5 = 0 → (x+3)² - 4 = 0 → (x+3)²=4 → x=-1 或 x=-5</p>
                    
                    <p><strong>公式法</strong>：使用求根公式</p>
                    <p>x = [-b ± √(b² - 4ac)] / (2a)</p>
                    <p>例：2x² + 5x - 3 = 0 → x = [-5 ± √(25+24)]/4 → x=0.5 或 x=-3</p>`
                }
            ]
        }
    ]
};