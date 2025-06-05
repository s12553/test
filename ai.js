// 主内容数据对象
const contentData = {
    chinese: chineseData,
    english: englishData,
    math: mathData,
    others: othersData
};

// 当前状态
let currentState = {
    category: null,
    subcategory: null,
    article: null
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    generateCategoryCards();
});

// 生成分类卡片
function generateCategoryCards() {
    const container = document.querySelector('.categories');
    container.innerHTML = '';
    
    for (const categoryId in contentData) {
        const category = contentData[categoryId];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => showSubcategories(categoryId);
        
        card.innerHTML = `
            <div class="category-icon">
                <i class="${category.iconClass}"></i>
            </div>
            <div class="category-content">
                <h3 class="category-title">${category.title}</h3>
                <p class="category-desc">${category.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    }
}

// 显示子类
function showSubcategories(categoryId) {
    const category = contentData[categoryId];
    if (!category) return;
    
    currentState.category = categoryId;
    currentState.subcategory = null;
    currentState.article = null;
    
    const subContainer = document.getElementById('subcategoriesContainer');
    subContainer.innerHTML = '';
    subContainer.className = 'active';
    
    category.subcategories.forEach(sub => {
        const btn = document.createElement('div');
        btn.className = 'subcategory-btn';
        btn.onclick = () => showArticles(categoryId, sub.id);
        btn.innerHTML = `
            <i class="${sub.icon}"></i>
            <span>${sub.title}</span>
        `;
        subContainer.appendChild(btn);
    });
    
    // 隐藏文章
    document.getElementById('articleContainer').style.display = 'none';
}

// 显示文章列表
function showArticles(categoryId, subId) {
    const category = contentData[categoryId];
    const subcategory = category.subcategories.find(sub => sub.id === subId);
    if (!subcategory) return;
    
    currentState.subcategory = subId;
    currentState.article = null;
    
    const subContainer = document.getElementById('subcategoriesContainer');
    subContainer.innerHTML = '';
    subContainer.className = 'active';
    
    subcategory.articles.forEach(article => {
        const btn = document.createElement('div');
        btn.className = 'subcategory-btn';
        btn.onclick = () => showArticle(categoryId, subId, article.id);
        btn.innerHTML = `
            <i class="fas fa-file-alt"></i>
            <span>${article.title}</span>
        `;
        subContainer.appendChild(btn);
    });
}

// 显示具体文章
function showArticle(categoryId, subId, articleId) {
    const category = contentData[categoryId];
    const subcategory = category.subcategories.find(sub => sub.id === subId);
    const article = subcategory.articles.find(art => art.id === articleId);
    
    currentState.article = articleId;
    
    const articleContainer = document.getElementById('articleContainer');
    articleContainer.innerHTML = `
        <div class="article-header">
            <h2 class="article-title">${article.title}</h2>
            <button class="back-btn" onclick="backToArticles('${categoryId}', '${subId}')">
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>
        <div class="article-body">
            ${article.content}
        </div>
    `;
    
    articleContainer.style.display = 'block';
}

// 返回文章列表
function backToArticles(categoryId, subId) {
    showArticles(categoryId, subId);
    document.getElementById('articleContainer').style.display = 'none';
}

// 模拟AI问答功能
function askAI() {
    const question = document.getElementById('aiQuestion').value;
    if (!question.trim()) {
        alert('请输入问题');
        return;
    }
    
    const responseArea = document.getElementById('aiResponse');
    responseArea.style.display = 'block';
    responseArea.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> 正在思考中...</p>';
    
    // 模拟API请求延迟
    setTimeout(() => {
        // 在实际应用中，这里会调用DeepSeek API
        // 以下是模拟的响应
        let response = '';
        
        if (question.includes('英语') || question.includes('English')) {
            response = `<p><strong>关于英语学习，建议：</strong></p>
            <ul>
                <li>每天坚持阅读英文文章，可以从简单的新闻开始</li>
                <li>使用记忆软件如Anki来记忆单词</li>
                <li>找语言交换伙伴进行口语练习</li>
                <li>观看英语影视剧，使用英文字幕</li>
            </ul>
            <p>学习语言的关键在于坚持和沉浸式学习环境。</p>`;
        } else if (question.includes('数学') || question.includes('math')) {
            response = `<p><strong>数学学习技巧：</strong></p>
            <ul>
                <li>理解概念比死记硬背更重要</li>
                <li>多做习题，特别是不同类型的题目</li>
                <li>学习时尝试向他人解释概念，这能加深理解</li>
                <li>建立错题本，定期复习</li>
            </ul>
            <p>数学是不断练习和思考的学科，不要害怕犯错。</p>`;
        } else {
            response = `<p>感谢您的提问！在真实环境中，这里会通过DeepSeek API提供专业的解答。</p>
            <p>您的问题是："${question}"</p>
            <p>为了获得更准确的回答，请确保问题具体明确，包含学科领域和具体问题点。</p>`;
        }
        
        responseArea.innerHTML = response;
    }, 1500);
}

// 添加一个简单的面包屑导航功能
function updateBreadcrumb() {
    // 在实际实现中可以添加面包屑导航
}