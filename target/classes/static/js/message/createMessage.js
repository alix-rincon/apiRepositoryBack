function createMessage() {
    var params = {
        messageText: $("#messagetext").val(),
        computer: {id: $("#computerId").val()},
        client: {idClient: $("#clientId").val()} 
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url: "http://localhost:8080/api/Message/save",
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

function listComputer() {
    $.ajax({
        url: "http://localhost:8080/api/Computer/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option selected>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {
                select += `
                    <option value="${items[i].id}">${items[i].name}</option>`;
            }
            $("#computerId").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function listClient() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: 'GET',
        contentType: "application/JSON",
        success: function (items) {
            var select = `<option selected>Seleccione...</option>`;
            for (var i = 0; i < items.length; i++) {
                select += `
                    <option value="${items[i].idClient}">${items[i].name}</option>`;
            }
            $("#clientId").html(select);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

listComputer();
listClient();