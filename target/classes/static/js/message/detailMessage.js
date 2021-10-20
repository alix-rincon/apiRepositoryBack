function getMessageById(id) { 
    $.ajax({
        url: "https://g0cfb8d8089c168-bdrentcar.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            var items = response.items;
            $("#id").val(items[0].id),
            $("#messagetext").val(items[0].messagetext)
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
getMessageById(myParam);