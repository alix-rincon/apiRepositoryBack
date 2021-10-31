function listReservation() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listAllReservations(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listAllReservations(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"># ID</th>
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Devolución</th> 
                        <th scope="col">Computador</th>  
                        <th scope="col">ID Cliente</th>   
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Estado</th>                                            
                        <th scope="col" colspan=2>Acciones</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].idReservation}</th>
                        <td>${formatDate(items[i].startDate)}</td>
                        <td>${formatDate(items[i].devolutionDate)}</td>
                        <td>${items[i].computer.name}</td>
                        <td>${items[i].client.idClient}</td>    
                        <td>${items[i].client.name}</td> 
                        <td>${items[i].client.email}</td> 
                        <td>${items[i].status}</td>                         
                        <td style="width:8%"><button type="button" class="btn btn-info btn-sm" onclick="detailMessage(${items[i].idReservation})">Editar</td>   
                        <td style="width:8%"><button type="button" class="btn btn-sm btn-outline-dark" onclick="deleteMessage(${items[i].idReservation})">Borrar</td>
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado").html(tabla);
}
function detailMessage(id){
    window.location.href="detailReservation.html?id="+id;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() +1),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

listReservation();