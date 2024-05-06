const button = document.querySelector("#addButton");
let appearHead = document.createElement("h1");
appearHead.innerText = "Please Write something inside the Inpute feild.";
appearHead.style.color = "red";

button.addEventListener("click" , () => {
    let selectvalue = document.querySelector("#input").value;
    if(selectvalue === ""){
        document.querySelector(".container").appendChild(appearHead);
    } else{
        appearHead.remove();
        const appearinput = document.createElement("input");
    appearinput.classList.add("bottumInput");
    appearinput.style.visibility = "visible";
    appearinput.value = selectvalue;

    document.querySelector("#input").value = "";
    const icone = document.createElement("i");
    icone.classList.add("fa-solid" ,"fa-trash-can");
    icone.addEventListener ("click" , () =>{
        appearinput.remove();
        icone.remove();
    });
    document.querySelector(".container").appendChild(appearinput);
    document.querySelector(".container").appendChild(icone);
    };
});

