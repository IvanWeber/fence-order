<?php 

if(mail('ivanbdn@yandex.ru','тестовое задание, заказ забора 1275', $_POST['name-input'] . ', заказ 1275 сформирован. В ближайшее время наш специалист свяжется с вами по телефону ' . $_POST['phone-input'] . '.', 'Content-type: text/html; charset=utf-8')){
    echo $_POST['name-input'] . ', заказ 1275 сформирован, мы повторили его комплектацию на почту ' . $_POST['email-input'] . '. В ближайшее время наш специалист свяжется с вами по телефону ' . $_POST['phone-input'] . '.';
}
else{
    echo 'Ошибка отправки сообщения.';
}

?>