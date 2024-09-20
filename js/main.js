


function convert() {
    var myInput = document.getElementById("myInput").value;
    var demo = document.getElementById("demo");
    if (isNaN(myInput)) {
        demo.innerHTML = "Enter number not text";
    } else if (myInput <= 0) {
        demo.innerHTML = "Enter postive number"
    } else {
        demo.innerHTML = myInput * 50;
    }

    return false;
}

// var counter = 0
function inDate() {
    // counter++;
    demo.innerHTML++;
    document.getElementById("demo").innerHTML = demo.innerHTML;
}

function unDate() {
    // counter--;
    demo.innerHTML--;
    document.getElementById("demo").innerHTML = demo.innerHTML;
}
