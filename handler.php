<?php

// Разрешаем запросы из любого источника 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Получаем данные из GET-запроса
$data = $_GET['data'];

// Преобразуем JSON-строку в ассоциативный массив
$dataArray = json_decode($data, true);

// Выполняем обработку данных - в этом примере просто отправляем обратно
$response = ['status' => 'success', 'data' => $dataArray];

// Отправляем ответ в формате JSON
header('Content-Type: application/json');
echo json_encode($response);

