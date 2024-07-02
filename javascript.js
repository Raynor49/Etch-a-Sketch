for (let i = 0; i < 16; i++) {
    console.log("test");
    if((i+1)%4==0){

    }
    const newdiv = document.createElement("div");
    newdiv.innerHTML = "hello world";
    newdiv.className="innerDiv"
    document.getElementById("container").appendChild(newdiv);
}
