function agregar() {
    var params = {
        brand: $("#brand").val(),
        year: $("#year").val(),
        category: {id: $("#category_id").val()},
        name: $("#name").val(),
        description: $("#description").val()      
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url: "http://localhost:8080/api/Computer/save",
        data: dataToSend,
        type: 'POST',
        contentType: "application/JSON",
        success: function () {
            $(".container input,textarea").val("");
            $(".container select").val("Seleccione...");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function listCategories() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option selected>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {
                select += `
                    <option value="${items[i].id}">${items[i].name}</option>`;
            }  
            $("#category_id").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });  
}

listCategories();