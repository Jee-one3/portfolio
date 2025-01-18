const form = document.querySelector('form');

const name = document.getElementById("name");
const mail = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `Name: ${name.value}<br> Email: ${mail.value}<br> 
    Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jeevanusa2000@gmail.com",
        Password : "8A6D83716706D47202B24FCAF4C38FFB8D67",
        To : 'jeevanusa2000@gmail.com',
        From : "jeevanusa2000@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Thank You!",
                text: "Message Sent",
                icon: "success"
              });
        }

      }
    );

}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})
