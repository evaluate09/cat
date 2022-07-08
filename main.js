function supersecretpass(){
    let supersecret = prompt("cat?");
    if (supersecret == "cat") {
        location.href = "supersecret.html";
    } else {
        alert("no cat D:")
    }
} function count(){
    let count = 0;
    count += 1;
    document.getElementById("count").innerHTML = count;
}
