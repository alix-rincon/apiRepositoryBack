function getClientById(id) { 
    $.ajax({
        url: "http://localhost:8080/api/Category/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $("#id").val(response.id),
            $("#name").val(response.name),
            $("#description").val(response.description)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getClientById(myParam);