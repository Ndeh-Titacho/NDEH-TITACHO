function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ibazbff";
  const templateID = "template_gpivg7l";

  emailjs.send(serviceID, templateID, params).then(function (res) {
    name: document.getElementById("name").value = "";
    email: document.getElementById("email").value = "";
    phone: document.getElementById("phone").value = "";
    message: document.getElementById("message").value = "";
    console.log(res);

    if (message == "OK") {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  });
}
