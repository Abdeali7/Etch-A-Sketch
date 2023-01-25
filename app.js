// let container = document.querySelector('.container');
// let containerSize = 500;

// let boxSize = document.querySelector('#size');

// boxSize.addEventListener('change', function (e) {
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }

//     let size = containerSize / (boxSize.value * boxSize.value);

//     let i = 1;
//     do {
//         let box = document.createElement("div");
//         box.style.height = `${size*boxSize.value}px`;
//         box.style.width = `${size*boxSize.value}px`;
//         box.classList.add('box');
//         container.appendChild(box);
//         i++;
//     } while (i <= (boxSize.value * boxSize.value));
// })

// let divs = document.querySelectorAll('.box');

// for (const div of divs) {
//     div.addEventListener('mouseover', function (e) {
//         e.stopPropagation();

//         // let changeColor = document.querySelector("[class='e.target.className']");
//         // let changeColor = document.querySelector('.1');
//         div.style.backgroundColor = '#202020';
//         console.log(e);
//     });
// }





let container = document.querySelector('.container');
let containerSize = 500;

let boxSize = document.querySelector('#size');

boxSize.addEventListener('change', function (e) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let size = containerSize / (boxSize.value * boxSize.value);

    for (let i = 1; i <= (boxSize.value * boxSize.value); i++) {
        let box = document.createElement("div");
        box.style.height = `${size*boxSize.value}px`;
        box.style.width = `${size*boxSize.value}px`;
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', function (e) {
            e.stopPropagation();
            box.style.backgroundColor = '#202020';
        });
    }
});

