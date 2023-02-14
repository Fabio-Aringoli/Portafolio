//function EnviarMail() {
    //var params = {
       // from_name : document.getElementById("from_name").value,
        //email_id : document.getElementById("email_id").value,
        //message : document.getElementById("message").value
    //}
    //emailjs.send("service_zx759un", "template_d4kpijp", params).then(function (res) {
       // alert("Mensaje enviado " + res.status);
    //})
//}


const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_d4kpijp';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});