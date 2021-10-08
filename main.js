function btnFunct() {
    var Copy = document.getElementById("fullName").value;
    var fullName = document.getElementById("_fullName").value = Copy;
}

function btnFunction() {
    var copySec = document.getElementById("Section").value;
    var Section = document.getElementById("_Section").value = copySec;
}

document.getElementById("_fullName").disabled = true;
document.getElementById("_Section").disabled = true;