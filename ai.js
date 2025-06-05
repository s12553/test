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

// 配置 DeepSeek API
const DEEPSEEK_API_KEY = "sk-b37e13ccf31048cf8f0824d158428257"; // 替换为您的实际API密钥
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions"; // 根据实际API文档调整

// 回答
async function askAI() {
    const question = document.getElementById('aiQuestion').value.trim();
    if (!question) {
        alert('请输入问题');
        return;
    }
    
    const responseArea = document.getElementById('aiResponse');
    responseArea.style.display = 'block';
    responseArea.innerHTML = '<p><i class="fas fa-spinner fa-spin"></i> 正在思考中...</p>';
    
    try {
        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat", // 根据实际情况调整模型名称
                messages: [
                    {
                        role: "system",
                        content: "你是一个专业的学习助手，专门帮助学生学习中文、英文、数学和其他学科知识。回答要专业、准确且易于理解。"
                    },
                    {
                        role: "user",
                        content: question
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        
        responseArea.innerHTML = formatAIResponse(aiResponse);
    } catch (error) {
        console.error('AI请求错误:', error);
        responseArea.innerHTML = `<p class="error">请求AI助手时出错: ${error.message}</p>`;
    }
}

// 格式化AI回复
function formatAIResponse(text) {
    // 将Markdown格式的列表转换为HTML
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/^- (.*?)(?=\n|$)/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*?<\/li>)+/g, '<ul>$&</ul>');
    
    // 保留换行
    text = text.replace(/\n/g, '<br>');
    
    return text;
}

// 添加一个简单的面包屑导航功能
function updateBreadcrumb() {
    // 在实际实现中可以添加面包屑导航
}
