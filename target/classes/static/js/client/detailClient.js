function getClientById(id) { 
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            var items = response.items;
            console.log(items);
            $("#id").val(items[0].id),
            $("#name").val(items[0].name),
            $("#email").val(items[0].email),
            $("#age").val(items[0].age)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getClientById(myParam);