function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.textContent = "🙈";  // Biểu tượng khi hiển thị mật khẩu
    } else {
        passwordInput.type = "password";
        eyeIcon.textContent = "👁️‍🗨️";  // Biểu tượng khi ẩn mật khẩu
    }
}

// Kiểm tra định dạng email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm validate form trước khi gửi
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        alert("Vui lòng nhập đúng định dạng email.");
        return false;
    }

    if (password.trim() === "") {
        alert("Vui lòng nhập mật khẩu.");
        return false;
    }

    return true;
}