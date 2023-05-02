<?php
if (isset($_POST['submit'])) {
    // Проверяем корректность заполнения полей формы
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['subject']) && !empty($_POST['message'])) {
        $to = 'apanov222@gmail.com'; // Адрес, на который будет отправлено письмо
        $name = htmlspecialchars($_POST['name']); // Обезопасим данные от XSS-атак
        $email = htmlspecialchars($_POST['email']);
        $subject = htmlspecialchars($_POST['subject']);
        $message = htmlspecialchars($_POST['message']);
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        // Отправляем письмо
        if (mail($to, $subject, $message, $headers)) {
            // Если письмо отправлено успешно, выводим сообщение об успешной отправке
            echo '<script>document.getElementById("info").innerHTML = "Письмо отправлено успешно";</script>';
        } else {
            // Если письмо отправить не удалось, выводим сообщение об ошибке
            echo '<script>document.getElementById("info").innerHTML = "Не удалось отправить письмо";</script>';
        }
    } else {
        // Если какое-то поле формы не заполнено, выводим сообщение о необходимости заполнить все поля
        echo '<script>document.getElementById("info").innerHTML = "Пожалуйста, заполните все поля формы";</script>';
    }
}
?>
