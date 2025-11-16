const sound = document.getElementById('natureSound');
let soundStarted = false;

const input = document.querySelector('.input');
const add = document.querySelector('.button');
const list = document.querySelector('.list');

add.addEventListener('click', function () {
    if (!soundStarted) {
        sound.play().catch(() => console.log("Autoplay blocked"));
        soundStarted = true;
    }
    let value = input.value;
    if (value.trim() === "") {
        alert("eneter something");
    }
    else {
        let li = document.createElement('li');
        li.className = "list_item";

        let div = document.createElement('div');
        div.className = "check_text";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "8px";

        let inp = document.createElement('input');
        inp.type = "checkbox";

        let span = document.createElement('span');
        span.textContent = value;

        div.appendChild(inp);
        div.appendChild(span);


        let img = document.createElement('img');
        img.id = "delete_img";
        img.src = "delete.png";
        img.alt = "not";
        img.style.cursor = "pointer";

        img.addEventListener('click', function () {
            list.removeChild(li)
        });

        inp.addEventListener('click', function () {
            if (inp.checked) {
                span.style.color = "#555555ff";
                span.style.textDecoration = "line-through";

            }
            else {
                span.style.color = "black";
                span.style.textDecoration = "none";
            }
        })

        li.appendChild(div);
        li.appendChild(img);
        list.appendChild(li)

        input.value = "";

    }
});

const adds=document.querySelector('.add');
const menu=document.querySelector('.menu');

adds.addEventListener('click',()=>{
    menu.classList.toggle('active');
    adds.classList.toggle('rotate');
})
