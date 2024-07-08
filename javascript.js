function buildBox(size) {
    let container = document.getElementById('container');
    console.log(container);
    for (let i = 0; i < size; i++) {
        let outerdiv = document.createElement("div");
        outerdiv.className = "outer";
        for (let j = 0; j < size; j++) {
            let innerdiv = document.createElement("div");

            // innerdiv.innerHTML = "test";
            innerdiv.className = 'inner';
            innerdiv.id = i + '-' + j;
            innerdiv.style.height = (container.clientHeight/size) + 'px';
            innerdiv.style.width = (container.clientWidth/size) + 'px';
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
