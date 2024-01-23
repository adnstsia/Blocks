// Ждем, пока загрузится весь HTML-документ, чтобы начать выполнение скрипта
document.addEventListener("DOMContentLoaded", () => {
  // Выводим всплывающее окно с приветствием при загрузке страницы
  alert("Привет, мир");

  // Находим кнопку с идентификатором "hideButton" и добавляем к ней событие "click"
  document.getElementById("hideButton").addEventListener("click", () => {
    // Находим элемент с идентификатором "containerTop"
    const containerTop = document.getElementById("containerTop");
    // Изменяем стиль видимости элемента в зависимости от текущего состояния(показываем.скрываем блок)
    containerTop.style.display =
      containerTop.style.display === "none" || containerTop.style.display === ""
        ? "block"
        : "none";
  });

  // Добавляем на кнопку смены блоков местами слушатель на событие клика
  document.getElementById("swapButton").addEventListener("click", () => {
    // Находим элементы с идентификаторами "block1" и "block2"
    const block1 = document.getElementById("block1");
    const block2 = document.getElementById("block2");
    // Создаем временный элемент div для удобства перестановок
    const storage = document.createElement("div");

    // Переносим временный блок после блока1
    block1.parentNode.insertBefore(storage, block1.nextSibling);
    // Переносим блок1 после блока2
    block2.parentNode.insertBefore(block1, block2.nextSibling);
    // Переносим блок2 после временного блока
    storage.parentNode.insertBefore(block2, storage.nextSibling);

    // Удаляем временный блок из DOM
    storage.parentNode.removeChild(storage);
  });
});
