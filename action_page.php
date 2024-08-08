		
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // 获取表单数据
  $fname = strip_tags(trim($_POST["fname"]));
  $lname = strip_tags(trim($_POST["lname"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $country = strip_tags(trim($_POST["country"]));
  $subject = strip_tags(trim($_POST["subject"]));

  // 验证电子邮件地址
  if (validate_email($email)) {
    // 设置邮件头
    $to = $email;
    $subject = "New Contact Form Submission";
    $headers = "From: your-email@example.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 创建邮件正文
    $message = "You have received a new contact form submission.\n\n";
    $message .= "First Name: " . $fname . "\n";
    $message .= "Last Name: " . $lname . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Country: " . $country . "\n";
    $message .= "Subject: " . $subject . "\n";

    // 发送邮件
    if (mail($to, $subject, $message, $headers)) {
      // 邮件发送成功
      echo "Thank you for your message!";
    } else {
      // 邮件发送失败
      echo "Oops! Something went wrong and your message couldn't be sent.";
    }
  } else {
    // 邮件地址无效
    echo "Please enter a valid email address.";
  }
}

// 验证电子邮件地址函数
function validate_email($email) {
  return filter_var($email, FILTER_VALIDATE_EMAIL);
}
?>