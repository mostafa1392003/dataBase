let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let count = document.getElementById("count");
let catogrey = document.getElementById("catogrey");
let submit = document.getElementById("submit");
let search = document.getElementById("search");
let btn1search = document.getElementById("searchBYtitle");
let total = document.getElementById("total");
let btn2search = document.getElementById("search BY category");
let deletall = document.getElementById("deletall");
let mood = "create";
let searchmood="title";
let index;
/**get total */
function getTotal() {
    if (price.value != "") {
        let result = +price.value + +taxes.value + +ads.value - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = " rgb(0, 255, 0)";
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = " rgb(239, 169, 231)";
    }
}
/*creat*/
let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product);
} else {
    datapro = [];
}

submit.onclick = function() {
    let newpro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        count: count.value,
        catogrey: catogrey.value.toLowerCase(),
        total: total.innerHTML,
    };


    if(title.value!='' && price.value !=''&&catogrey.value!=''
    &&count.value<100){
    if (mood === "create") {
        if (count.value > 1) {
            for (let j = 0; j < count.value; j++) {
                datapro.push(newpro);

                localStorage.setItem("product", JSON.stringify(datapro));
            }
        } else {
            datapro.push(newpro);

            localStorage.setItem("product", JSON.stringify(datapro));
        }
    } else {
        datapro[index] = newpro;
        mood = "create";
        count.style.display = "block";
        submit.value = "create";
    }
    cleardata();
}
    
    read();
};

function cleardata() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    count.value = "";
    catogrey.value = "";
    total.innerHTML = "";
}
/*red*/
function read() {
    let table = "";
    for (let i = 0; i <datapro.length; i++) {
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].catogrey}</td>
        <td>${datapro[i].total}</td>
        <td><button id="update" onclick='update(${i})'>up data</button></td>
        <td><button id="delet" onclick='clearOneData(${i})'>delet</button></td>
        
    </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = table;
    if (datapro.length > 0) {
        deletall.innerHTML = `
    <button id='deletall' class='deletall' onclick='deletalldata()'>delet all(${datapro.length})<button>
    `;
    } else {
        deletall.innerHTML = "";
    }
}

read();

function clearOneData(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    read();
}

function deletalldata() {
    localStorage.clear();
    datapro.splice(0);
    read();
}

function update(i) {
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    catogrey.value = datapro[i].catogrey;
    submit.value = "up data";
    getTotal();
    count.style.display = "none";
    mood = "updata";
    index = i;
    scroll({
        top: 0,
        behavior: "smooth",
    });
}

/*serch*/
function getSearchMood(id){
    
if(id=='searchBYtitle'){
    searchmood="title";
  search.placeholder="title"

 
}
else{
    searchmood="category";
    search.placeholder="category"

}



search.value=''

   search.focus()

console.log(searchmood)
read()
}



function searchdata(value){
    let table='';

    console.log(value)
    if( searchmood=="title"){

for(let c=0 ;c<datapro.length;c++){

   if(datapro[c].title.includes(value.toLowerCase())) {

    table += `
    <tr>
    <td>${c}</td>
    <td>${datapro[c].title}</td>
    <td>${datapro[c].price}</td>
    <td>${datapro[c].taxes}</td>
    <td>${datapro[c].ads}</td>
    <td>${datapro[c].discount}</td>
    <td>${datapro[c].catogrey}</td>
    <td>${datapro[c].total}</td>
    <td><button id="update" onclick='update(${c})'>up data</button></td>
    <td><button id="delet" onclick='clearOneData(${c})'>delet</button></td>
    
</tr>
    `;
}


}


















    }
    else
    {

        for(let c=0 ;c<datapro.length;c++){

            if(datapro[c].catogrey.includes(value)) {
         
             table += `
             <tr>
             <td>${c}</td>
             <td>${datapro[c].title}</td>
             <td>${datapro[c].price}</td>
             <td>${datapro[c].taxes}</td>
             <td>${datapro[c].ads}</td>
             <td>${datapro[c].discount}</td>
             <td>${datapro[c].catogrey}</td>
             <td>${datapro[c].total}</td>
             <td><button id="update" onclick='update(${c})'>up data</button></td>
             <td><button id="delet" onclick='clearOneData(${c})'>delet</button></td>
             
             </tr>
             `;
            }
         
         
        }
         
         
         

    }
document.getElementById("tbody").innerHTML = table;
}













let btn55=document.getElementById('scrol');







btn55.onclick=function(){
    scroll({
        top: 0,
        behavior: "smooth",
    });
};