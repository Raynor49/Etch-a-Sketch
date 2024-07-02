const outerdiv = document.createElement("div");
for (let i = 0; i < 16; i++) {
    console.log("test");
    const newdiv = document.createElement("div");
    newdiv.innerHTML = "hello world";
    newdiv.className="innerDiv"


    if ((i + 1) % 4 == 0) {
        const outerdiv = document.createElement("div");
        outerdiv.appendChild(newdiv);
    }
    outerdiv.className = "outerdiv";
    document.getElementById("container").appendChild(outerdiv);
}
