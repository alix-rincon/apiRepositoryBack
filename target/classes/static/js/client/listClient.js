function listClient() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            listAllClients(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllClients(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edad</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].name}</th>
                        <td>${items[i].email}</td>
                        <td>${items[i].age}</td>   
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailClient(${items[i].idClient})">Editar</td>   
                        <!--<td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteClient(${items[i].idClient})">Borrar</td>-->
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailClient(id){
    window.location.href="../../views/client/detailClient.html?id="+id;
}
listClient();