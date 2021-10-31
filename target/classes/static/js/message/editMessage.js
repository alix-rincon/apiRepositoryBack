function editMessage() {
    
    var datos = {
        idMessage: $("#id").val(),       
        messageText: $("#messagetext").val()
    }

    let datosPeticion = JSON.stringify(datos);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "listMessage.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}