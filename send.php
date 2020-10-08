<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
if (!empty($_POST["tel"])) { 

$tel = $_POST['tel'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'sibapp'; // Логин на почте
    $mail->Password   = 'Ghj100sibapp'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sibapp@yandex.ru', 'sibapp'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('sibapp@yandex.ru');  
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Заявка';
        $mail->Body    = "<b>Телефон:</b> $tel <br>";
// Проверяем отравленность сообщения


if ($mail->send()) {
    $result = array(
    	'tel' => $_POST["tel"],
    ); 

    // Переводим массив в JSON
    echo json_encode($result);
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
} else {
    $result = array(
    	'tel' => "Введите корректный номер телефона",
    ); 

    // Переводим массив в JSON
    echo json_encode($result);
}