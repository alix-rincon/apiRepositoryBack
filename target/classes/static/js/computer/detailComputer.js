function getComputerById(id) { 
    $("#id").prop('disabled', true);  
    $("#id").prop('readonly', true);
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            var items = response.items;
            console.log(items);
            $("#id").val(items[0].id),
            $("#brand").val(items[0].brand),
            $("#model").val(items[0].model),
            $("#category_id").val(items[0].category_id),
            $("#name").val(items[0].name)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getComputerById(myParam);