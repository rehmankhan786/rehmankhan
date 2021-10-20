var input = document.getElementsByClassName("input_class");
var form = document.getElementById("m_form");
form.addEventListener("submit", (e) => {
    e.peventDefault();
    input.innerHTML = "";
    swal("Form Submitted", "your form has been Submitted.", "Ok")
})