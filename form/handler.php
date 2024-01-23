<?php

// Разрешаем запросы из любого источника 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Получаем данные из GET-запроса
$data = isset($_GET['data']) ? $_GET['data'] : '';

// Отправляем данные обратно
echo $data;


