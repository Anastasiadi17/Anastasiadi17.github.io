    $(document).ready(function(){   //Стандартная функция, которая выполняет скрипты, когда документ будет полностью загружен
    $(".Form").submit(function(e){  //Запускает событие на выбранный элемент
        e.preventDefault();  //Предотвращает стандартное выполнение каких-либо действий
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize() //Сбор всех полей формы в одну строку или массив
        }).done(function() {  //При успешной отправке, выдаёт следующее сообщение
          alert('Отправлено.');
		  document.getElementById('mainForm').reset();
        }).fail(function() {
          alert('Что-то пошло не так.');
		  document.getElementById('mainForm').reset();
        });
      });
    });