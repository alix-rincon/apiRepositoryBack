function listCategories(id = null) {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {               
                var selected = (id === items[i].id)
                select += `<option ${(selected ? "selected" : "")} value="${items[i].id}">${items[i].name}</option>`;
            }  
            $("#category_id").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });  
}
function getComputerById(id) { 
    $("#id").prop('disabled', true);  
    $("#id").prop('readonly', true);
    $.ajax({
        url: "http://localhost:8080/api/Computer/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) { 
            console.log(response);         
            $("#id").val(response.id),
            $("#brand").val(response.brand),
            $("#year").val(response.year),
            $("#description").val(response.description),
            listCategories(response.category.id);
            $("#name").val(response.name)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getComputerById(myParam);
listCategories();