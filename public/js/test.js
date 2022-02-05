// const boxContainer = document.querySelector('.box-container');
let boxes = document.querySelectorAll('.box');
let boxActive = 2;
var arr = [0, 1, 2];

boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        if(box.className !== "box active"){
            boxes.forEach(box =>{
                box.classList = "box";
            });
            box.classList.add('active');

            // if(boxActive > parseInt(box.innerHTML)){
                arr.unshift(arr.pop())
            // } else{
            //     arr.push(arr.shift()) 
            // }

            boxActive = parseInt(box.innerHTML);

            var boxContainer = document.getElementsByClassName("box-container");
            var items = boxContainer[0].children;
            var elements = document.createDocumentFragment();

            arr.forEach((idx) => {
                elements.appendChild(items[idx].cloneNode(true));
            });

            boxContainer[0].innerHTML = null;
            boxContainer[0].appendChild(elements);

            boxes = document.querySelectorAll('.box');
            
        }
    });
});

// var elements = document.createDocumentFragment();

// arr.forEach((idx) => {
//     elements.appendChild(items[idx].cloneNode(true));
// });

// boxContainer[0].innerHTML = null;
// boxContainer[0].appendChild(elements);


// arr1.push(arr1.shift()) // [2, 3, 4, 5, 1]

// // last to the first
// arr2.unshift(arr2.pop()) // [5, 1, 2, 3, 4]


// let store;

// for(let i = 0; i < boxes.length; i++){
//     if(i === 0){
//         store = boxes[0].innerHTML;
//     }

//     if(i !== 2){
//         boxes[i].innerHTML = boxes[i + 1].innerHTML;
//     }else{
//         boxes[i].innerHTML = store;
//     }
// }
