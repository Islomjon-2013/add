let count = document.querySelector(`.count`);
let btnMinus = document.getElementById(`minusBtn`);
let tbody = document.querySelector(`tbody`);
let productName= document.querySelector(`.productName`);
let narx = document.querySelector(`.narx`);
let total = document.querySelector(`.total`)


let i = 0;
 let k=1;


function plusBtn(){
count.innerHTML = ++i;
btnDisabled()
}
function minusBtn(){
    count.innerHTML = --i
    btnDisabled()
}
function btnDisabled(){

    if(i == 0){
        btnMinus.setAttribute(`disabled`,`disabled`)
    }else{
        btnMinus.removeAttribute(`disabled`,`disabled`)
    }
     }
function savat(){
    if(count.innerHTML<1){
        alert(`kerakli miqdorni kiriting`)
    }else{

let tr = document.createElement(`tr`);
let td1 = document.createElement(`td`);
let td2 = document.createElement(`td`);
let td3 = document.createElement(`td`);
let td4 = document.createElement(`td`);
let td5 = document.createElement(`td`);
td5.classList.add('result');

td1.innerHTML =k;
td2.innerHTML=productName.innerHTML;
td3.innerHTML= count.innerHTML;
td4.innerHTML= narx.innerHTML;
td5.innerHTML= count.innerHTML * narx.innerHTML;
tr.append(td1, td2, td3, td4,td5);
tbody.append(tr)
k++;
count.innerHTML = 0;
i = 0;
btnDisabled()
howMuch()

    }
}
function howMuch(){
    let s = 0;
let results = document.querySelectorAll(`.result`)
for (let result of results){
s = s +  +result.innerHTML;
}
total.innerHTML = s

}