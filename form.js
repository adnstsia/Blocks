$(document).ready(function () {
  function submitForm() {
    const formData = {
      Num1: $("#dropdown1").val(),
      Num2: $("#dropdown2").val(),
      Num3: $("#dropdown3").val(),
      Num4: $("#dropdown4").val(),
      Num5: $("#dropdown5").val(),
      Best: $("#input1").val(),
      Worst: $("#input2").val(),
    };

    // Сбрасываем значения в форме
    document.getElementById("myForm").reset();

    // Переводим данные в JSON
    const jsonData = JSON.stringify(formData);

    // Отображаем данные в JSON
    $("#jsonOutput").text(jsonData);

    // Асинхронный GET-запрос
    $.ajax({
      url: "handler.php",
      method: "GET",
      data: { data: jsonData },
      dataType: "json",
      success: function (response) {
        alert("Response from server: " + JSON.stringify(response));
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  }

  // Добавляем слушатель клика на кнопку
  $("#submitButton").click(submitForm);
});
