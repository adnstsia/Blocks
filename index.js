$(document).ready(function () {
  // При открытии страницы появляется модальное окно с надписью "Привет, мир"
  alert("Привет мир");

  // Верхний блок с заголовком скрываетя/появляется при нажатии на кнопку 1
  $("#hideButton").click(function () {
    // Используем toggle для переключения видимости блока
    $("#containerTop").toggle();
  });

  // В центральном блоке первый блок меняется со вторым местами при нажатии на кнопку 2
  $("#swapButton").click(function () {
    // Находим нужные блоки
    var $block1 = $("#block1");
    var $block2 = $("#block2");

    // Временный блок для удобства перестановок
    var $storage = $("<div>");

    // Переносим временный блок после блока1
    $block1.after($storage);

    // Переносим блок1 после блока2
    $block2.after($block1);

    // Переносим блок2 после временного блока
    $storage.after($block2);

    // Удаляем временный блок
    $storage.remove();
  });
});
