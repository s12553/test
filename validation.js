function validateForm(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const password = document.getElementById("password").value;

    if (password === "AngerAndHowlingNoOneKnowsForSure") { // 验证密码是否正确
        alert("✅ ");
        document.getElementById("overlay").style.cssText = "display: hidden !important;"; // 隐藏覆盖层
    } else {
        alert("❌ ");
    }
}
