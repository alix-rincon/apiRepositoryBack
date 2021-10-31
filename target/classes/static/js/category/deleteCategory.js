function deleteCategory(id) {
    var datos = {
        id: id
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Category/"+id,
        data: datosPeticion,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function () {
            location.reload(); 
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}