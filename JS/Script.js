function EnviarMail() {
    var params = {
        from_name : document.getElementById("from_name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_zx759un", "template_d4kpijp", params).then(function (res) {
        alert("Mensaje enviado " + res.status);
    })
}