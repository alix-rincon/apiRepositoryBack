function getMessageById(id) { 
    $.ajax({
        url: "http://localhost:8080/api/Message/"+id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log(response.computer.name);
            $("#id").val(response.idMessage),
            $("#messagetext").val(response.messageText),
            $("#computerId").val(response.computer.name)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getMessageById(myParam);