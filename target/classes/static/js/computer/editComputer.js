function editComputer() {
    
    var datos = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        data: datosPeticion,
        type: 'PUT',
        contentType: "application/JSON",
        success: function() {
            window.location.href = "../../index.html";
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });


}