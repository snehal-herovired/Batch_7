let company_details =document.querySelector(".header")
let fill_details =company_details.children

for (let index = 0; index < fill_details.length; index++) {
    fill_details[index].addEventListener("click",fill_form)
}

function fill_form(e){
    let details_to_fill =prompt("write the details for the tag clicked :")
    e.target.innerText =details_to_fill
}

//this is for extracting tbody tag and updating the data;
// /through prompt
//children property gives all the child html tag present


let table_data =document.querySelector('tbody')
console.log(table_data.children);

for(let i=1 ;i<table_data.children.length;i++){
    table_data.children[i].addEventListener('click',fill_form)
}

let data = document.querySelector('.table>tbody')
console.log(data.children);
data =data.children;

let total = document.querySelector('.total')
let subtotal = document.querySelector('.subtotal')
let adjustments = document.querySelector('.adjustment')
subtotal =parseInt(subtotal.innerText)
adjustments =parseInt(adjustments.innerText)

console.log(total.innerText);
for(let i =1;i<=2;i++){
    data[i].addEventListener("click",fill_form)
}
