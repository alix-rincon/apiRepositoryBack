function listar() {
    $.ajax({
        url: "http://localhost:8080/api/Computer/all",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listAllComputerItems(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllComputerItems(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Marca</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Año</th>
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;
    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>                      
                        <td>${items[i].brand}</td>
                        <td>${items[i].category.name}</td>
                        <td>${items[i].name}</td>  
                        <td>${items[i].year}</td>     
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailComputer(${items[i].id})">Editar</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteComputer(${items[i].id})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailComputer(id){
    window.location.href="../../views/computer/editComputer.html?id="+id;
}
listar();