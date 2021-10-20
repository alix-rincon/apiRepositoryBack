function addClient() {
    var params = {     
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val()
    }
    let dataToSend = JSON.stringify(params);
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        data:dataToSend,
        type:'POST',
        contentType:"application/JSON",
        success: function () {
            $(".container input").val("");
            $("#alertSuccess").show().delay(3000).fadeOut();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR , textStatus, errorThrown);
        }
    });
}
