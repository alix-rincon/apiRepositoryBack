function listTotalReservation() {
    var beginDate = $("#beginDate").val();
    var endDate = $("#endDate").val();

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-dates/"+beginDate+"/"+endDate,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $("#totalReservas").val(response.length);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listReservationByStatus() {
    var beginDate = $("#beginDate").val();
    var endDate = $("#endDate").val();

    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-status",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $("#totalCompleted").val(response.completed);
            $("#totalCancelled").val(response.cancelled);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function listReportByClients() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/report-clients",
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response);
            reportClients(response);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}

function reportClients(items) {
    var tabla = `<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"># Total de Reservas</th>
                        <th scope="col">ID Cliente</th>
                        <th scope="col">Nombres</th> 
                        <th scope="col">Email</th>
                    </tr>
                </thead>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tbody>
                    <tr>
                        <th scope="row">${items[i].total}</th>
                        <td>${items[i].client.idClient}</td>
                        <td>${items[i].client.name}</td>
                        <td>${items[i].client.email}</td>                 
                    </tr>
                </tbody>
        `;
    }

    tabla += `</table>`;
    $("#listado-clientes").html(tabla);
}