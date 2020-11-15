<?php 

if(mail('ivanbdn@yandex.ru','тестовое задание, заказ забора 1275', $_POST['name-input'] . ', заказ 1275 сформирован. В ближайшее время наш специалист свяжется с вами по телефону ' . $_POST['phone-input'] . '.', 'Content-type: text/html; charset=utf-8')){
    echo '<p class="ajax-result-par-1">' . $_POST['name-input']  . '<br> заказ № 1275 сформирован!</p><p class="ajax-result-par-2">Мы повторили его комплектацию на почту<br> ' . $_POST['email-input']  . ' </p><p class="ajax-result-par-3">В ближайшее время наш специалист<br> свяжется с вами по телефону<br> ' . $_POST['phone-input']  . '</p>';
}
else{
    echo 'Ошибка отправки сообщения.';
}

?>