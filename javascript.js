
for (let i = 0; i < 16; i++) {
    let outerdiv = document.createElement("div");

    for (let j=0; j<16; j++){
        let innerdiv = document.createElement("div");

        innerdiv.innerHTML = "test"
        outerdiv.appendChild(innerdiv);
    }
    document.getElementById('container').appendChild(outerdiv);
}
