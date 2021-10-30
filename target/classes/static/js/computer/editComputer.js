function editComputer() {    
    var datos = {
        id: $("#id").val(),
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val(),
        category: {id: $("#category_id").val()}    
    }

    let datosPeticion = JSON.stringify(datos);
    $.ajax({
        url: "http://localhost:8080/api/Computer/update",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "listComputer.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}