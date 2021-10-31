function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = d.getUTCFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

$(function(){
    var dtToday = new Date();    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();    
    var maxDate = year + '-' + month + '-' + day;
    $('#endDate').attr('min', maxDate);
});

function getReservationById(id) { 
    $.ajax({
        url: "http://localhost:8080/api/Reservation/"+id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $('#id').val(response.idReservation);
            $("#computerId").val(response.computer.name);
            $("#clientId").val(response.client.name);
            $("#dateBegin").val(formatDate(response.startDate));
            $("#endDate").val(formatDate(response.devolutionDate));
            $("#statusReservation").val(response.status);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getReservationById(myParam);


/*$( document ).ready(function() {
    $('#dateBegin').val(formatDate(new Date().toString()));
    $('#endDate').val(formatDate(new Date().toString()));
    
});*/