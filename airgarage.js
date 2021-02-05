
function form() {
    var parent = document.getElementById("main")
    var div = document.createElement('div')
    var btn = document.createElement("button")
    parent.append(div)
    div.append(btn)
    btn.textContent = "submit"
}

var sub = document.getElementsById("fun")
sub.addEventListener("click", form)

