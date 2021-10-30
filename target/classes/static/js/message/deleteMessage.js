function deleteMessage(id) {
    var datos = {
        idMessage: id
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Message/"+id,
        data: datosPeticion,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function () {
            window.location.href = "listMessage.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}