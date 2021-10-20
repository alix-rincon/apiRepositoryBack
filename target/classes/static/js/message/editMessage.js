function editMessage() {
    
    var datos = {
        id: $("#id").val(),       
        messagetext: $("#messagetext").val()
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
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