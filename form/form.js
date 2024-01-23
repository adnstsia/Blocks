// Ждем, пока загрузится весь HTML-документ, чтобы начать выполнение скрипта
document.addEventListener("DOMContentLoaded", () => {
  // Определение функции для обработки отправки формы
  const submitForm = () => {
    // Сбор значений из элементов формы
    const formValues = {
      Num1: document.getElementById("dropdown1").value,
      Num2: document.getElementById("dropdown2").value,
      Num3: document.getElementById("dropdown3").value,
      Num4: document.getElementById("dropdown4").value,
      Num5: document.getElementById("dropdown5").value,
      Input1: document.getElementById("input1").value,
      Input2: document.getElementById("input2").value,
    };

    // Преобразование объекта значений в строку JSON
    const jsonData = JSON.stringify(formValues);

    // Обнуление значений формы
    document.getElementById("myForm").reset();

    // Отображение JSON данных в элементе с идентификатором "jsonOutput"
    document.getElementById("jsonOutput").textContent = jsonData;

    // Отправка данных на сервер как отдельных GET-запросы
    fetch("handler.php?data=" + encodeURIComponent(jsonData))
      .then((response) => response.json())
      .then((response) =>
        alert("Response from server: " + JSON.stringify(response))
      )
      .catch((error) => console.error("Error:", error));
  };

  // Добавление слушателя события клика на кнопку с идентификатором "submitButton"
  document.getElementById("submitButton").addEventListener("click", submitForm);
});
