
function listReservations(id) {
    $.ajax({
        url: "http://localhost:8080/api/Client/reservations/"+id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            listReservationByClient(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
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

function listReservationByClient(items){
    var tabla = `<br><table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID Reservación</th> 
                            <th scope="col">Fecha Inicio</th>
                            <th scope="col">Fecha Devolución</th>  
                            <th scope="col">Estado</th>    
                            <th scope="col">Computador</th>                                                                    
                        </tr>
                    </thead>`;
    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <td>${items[i].idReservation}</td>
                        <td>${formatDate(items[i].startDate)}</td>
                        <td>${formatDate(items[i].devolutionDate)}</td>  
                        <td>${items[i].status}</td>
                        <td>${items[i].computer.name}</td>                                                                        
                    </tr>
                </tbody>`;
    }

    tabla += `</table>`;
    $("#listadoCategorias").html(tabla);
}