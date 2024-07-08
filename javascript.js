
for (let i = 0; i < 16; i++) {
    let outerdiv = document.createElement("div");
    outerdiv.className="outer";
    for (let j=0; j<16; j++){
        let innerdiv = document.createElement("div");

        // innerdiv.innerHTML = "test";
        innerdiv.className = 'inner';
        outerdiv.appendChild(innerdiv);
    }
    document.getElementById('container').appendChild(outerdiv);
}

function msg() {
    let input = prompt("Please enter size");
}
