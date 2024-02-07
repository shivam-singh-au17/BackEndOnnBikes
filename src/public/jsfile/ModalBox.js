function overlay() {
    let body = document.getElementById("cont");

    let div1 = document.createElement("div");
    div1.id = "popup1";

    let div2 = document.createElement("div");
    div2.id = "popup";

    let img = document.createElement("img");
    img.src = "https://raw.githubusercontent.com/shivam-singh-au17/BackEndOnnBikes/main/src/public/images/bike-offer.jpg";

    let btn = document.createElement("button");
    btn.id = "close";
    btn.innerHTML = "&times;";

    btn.addEventListener("click", function () {
        deletethis();
    });

    div2.appendChild(img);
    div2.appendChild(btn);

    div1.appendChild(div2);
    body.appendChild(div1);
}

let mydiv = document.getElementById("cont");

function deletethis() {
    mydiv.innerHTML = null;
}