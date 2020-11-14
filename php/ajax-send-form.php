<?php 

if(mail($_POST['email'],'Письмо от ' . $_POST['name'], $_POST['name'] . ', заказ' . random_int(100, 999) . ' сформирован. В ближайшее время наш специалист свяжется с вами по телефону ' . $_POST['phone'] . '.','Content-type: text/html; charset=utf-8')){
    echo 'Сообщение отправлено!';
}
else{
    echo 'Ошибка отправки сообщения.';
}

?>