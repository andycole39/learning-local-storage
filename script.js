let btn=document.querySelector("#btn");

btn.onclick = function(){
    let fullname = document.getElementById("fullname").value;
    let lastname = document.getElementById("lastname").value;



let person = {
    fullname: fullname,
    lastname : lastname,
    id : new Date().getTime()
}
let myData = checkLocal();

myData.push(person);
myData=JSON.stringify(myData);

localStorage.setItem("andrew",myData);

function checkLocal(){

let getAndrew= localStorage.getItem("andrew");
if(getAndrew == null || getAndrew == undefined){
    return[];
           
}else{ 
    getAndrew= JSON.parse(getAndrew);
    return(getAndrew);

}
}
}
