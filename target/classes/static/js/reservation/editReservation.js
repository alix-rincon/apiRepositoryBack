function editReservation() {
    
    var datos = {
        idReservation : $("#id").val(),
        startDate: $("#dateBegin").val(),
        devolutionDate: $("#endDate").val(),
        status: $("#statusReservation").val()      
    } 
    let datosPeticion = JSON.stringify(datos);
    console.log(datosPeticion);
    $.ajax({
        url: "http://localhost:8080/api/Reservation/update",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "listReservation.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}