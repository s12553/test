function validateForm(event) {
    event.preventDefault();
    const password = document.getElementById("password").value;

    if (password === "123456") {
        alert("✅");
        event.target.submit();
    } else {
        alert(❌");
    }
}
