// Selectors
let items = document.querySelector("#items");
let qty = document.querySelector("#qty");
let addBtn = document.querySelector("#addBtn");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector("#rows");
let total = document.querySelector(".total");

// function
function calcTotal(){
    let costs = document.querySelectorAll('.cost');
    total.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
};

function del(event){
    if(confirm("Are you delete?")){
        event.target.parentElement.parentElement.remove();
        calcTotal();
    } 
};


// process
products.forEach(function (product){
    let newOption = new Option(product.name,product.id)
    items.append(newOption);
});

inputForm.addEventListener('submit',function(e){
    e.preventDefault();
    let currentProdut = products.find(product=>product.id == items.value);
    let cost = currentProdut.price * qty.valueAsNumber;
    let newTr = document.createElement('tr');
    newTr.innerHTML = `
                    <td>
                    ${currentProdut.name}<br>
                    <button class="btn btn-outline-danger btn-sm mt-1 btnDel" onclick="del(event)">
                            <i class="bi bi-trash3"></i>
                    </button>
                    </td>
                    <td class="text-end">${currentProdut.price}</td>
                    <td class="text-end">${qty.valueAsNumber}</td>
                    <td class="text-end cost">${cost}</td>
                    `;
    rows.append(newTr);
    inputForm.reset();
    calcTotal();
});
