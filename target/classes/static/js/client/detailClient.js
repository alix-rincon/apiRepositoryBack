function getClientById(id) { 
    $.ajax({
        url: "http://localhost:8080/api/Client/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            $("#id").val(response.idClient),
            $("#name").val(response.name),
            $("#email").val(response.email),
            $("#age").val(response.age)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getClientById(myParam);