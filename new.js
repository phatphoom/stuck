const showtext =document.getElementById("show");
const field  = document.getElementById("inputfield");
const container = document.querySelector(".container");
const countbtn = document.getElementById("countbtn");
const counttext = document.getElementById("counttext");
function normal(){
    var paragraph = document.createElement("p");
    paragraph.innerText = field.value;
    field.value = "";
    container.appendChild(paragraph);
    // if(field.value.length == 0){
    //     alert("empty")
    // }
}
function counts(){
    let item = document.getElementsByTagName("p");
    // if(item.value == "" || item.value == null){
    //     return false
    // }
    // else if (counttext.innerHTML = item.length){
    //     return true
    // }

    if(item.value != "" || item.value != null){
        return counttext.innerHTML = item.length;
    }
    else if (item.value = "" || item.value == null){
        return false
    }
    console.log(item);
}





field.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        e.preventDefault();
        document.getElementById("submitbtn").click();
    }
})
