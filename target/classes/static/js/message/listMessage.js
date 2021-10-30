function listMessage() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            listAllMessages(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllMessages(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Mensaje</th>
                        <th scope="col">Cliente</th> 
                        <th scope="col">Computador</th>                                              
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].messageText}</th>
                        <td>${items[i].client.name}</td>
                        <td>${items[i].computer.name}</td>                        
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailMessage(${items[i].idMessage})">Detalle</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteMessage(${items[i].idMessage})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailMessage(id){
    window.location.href="detailMessage.html?id="+id;
}
listMessage();