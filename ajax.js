$( document ).ready(function() {
	$("#btn").click(function(){
		if ($("#phone").inputmask("isComplete")){
		console.log("полностью");
		sendAjaxForm('result_form', 'ajax_form', 'send.php');
		$('#result_form').html('<img src="img/25.gif">');
		return false; 

		} else {
			console.log("не полностью");
			$('#result_form').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">Введите корректный номер телефона</div>');
		}
	});
});

// $( document ).ready(function() {

// 	$("#btn").click(
// 		function(){
// 			sendAjaxForm('result_form', 'ajax_form', 'send.php');
// 			return false; 
// 		}
// 	);
	
// });
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
			$('#result_form').html('');
			$("#exampleModal").modal('show');
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Попробуйте еще раз...');
    	}
 	});
}