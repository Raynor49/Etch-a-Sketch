function buildBox(size) {

    for (let i = 0; i < size; i++) {
        let outerdiv = document.createElement("div");
        outerdiv.className = "outer";
        for (let j = 0; j < size; j++) {
            let innerdiv = document.createElement("div");

            // innerdiv.innerHTML = "test";
            innerdiv.className = 'inner';
            innerdiv.id = i;
            innerdiv.style.height = (950/size) + 'px';
            innerdiv.style.width = (950/size) + 'px';
            outerdiv.appendChild(innerdiv);
            innerdiv.onmouseover = function () {
                changeColor(innerdiv);
            }
        }
        document.getElementById('container').appendChild(outerdiv);
    }
}

function changeColor(element) {
    element.style.backgroundColor = 'red';
}

function start() {
    let container = document.getElementById('container');
    container.innerHTML = '';

    let input = prompt("Please enter size");
    if(input > 100){
        input = 100;
    }
    console.log(input);
    buildBox(input);
}
