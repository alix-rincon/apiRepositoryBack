function createCategory() {
    var params = {
        name: $("#name").val(),
        description: $("#description").val()
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url:"http://localhost:8080/api/Category/save",
        data:dataToSend,
        type:'POST',
        contentType:"application/JSON",
        success: function () {
            $(".container input,textarea").val("");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR , textStatus, errorThrown);
        }
    });
}