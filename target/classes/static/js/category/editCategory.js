function editCategory() {
    
    var datos = {
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val()
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Category/update",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "listCategory.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}