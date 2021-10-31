function deleteMessage(id) {
    var datos = {
        idReservation: id
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Reservation/"+id,
        data: datosPeticion,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function () {        
            setTimeout(function(){ window.location.href = "listReservation.html";  }, 2000);
            $("#alertSuccess").show().delay(5000).fadeOut();               
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}