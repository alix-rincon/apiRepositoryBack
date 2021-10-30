function deleteComputer(id) {
    var datos = {
        id: id
    }


    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Computer/"+id,
        data: datosPeticion,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function () {
            window.location.href = "listComputer.html";
        },
        error: function (xhr, status) {
            console.log(status);
            console.log(xhr);
        }
    });
}